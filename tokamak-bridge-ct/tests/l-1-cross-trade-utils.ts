import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  EditCT,
  L1CancelCT,
  ProvideCT,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/L1CrossTrade/L1CrossTrade"

export function createEditCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _totalAmount: BigInt,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hash: Bytes
): EditCT {
  let editCtEvent = changetype<EditCT>(newMockEvent())

  editCtEvent.parameters = new Array()

  editCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_ctAmount",
      ethereum.Value.fromUnsignedBigInt(_ctAmount)
    )
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  editCtEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return editCtEvent
}

export function createL1CancelCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _totalAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hash: Bytes
): L1CancelCT {
  let l1CancelCtEvent = changetype<L1CancelCT>(newMockEvent())

  l1CancelCtEvent.parameters = new Array()

  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  l1CancelCtEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return l1CancelCtEvent
}

export function createProvideCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _provider: Address,
  _totalAmount: BigInt,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hash: Bytes
): ProvideCT {
  let provideCtEvent = changetype<ProvideCT>(newMockEvent())

  provideCtEvent.parameters = new Array()

  provideCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam("_provider", ethereum.Value.fromAddress(_provider))
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam(
      "_ctAmount",
      ethereum.Value.fromUnsignedBigInt(_ctAmount)
    )
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  provideCtEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return provideCtEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
