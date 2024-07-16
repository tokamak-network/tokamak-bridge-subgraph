import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  EditCT,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/L1CrossTrade/L1CrossTrade"

export function createEditCTEvent(
  _requester: Address,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt
): EditCT {
  let editCtEvent = changetype<EditCT>(newMockEvent())

  editCtEvent.parameters = new Array()

  editCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
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

  return editCtEvent
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
