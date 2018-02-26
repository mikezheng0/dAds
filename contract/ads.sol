pragma solidity ^0.4.16;
contract Ads { // version 0.10
 
    struct Ad{
		uint id;
		address owner;
		string imageUrl;
		string linkUrl;
		string title;
		uint256 payout;
		bool canChange;
    }
	
	Ad public topAd;
	Ad public firstAd;
	Ad public secondAd;
	Ad public thirdAd;
    
	uint256 public topAdCurrentPrice = 1000000000000000;
	uint256 public currentPrice = 1000000000000000;
	uint256 public feesCollected = 0;
	address public contractOwner;
    
	function Ads() public{
		contractOwner = msg.sender;
		topAd.id = 0;
		firstAd.id = 1;
		secondAd.id = 2;
		thirdAd.id = 3;
    }

	function placeTopAd(string imageUrl, string linkUrl, string title) payable public{
		if(msg.value >= topAdCurrentPrice){
			uint256 overpaid = msg.value - topAdCurrentPrice;
			if (overpaid > 0){
				msg.sender.transfer(overpaid);
			}
			uint256 payoutPrice = (topAdCurrentPrice * 105) / 100;
            
			topAd.owner.transfer(topAd.payout);
            
			topAd = Ad({
				owner : msg.sender,
				imageUrl: imageUrl,
				linkUrl: linkUrl,
				title: title,
				payout: payoutPrice,
				canChange : true,
				id: 0
			});
            
			topAdCurrentPrice = (topAdCurrentPrice * 110) / 100;
			feesCollected = feesCollected + topAdCurrentPrice - payoutPrice;
            
		} else {
			msg.sender.transfer(msg.value);
		}
	}
    
	function placeAd(string imageUrl, string linkUrl, string title) payable public{
		if(msg.value >= currentPrice){
			uint256 overpaid = msg.value - currentPrice;
			if (overpaid > 0){
				msg.sender.transfer(overpaid);
			}
			uint256 payoutPrice = (currentPrice * 105) / 100;

			thirdAd.owner.transfer(thirdAd.payout);

			thirdAd = secondAd;
			thirdAd.id = 3;
			secondAd = firstAd;
			secondAd.id = 2;
			firstAd = Ad({
				owner : msg.sender,
				imageUrl: imageUrl,
				linkUrl: linkUrl,
				title: title,
				payout: payoutPrice,
				canChange : true,
				id: 1
			});
            
			currentPrice = (currentPrice * 110) / 100;
			feesCollected = feesCollected + currentPrice - payoutPrice;
            
		} else {
			msg.sender.transfer(msg.value);
		}
	}
    
	function modifyAd(uint id, string title, string imageUrl, string linkUrl) hasValidId(id) public{
		if(id == 0){
			require((msg.sender == topAd.owner && topAd.canChange) || msg.sender == contractOwner);
			topAd.title = title;
			topAd.imageUrl = imageUrl;
			topAd.linkUrl = linkUrl;
		} else if(id == 1){
			require((msg.sender == firstAd.owner && firstAd.canChange) || msg.sender == contractOwner);
			firstAd.title = title;
			firstAd.imageUrl = imageUrl;
			firstAd.linkUrl = linkUrl;
		} else if(id == 2) {
			require((msg.sender == secondAd.owner && secondAd.canChange) || msg.sender == contractOwner);
			secondAd.title = title;
			secondAd.imageUrl = imageUrl;
			secondAd.linkUrl = linkUrl;
		} else {
			require((msg.sender == thirdAd.owner && thirdAd.canChange) || msg.sender == contractOwner);
			thirdAd.title = title;
			thirdAd.imageUrl = imageUrl;
			thirdAd.linkUrl = linkUrl;
		}
	}
    
	modifier onlyOwner {
		require(msg.sender == contractOwner);
		_;
	}
    
	modifier hasValidId(uint id) {
		require(id >= 0 && id <= 3);
		_;
	}
    
	function disableChangePermissions(uint256 id) onlyOwner hasValidId(id) public {
		if(id == 0){
			topAd.canChange = false;
		} else if(id == 1) {
			firstAd.canChange = false;            
		} else if(id == 2) {
			secondAd.canChange = false;
		} else {
			thirdAd.canChange = false;
		}
	}

	function withdrawFees() onlyOwner public{
		msg.sender.transfer(feesCollected);
		feesCollected = 0;
	}
    
	function changeOwner(address newOwner) onlyOwner public {  
		contractOwner = newOwner;
	}
}