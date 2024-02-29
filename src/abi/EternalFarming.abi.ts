export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_deployer"
            },
            {
                "type": "address",
                "name": "_nonfungiblePositionManager"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EternalFarmingCreated",
        "inputs": [
            {
                "type": "address",
                "name": "rewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "bonusRewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "pool",
                "indexed": true
            },
            {
                "type": "address",
                "name": "virtualPool",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "startTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "endTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "reward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "bonusReward",
                "indexed": false
            },
            {
                "type": "tuple",
                "name": "tiers",
                "indexed": false,
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier1"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier2"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier3"
                    },
                    {
                        "type": "uint32",
                        "name": "tier1Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier2Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier3Multiplier"
                    }
                ]
            },
            {
                "type": "address",
                "name": "multiplierToken",
                "indexed": false
            },
            {
                "type": "uint24",
                "name": "minimalAllowedPositionWidth",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FarmEnded",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "incentiveId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "rewardAddress",
                "indexed": true
            },
            {
                "type": "address",
                "name": "bonusRewardToken",
                "indexed": false
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "reward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "bonusReward",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FarmEntered",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "incentiveId",
                "indexed": true
            },
            {
                "type": "uint128",
                "name": "liquidity",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokensLocked",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FarmingCenter",
        "inputs": [
            {
                "type": "address",
                "name": "farmingCenter",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IncentiveAttached",
        "inputs": [
            {
                "type": "address",
                "name": "rewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "bonusRewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "pool",
                "indexed": true
            },
            {
                "type": "address",
                "name": "virtualPool",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "startTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "endTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IncentiveDetached",
        "inputs": [
            {
                "type": "address",
                "name": "rewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "bonusRewardToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "pool",
                "indexed": true
            },
            {
                "type": "address",
                "name": "virtualPool",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "startTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "endTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IncentiveMaker",
        "inputs": [
            {
                "type": "address",
                "name": "incentiveMaker",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "reward",
                "indexed": false
            },
            {
                "type": "address",
                "name": "rewardAddress",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardsAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "rewardAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "bonusRewardAmount",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "incentiveId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardsCollected",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "incentiveId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "bonusRewardAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardsRatesChanged",
        "inputs": [
            {
                "type": "uint128",
                "name": "rewardRate",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "bonusRewardRate",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "incentiveId",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "addRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "rewardAmount"
            },
            {
                "type": "uint256",
                "name": "bonusRewardAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "attachIncentive",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "rewardToken"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amountRequested"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            }
        ]
    },
    {
        "type": "function",
        "name": "claimRewardFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "rewardToken"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amountRequested"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            }
        ]
    },
    {
        "type": "function",
        "name": "collectRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            },
            {
                "type": "uint256",
                "name": "bonusReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "createEternalFarming",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "uint256",
                        "name": "reward"
                    },
                    {
                        "type": "uint256",
                        "name": "bonusReward"
                    },
                    {
                        "type": "uint128",
                        "name": "rewardRate"
                    },
                    {
                        "type": "uint128",
                        "name": "bonusRewardRate"
                    },
                    {
                        "type": "uint24",
                        "name": "minimalPositionWidth"
                    },
                    {
                        "type": "address",
                        "name": "multiplierToken"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "tiers",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier1"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier2"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier3"
                    },
                    {
                        "type": "uint32",
                        "name": "tier1Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier2Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier3Multiplier"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "virtualPool"
            }
        ]
    },
    {
        "type": "function",
        "name": "deployer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "detachIncentive",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "enterFarming",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "tokensLocked"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "exitFarming",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "farmingCenter",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "farms",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "liquidity"
            },
            {
                "type": "int24",
                "name": "tickLower"
            },
            {
                "type": "int24",
                "name": "tickUpper"
            },
            {
                "type": "uint256",
                "name": "innerRewardGrowth0"
            },
            {
                "type": "uint256",
                "name": "innerRewardGrowth1"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            },
            {
                "type": "uint256",
                "name": "bonusReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "incentives",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "totalReward"
            },
            {
                "type": "uint256",
                "name": "bonusReward"
            },
            {
                "type": "address",
                "name": "virtualPoolAddress"
            },
            {
                "type": "uint24",
                "name": "minimalPositionWidth"
            },
            {
                "type": "uint224",
                "name": "totalLiquidity"
            },
            {
                "type": "address",
                "name": "multiplierToken"
            },
            {
                "type": "tuple",
                "name": "tiers",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier1"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier2"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenAmountForTier3"
                    },
                    {
                        "type": "uint32",
                        "name": "tier1Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier2Multiplier"
                    },
                    {
                        "type": "uint32",
                        "name": "tier3Multiplier"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "nonfungiblePositionManager",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "rewards",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setFarmingCenterAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_farmingCenter"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setIncentiveMaker",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_incentiveMaker"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRates",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "key",
                "components": [
                    {
                        "type": "address",
                        "name": "rewardToken"
                    },
                    {
                        "type": "address",
                        "name": "bonusRewardToken"
                    },
                    {
                        "type": "address",
                        "name": "pool"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "rewardRate"
            },
            {
                "type": "uint128",
                "name": "bonusRewardRate"
            }
        ],
        "outputs": []
    }
]
