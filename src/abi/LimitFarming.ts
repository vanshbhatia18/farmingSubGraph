import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LimitFarming.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FarmEnded: new LogEvent<([tokenId: bigint, incentiveId: string, rewardAddress: string, bonusRewardToken: string, owner: string, reward: bigint, bonusReward: bigint] & {tokenId: bigint, incentiveId: string, rewardAddress: string, bonusRewardToken: string, owner: string, reward: bigint, bonusReward: bigint})>(
        abi, '0x7f2557bb15dcf63e3d029ef1dcb4333563fcd78edf263b8fe42ed3adb925ff84'
    ),
    FarmEntered: new LogEvent<([tokenId: bigint, incentiveId: string, liquidity: bigint, tokensLocked: bigint] & {tokenId: bigint, incentiveId: string, liquidity: bigint, tokensLocked: bigint})>(
        abi, '0x4a9757f8f71efdde4b041ff384e461c5707a95d74463b60892bd1f7b9c34a289'
    ),
    FarmingCenter: new LogEvent<([farmingCenter: string] & {farmingCenter: string})>(
        abi, '0x29f9e1ebeee07596f3165f3e42cb9d4d8d22b0481e968d6c74be3dd037c15d9b'
    ),
    IncentiveAttached: new LogEvent<([rewardToken: string, bonusRewardToken: string, pool: string, virtualPool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, virtualPool: string, startTime: bigint, endTime: bigint})>(
        abi, '0x6d3b554600fa5af9295315554801e6206cbdb85866f653f9488e5875c06a6b64'
    ),
    IncentiveDetached: new LogEvent<([rewardToken: string, bonusRewardToken: string, pool: string, virtualPool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, virtualPool: string, startTime: bigint, endTime: bigint})>(
        abi, '0x0ab9cc241fe819ccf1100504defd5fe1366c71aba48092174547ccd7191f3d06'
    ),
    IncentiveMaker: new LogEvent<([incentiveMaker: string] & {incentiveMaker: string})>(
        abi, '0x7aa996b8cecffbf29f5d2a3564db96e010e2dcae822601312970ae9690ec1c52'
    ),
    LimitFarmingCreated: new LogEvent<([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint, reward: bigint, bonusReward: bigint, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number}), multiplierToken: string, minimalAllowedPositionWidth: number, enterStartTime: number] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint, reward: bigint, bonusReward: bigint, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number}), multiplierToken: string, minimalAllowedPositionWidth: number, enterStartTime: number})>(
        abi, '0x6517093e0e3ead0ace5e67709afeb423b13b98872efec187ed6162cb2b5e488a'
    ),
    RewardAmountsDecreased: new LogEvent<([reward: bigint, bonusReward: bigint, incentiveId: string] & {reward: bigint, bonusReward: bigint, incentiveId: string})>(
        abi, '0x808ecc37f6d601dde1e43c133bee66af0ff9409b53aca0eb0d4f6c65fb8956e8'
    ),
    RewardClaimed: new LogEvent<([to: string, reward: bigint, rewardAddress: string, owner: string] & {to: string, reward: bigint, rewardAddress: string, owner: string})>(
        abi, '0xe6ac6a784fb43c9f6329d2f5c82f88a26a93bad4281f7780725af5f071f0aafa'
    ),
    RewardsAdded: new LogEvent<([rewardAmount: bigint, bonusRewardAmount: bigint, incentiveId: string] & {rewardAmount: bigint, bonusRewardAmount: bigint, incentiveId: string})>(
        abi, '0x8b0312d8047895ce795779b66b705ccd39b1ece7c162f642c72d76a785d1b68a'
    ),
}

export const functions = {
    addRewards: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), reward: bigint, bonusReward: bigint], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), reward: bigint, bonusReward: bigint}, []>(
        abi, '0x826cc0a1'
    ),
    attachIncentive: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint})], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint})}, []>(
        abi, '0x6394adbb'
    ),
    claimReward: new Func<[rewardToken: string, to: string, amountRequested: bigint], {rewardToken: string, to: string, amountRequested: bigint}, bigint>(
        abi, '0x2f2d783d'
    ),
    claimRewardFrom: new Func<[rewardToken: string, from: string, to: string, amountRequested: bigint], {rewardToken: string, from: string, to: string, amountRequested: bigint}, bigint>(
        abi, '0x0a530754'
    ),
    createLimitFarming: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number}), params: ([reward: bigint, bonusReward: bigint, minimalPositionWidth: number, multiplierToken: string, enterStartTime: number] & {reward: bigint, bonusReward: bigint, minimalPositionWidth: number, multiplierToken: string, enterStartTime: number})], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number}), params: ([reward: bigint, bonusReward: bigint, minimalPositionWidth: number, multiplierToken: string, enterStartTime: number] & {reward: bigint, bonusReward: bigint, minimalPositionWidth: number, multiplierToken: string, enterStartTime: number})}, string>(
        abi, '0x91045831'
    ),
    decreaseRewardsAmount: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), rewardAmount: bigint, bonusRewardAmount: bigint], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), rewardAmount: bigint, bonusRewardAmount: bigint}, []>(
        abi, '0xbf26a1d1'
    ),
    deployer: new Func<[], {}, string>(
        abi, '0xd5f39488'
    ),
    detachIncentive: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint})], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint})}, []>(
        abi, '0x3ee0dd02'
    ),
    enterFarming: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, tokensLocked: bigint], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, tokensLocked: bigint}, []>(
        abi, '0xf43930a3'
    ),
    exitFarming: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, _owner: string], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, _owner: string}, []>(
        abi, '0x0705506b'
    ),
    farmingCenter: new Func<[], {}, string>(
        abi, '0xdd56e5d8'
    ),
    farms: new Func<[_: bigint, _: string], {}, ([liquidity: bigint, tickLower: number, tickUpper: number] & {liquidity: bigint, tickLower: number, tickUpper: number})>(
        abi, '0x27e6a99a'
    ),
    getRewardInfo: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint}, ([reward: bigint, bonusReward: bigint] & {reward: bigint, bonusReward: bigint})>(
        abi, '0x704972f4'
    ),
    incentives: new Func<[_: string], {}, ([totalReward: bigint, bonusReward: bigint, virtualPoolAddress: string, minimalPositionWidth: number, totalLiquidity: bigint, multiplierToken: string, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number})] & {totalReward: bigint, bonusReward: bigint, virtualPoolAddress: string, minimalPositionWidth: number, totalLiquidity: bigint, multiplierToken: string, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number})})>(
        abi, '0x60777795'
    ),
    maxIncentiveDuration: new Func<[], {}, bigint>(
        abi, '0x3dc0714b'
    ),
    maxIncentiveStartLeadTime: new Func<[], {}, bigint>(
        abi, '0x01b75440'
    ),
    nonfungiblePositionManager: new Func<[], {}, string>(
        abi, '0xb44a2722'
    ),
    rewards: new Func<[_: string, _: string], {}, bigint>(
        abi, '0xe70b9e27'
    ),
    setFarmingCenterAddress: new Func<[_farmingCenter: string], {_farmingCenter: string}, []>(
        abi, '0xdf42efda'
    ),
    setIncentiveMaker: new Func<[_incentiveMaker: string], {_incentiveMaker: string}, []>(
        abi, '0x779fa0c4'
    ),
}

export class Contract extends ContractBase {

    deployer(): Promise<string> {
        return this.eth_call(functions.deployer, [])
    }

    farmingCenter(): Promise<string> {
        return this.eth_call(functions.farmingCenter, [])
    }

    farms(arg0: bigint, arg1: string): Promise<([liquidity: bigint, tickLower: number, tickUpper: number] & {liquidity: bigint, tickLower: number, tickUpper: number})> {
        return this.eth_call(functions.farms, [arg0, arg1])
    }

    getRewardInfo(key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint): Promise<([reward: bigint, bonusReward: bigint] & {reward: bigint, bonusReward: bigint})> {
        return this.eth_call(functions.getRewardInfo, [key, tokenId])
    }

    incentives(arg0: string): Promise<([totalReward: bigint, bonusReward: bigint, virtualPoolAddress: string, minimalPositionWidth: number, totalLiquidity: bigint, multiplierToken: string, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number})] & {totalReward: bigint, bonusReward: bigint, virtualPoolAddress: string, minimalPositionWidth: number, totalLiquidity: bigint, multiplierToken: string, tiers: ([tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number] & {tokenAmountForTier1: bigint, tokenAmountForTier2: bigint, tokenAmountForTier3: bigint, tier1Multiplier: number, tier2Multiplier: number, tier3Multiplier: number})})> {
        return this.eth_call(functions.incentives, [arg0])
    }

    maxIncentiveDuration(): Promise<bigint> {
        return this.eth_call(functions.maxIncentiveDuration, [])
    }

    maxIncentiveStartLeadTime(): Promise<bigint> {
        return this.eth_call(functions.maxIncentiveStartLeadTime, [])
    }

    nonfungiblePositionManager(): Promise<string> {
        return this.eth_call(functions.nonfungiblePositionManager, [])
    }

    rewards(arg0: string, arg1: string): Promise<bigint> {
        return this.eth_call(functions.rewards, [arg0, arg1])
    }
}
