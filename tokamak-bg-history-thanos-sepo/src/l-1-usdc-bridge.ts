import {
  ERC20DepositInitiated as ERC20DepositInitiatedEvent,
  ERC20WithdrawalFinalized as ERC20WithdrawalFinalizedEvent,
} from "../generated/L1UsdcBridge/L1UsdcBridge"
import {
  ERC20DepositInitiated,
  ERC20WithdrawalFinalized,
} from "../generated/schema"

export function handleERC20DepositInitiated(
  event: ERC20DepositInitiatedEvent,
): void {
  let entity = new ERC20DepositInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.l1Token = event.params.l1Token
  entity.l2Token = event.params.l2Token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20WithdrawalFinalized(
  event: ERC20WithdrawalFinalizedEvent,
): void {
  let entity = new ERC20WithdrawalFinalized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.l1Token = event.params.l1Token
  entity.l2Token = event.params.l2Token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
