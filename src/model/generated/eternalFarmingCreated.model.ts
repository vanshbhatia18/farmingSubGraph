import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class EternalFarmingCreated {
    constructor(props?: Partial<EternalFarmingCreated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    rewardToken!: string

    @Column_("text", {nullable: false})
    bonusRewardToken!: string

    @Column_("text", {nullable: false})
    virtualPool!: string

    @Column_("text", {nullable: false})
    pool!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    startTime!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    endTime!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    reward!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bonusReward!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rewardRate!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bonusRewardRate!: bigint

    @Column_("bool", {nullable: true})
    isDetached!: boolean | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    minRangeLength!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenAmountForTier1!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenAmountForTier2!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenAmountForTier3!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tier1Multiplier!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tier2Multiplier!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tier3Multiplier!: bigint

    @Column_("text", {nullable: false})
    multiplierToken!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    minimalAllowedPositionWidth!: bigint
}
