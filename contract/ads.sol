pragma solidity ^0.4.16;
contract Ads { // version 0.09
 
    struct Ad{
        uint id;
      address owner;
      string imageUrl;
      string linkUrl;
      string title;
      uint256 payout;
      bool canChange;
    }
    Ad public firstAd;
    Ad public secondAd;
    Ad public thirdAd;
    
    uint256 public currentPrice = 1000000000000000000;
    uint256 public feesCollected = 0;
    address public contractOwner;
    
    function Ads() public{
      contractOwner = msg.sender;
    }

    function ad(string imageUrl, string linkUrl, string title) payable public{

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
        Ad storage _adContext;
        if(id == 1){
            _adContext = firstAd;
        } else if(id == 2) {
            _adContext = secondAd;
        } else {
            _adContext = thirdAd;
        }
        require((msg.sender == _adContext.owner && _adContext.canChange) || msg.sender == contractOwner);
        //TODO: validate strings
        _adContext.title = title;
        _adContext.imageUrl = imageUrl;
        _adContext.linkUrl = linkUrl;
        
    }
    
    modifier onlyOwner {
        require(msg.sender == contractOwner);
        _;
    }
    
     modifier hasValidId(uint id) {
        require(id >= 1 && id <= 3);
        _;
    }
    
    function disableChangePermissions(uint256 id) onlyOwner hasValidId(id) public {
        Ad storage _adContext;
        if(id == 1){
            _adContext = firstAd;
        } else if(id == 2) {
            _adContext = secondAd;
        } else {
            _adContext = thirdAd;
        }
        _adContext.canChange = false;
    }

    function withdrawFees() onlyOwner public{
        msg.sender.transfer(feesCollected);
        feesCollected = 0;
    }
    
    function changeOwner(address newOwner) onlyOwner public {  
        contractOwner = newOwner;
    }

}