import {TypeormDatabase} from '@subsquid/typeorm-store'
import {EternalFarmingCreated} from './model'
import {processor} from './processor'
import * as EternalFarmingABI from './abi/EternalFarming' 

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
// const eternalFarming: Map<string ,EternalFarmingCreated> = new Map()
   const eternalFarming: EternalFarmingCreated[]=[]
    for (let c of ctx.blocks) {
        for (let log of c.logs) {

        if(log.topics[0] === EternalFarmingABI.events.EternalFarmingCreated.topic) {
           // const tiers = [tokenAmountForTier1 ,tokenAmountForTier2,tokenAmountForTier3,tier1Multiplier,tier2Multiplier,tier3Multiplier]
          //  const tierMapping = tiers.map(array => array)
       /*
          let {rewardToken,bonusRewardToken,pool,virtualPool,startTime,endTime,reward,bonusReward,tokenAmountForTier1 ,tokenAmountForTier2,tokenAmountForTier3,tier1Multiplier,tier2Multiplier,tier3Multiplier,multiplierToken,minimalAllowedPositionWidth} = extractData(log)
         let farmingEternal = new EternalFarmingCreated({
             rewardToken: rewardToken.toString(),
            bonusRewardToken : bonusRewardToken.toString(),
            pool: pool.toString() ,
            virtualPool: virtualPool.toString(),
            startTime: startTime, // Convert to string
            endTime: endTime, // Convert to string
            reward: reward,
            bonusReward: bonusReward,
            tokenAmountForTier1: tokenAmountForTier1,
            tokenAmountForTier2: tokenAmountForTier2 ,
            tokenAmountForTier3: tokenAmountForTier3 ,
            tier1Multiplier : BigInt(tier1Multiplier),
            tier2Multiplier: BigInt(tier2Multiplier),
            tier3Multiplier: BigInt(tier3Multiplier),
            multiplierToken: multiplierToken.toString(),
            minimalAllowedPositionWidth: BigInt(minimalAllowedPositionWidth)
 });
         eternalFarming.push(farmingEternal)
*/        }    
          
        }
    }
    
   

    // upsert batches of entities with batch-optimized ctx.store.save
    await ctx.store.upsert(eternalFarming)  



})

 function extractData(log: any) : {
    rewardToken: String ;
    bonusRewardToken : String ;
    pool: String ;
    virtualPool: String
    startTime: bigint; // Convert to string
    endTime: bigint; // Convert to string
    reward: bigint ;
    bonusReward: bigint;
    tokenAmountForTier1: bigint;
    tokenAmountForTier2: bigint;
    tokenAmountForTier3: bigint;
    tier1Multiplier : number;
    tier2Multiplier: number;
    tier3Multiplier: number;
    multiplierToken: String;
    minimalAllowedPositionWidth: number;
 }
   {
    if(log.topics[0] === EternalFarmingABI.events.EternalFarmingCreated.topic) {
        // const tiers = [tokenAmountForTier1 ,tokenAmountForTier2,tokenAmountForTier3,tier1Multiplier,tier2Multiplier,tier3Multiplier]
       //  const tierMapping = tiers.map(array => array)
      let {rewardToken,bonusRewardToken,pool,virtualPool,startTime,endTime,reward,bonusReward,tiers:{tokenAmountForTier1 ,tokenAmountForTier2,tokenAmountForTier3,tier1Multiplier,tier2Multiplier,tier3Multiplier} ,multiplierToken,minimalAllowedPositionWidth} = EternalFarmingABI.events.EternalFarmingCreated.decode(log);
      return {rewardToken,bonusRewardToken,pool,virtualPool,startTime,endTime,reward,bonusReward ,tokenAmountForTier1 ,tokenAmountForTier2,tokenAmountForTier3,tier1Multiplier,tier2Multiplier,tier3Multiplier, multiplierToken,minimalAllowedPositionWidth }
   }    
    throw new Error("unsupportedTopic")
}