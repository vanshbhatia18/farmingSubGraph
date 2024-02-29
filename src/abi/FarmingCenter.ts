import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FarmingCenter.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    DepositTransferred: new LogEvent<([tokenId: bigint, oldOwner: string, newOwner: string] & {tokenId: bigint, oldOwner: string, newOwner: string})>(
        abi, '0xcdfc765b85e1048bee3c6a0f9d1c91fc7c4631f5fe5745a55fc6843db5c3260f'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    PERMIT_TYPEHASH: new Func<[], {}, string>(
        abi, '0x30adf81f'
    ),
    WNativeToken: new Func<[], {}, string>(
        abi, '0x8af3ac85'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    baseURI: new Func<[], {}, string>(
        abi, '0x6c0360eb'
    ),
    claimReward: new Func<[rewardToken: string, to: string, amountRequestedIncentive: bigint, amountRequestedEternal: bigint], {rewardToken: string, to: string, amountRequestedIncentive: bigint, amountRequestedEternal: bigint}, bigint>(
        abi, '0xfd188ca4'
    ),
    collect: new Func<[params: ([tokenId: bigint, recipient: string, amount0Max: bigint, amount1Max: bigint] & {tokenId: bigint, recipient: string, amount0Max: bigint, amount1Max: bigint})], {params: ([tokenId: bigint, recipient: string, amount0Max: bigint, amount1Max: bigint] & {tokenId: bigint, recipient: string, amount0Max: bigint, amount1Max: bigint})}, ([amount0: bigint, amount1: bigint] & {amount0: bigint, amount1: bigint})>(
        abi, '0xfc6f7865'
    ),
    collectRewards: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint}, ([reward: bigint, bonusReward: bigint] & {reward: bigint, bonusReward: bigint})>(
        abi, '0x3e785878'
    ),
    connectVirtualPool: new Func<[pool: string, newVirtualPool: string], {pool: string, newVirtualPool: string}, []>(
        abi, '0xd8a900b1'
    ),
    cross: new Func<[nextTick: number, zeroToOne: boolean], {nextTick: number, zeroToOne: boolean}, []>(
        abi, '0x01342b19'
    ),
    deposits: new Func<[_: bigint], {}, ([L2TokenId: bigint, numberOfFarms: number, inLimitFarming: boolean, owner: string] & {L2TokenId: bigint, numberOfFarms: number, inLimitFarming: boolean, owner: string})>(
        abi, '0xb02c43d0'
    ),
    enterFarming: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, tokensLocked: bigint, isLimit: boolean], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, tokensLocked: bigint, isLimit: boolean}, []>(
        abi, '0x22872ce2'
    ),
    eternalFarming: new Func<[], {}, string>(
        abi, '0xde2356d1'
    ),
    exitFarming: new Func<[key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, isLimit: boolean], {key: ([rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint] & {rewardToken: string, bonusRewardToken: string, pool: string, startTime: bigint, endTime: bigint}), tokenId: bigint, isLimit: boolean}, []>(
        abi, '0x34267cbc'
    ),
    farmingCenterVault: new Func<[], {}, string>(
        abi, '0x9205ac2e'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    increaseCumulative: new Func<[blockTimestamp: number], {blockTimestamp: number}, number>(
        abi, '0x7f376059'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    l2Nfts: new Func<[_: bigint], {}, ([nonce: bigint, operator: string, tokenId: bigint] & {nonce: bigint, operator: string, tokenId: bigint})>(
        abi, '0x03a05df9'
    ),
    limitFarming: new Func<[], {}, string>(
        abi, '0xa5f6072f'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonfungiblePositionManager: new Func<[], {}, string>(
        abi, '0xb44a2722'
    ),
    onERC721Received: new Func<[_: string, from: string, tokenId: bigint, _: string], {from: string, tokenId: bigint}, string>(
        abi, '0x150b7a02'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    permit: new Func<[spender: string, tokenId: bigint, deadline: bigint, v: number, r: string, s: string], {spender: string, tokenId: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0x7ac2ff7b'
    ),
    refundNativeToken: new Func<[], {}, []>(
        abi, '0x41865270'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, _data: string], {from: string, to: string, tokenId: bigint, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    sweepToken: new Func<[token: string, amountMinimum: bigint, recipient: string], {token: string, amountMinimum: bigint, recipient: string}, []>(
        abi, '0xdf2ab5bb'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: bigint], {index: bigint}, bigint>(
        abi, '0x4f6ccce7'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: bigint], {owner: string, index: bigint}, bigint>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    unwrapWNativeToken: new Func<[amountMinimum: bigint, recipient: string], {amountMinimum: bigint, recipient: string}, []>(
        abi, '0x69bc35b2'
    ),
    virtualPoolAddresses: new Func<[pool: string], {pool: string}, ([limitVP: string, eternalVP: string] & {limitVP: string, eternalVP: string})>(
        abi, '0x32dc5a25'
    ),
    withdrawToken: new Func<[tokenId: bigint, to: string, data: string], {tokenId: bigint, to: string, data: string}, []>(
        abi, '0x3c423f0b'
    ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    PERMIT_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.PERMIT_TYPEHASH, [])
    }

    WNativeToken(): Promise<string> {
        return this.eth_call(functions.WNativeToken, [])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    baseURI(): Promise<string> {
        return this.eth_call(functions.baseURI, [])
    }

    deposits(arg0: bigint): Promise<([L2TokenId: bigint, numberOfFarms: number, inLimitFarming: boolean, owner: string] & {L2TokenId: bigint, numberOfFarms: number, inLimitFarming: boolean, owner: string})> {
        return this.eth_call(functions.deposits, [arg0])
    }

    eternalFarming(): Promise<string> {
        return this.eth_call(functions.eternalFarming, [])
    }

    farmingCenterVault(): Promise<string> {
        return this.eth_call(functions.farmingCenterVault, [])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    l2Nfts(arg0: bigint): Promise<([nonce: bigint, operator: string, tokenId: bigint] & {nonce: bigint, operator: string, tokenId: bigint})> {
        return this.eth_call(functions.l2Nfts, [arg0])
    }

    limitFarming(): Promise<string> {
        return this.eth_call(functions.limitFarming, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonfungiblePositionManager(): Promise<string> {
        return this.eth_call(functions.nonfungiblePositionManager, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: bigint): Promise<bigint> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenOfOwnerByIndex(owner: string, index: bigint): Promise<bigint> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }

    virtualPoolAddresses(pool: string): Promise<([limitVP: string, eternalVP: string] & {limitVP: string, eternalVP: string})> {
        return this.eth_call(functions.virtualPoolAddresses, [pool])
    }
}
