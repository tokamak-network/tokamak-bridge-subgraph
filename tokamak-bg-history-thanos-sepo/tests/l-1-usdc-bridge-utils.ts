import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ERC20DepositInitiated,
  ERC20WithdrawalFinalized
} from "../generated/L1UsdcBridge/L1UsdcBridge"

export function createERC20DepositInitiatedEvent(
  l1Token: Address,
  l2Token: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  extraData: Bytes
): ERC20DepositInitiated {
  let erc20DepositInitiatedEvent = changetype<ERC20DepositInitiated>(
    newMockEvent()
  )

  erc20DepositInitiatedEvent.parameters = new Array()

  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("l1Token", ethereum.Value.fromAddress(l1Token))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("l2Token", ethereum.Value.fromAddress(l2Token))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return erc20DepositInitiatedEvent
}

export function createERC20WithdrawalFinalizedEvent(
  l1Token: Address,
  l2Token: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  extraData: Bytes
): ERC20WithdrawalFinalized {
  let erc20WithdrawalFinalizedEvent = changetype<ERC20WithdrawalFinalized>(
    newMockEvent()
  )

  erc20WithdrawalFinalizedEvent.parameters = new Array()

  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("l1Token", ethereum.Value.fromAddress(l1Token))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("l2Token", ethereum.Value.fromAddress(l2Token))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return erc20WithdrawalFinalizedEvent
}
