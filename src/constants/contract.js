const CONTRACT_ADDRESS = "0xab35644A18110937bCd2bB2d7BC5083cf3A174DA"

const CONTRACT_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "Ad",
    outputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "imageUrl",
        type: "string"
      },
      {
        name: "linkUrl",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "payout",
        type: "uint256"
      },
      {
        name: "canChange",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "contractOwner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "topAdCurrentPrice",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "feesCollected",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "id",
        type: "uint256"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "imageUrl",
        type: "string"
      },
      {
        name: "linkUrl",
        type: "string"
      }
    ],
    name: "modifyAd",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "changeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "imageUrl",
        type: "string"
      },
      {
        name: "linkUrl",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      }
    ],
    name: "placeTopAd",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "id",
        type: "uint256"
      }
    ],
    name: "disableChangePermissions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "imageUrl",
        type: "string"
      },
      {
        name: "linkUrl",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      }
    ],
    name: "placeAd",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
]

const RINKEBY_ENDPOINT = 'https://rinkeby.infura.io'
const RINKEBY_API_KEY = 'PctD67gJ9wNf9YzyDYHi'

export { CONTRACT_ADDRESS, CONTRACT_ABI, RINKEBY_ENDPOINT, RINKEBY_API_KEY }
