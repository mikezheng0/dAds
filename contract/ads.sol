pragma solidity ^0.4.16;
contract Ads { // version 0.11
 
  struct decentralAd {
		address owner;
		string imageUrl;
		string linkUrl;
		string title;
		uint256 payout;
		bool canChange;
  }
	
	decentralAd[4] public Ad;
    
	uint256 public topAdCurrentPrice = 1000000000000000;
	uint256 public currentPrice = 1000000000000000;
	uint256 public feesCollected = 0;
	address public contractOwner;
  
  function() payable {
    feesCollected += msg.value;
  }

	function Ads() public{
		contractOwner = msg.sender;
  }

	function placeTopAd(string imageUrl, string linkUrl, string title) validCharacterLength(imageUrl, linkUrl, title) payable public{
		if(msg.value >= topAdCurrentPrice){
			uint256 overpaid = msg.value - topAdCurrentPrice;
			if (overpaid > 0){
				msg.sender.transfer(overpaid);
			}
			uint256 payoutPrice = (topAdCurrentPrice * 105) / 100;
            
			Ad[0].owner.transfer(Ad[0].payout);
            
			Ad[0] = decentralAd({
				owner : msg.sender,
				imageUrl: imageUrl,
				linkUrl: linkUrl,
				title: title,
				payout: payoutPrice,
				canChange : true
			});
            
			topAdCurrentPrice = (topAdCurrentPrice * 110) / 100;
			feesCollected = feesCollected + topAdCurrentPrice - payoutPrice;
            
		} else {
			msg.sender.transfer(msg.value);
		}
	}
    
	function placeAd(string imageUrl, string linkUrl, string title) validCharacterLength(imageUrl, linkUrl, title) payable public{
		if(msg.value >= currentPrice){
			uint256 overpaid = msg.value - currentPrice;
			if (overpaid > 0){
				msg.sender.transfer(overpaid);
			}
			uint256 payoutPrice = (currentPrice * 105) / 100;

			Ad[3].owner.transfer(Ad[3].payout);

			Ad[3] = Ad[2];
			Ad[2] = Ad[1];
			Ad[1] = decentralAd({
				owner : msg.sender,
				imageUrl: imageUrl,
				linkUrl: linkUrl,
				title: title,
				payout: payoutPrice,
				canChange : true
			});
            
			currentPrice = (currentPrice * 110) / 100;
			feesCollected = feesCollected + currentPrice - payoutPrice;
            
		} else {
			msg.sender.transfer(msg.value);
		}
	}
    
	function modifyAd(uint id,  string imageUrl, string linkUrl, string title) hasValidId(id) validCharacterLength(imageUrl, linkUrl, title) public{
		require((msg.sender == Ad[id].owner && Ad[id].canChange) || msg.sender == contractOwner);
		Ad[id].title = title;
		Ad[id].imageUrl = imageUrl;
		Ad[id].linkUrl = linkUrl;
	}
    
	modifier onlyOwner {
		require(msg.sender == contractOwner);
		_;
	}
    
	modifier hasValidId(uint id) {
		require(id >= 0 && id <= 3);
		_;
	}
	
	modifier validCharacterLength(string imageUrl, string linkUrl, string title) {
	    require(bytes(imageUrl).length <= 256);
	    require(bytes(linkUrl).length <= 256);
	    require(bytes(title).length <= 140);
	    _;
	}
    
	function disableChangePermissions(uint256 id) onlyOwner hasValidId(id) public {
		Ad[id].canChange = false;	    
	}

	function withdrawFees() onlyOwner public{
		msg.sender.transfer(feesCollected);
		feesCollected = 0;
	}
    
	function changeOwner(address newOwner) onlyOwner public {  
		contractOwner = newOwner;
	}
}