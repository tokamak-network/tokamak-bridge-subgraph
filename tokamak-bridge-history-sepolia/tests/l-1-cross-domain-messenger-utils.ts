import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  FailedRelayedFastMessage,
  FailedRelayedMessage,
  Initialized,
  MessageAllowed,
  MessageBlocked,
  OwnershipTransferred,
  Paused,
  RelayedFastMessage,
  RelayedMessage,
  SentMessage,
  Unpaused
} from "../generated/L1CrossDomainMessenger/L1CrossDomainMessenger"

export function createFailedRelayedFastMessageEvent(
  target: Address,
  sender: Address,
  message: Bytes,
  messageNonce: BigInt
): FailedRelayedFastMessage {
  let failedRelayedFastMessageEvent = changetype<FailedRelayedFastMessage>(
    newMockEvent()
  )

  failedRelayedFastMessageEvent.parameters = new Array()

  failedRelayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  failedRelayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  failedRelayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )
  failedRelayedFastMessageEvent.parameters.push(
    new ethereum.EventParam(
      "messageNonce",
      ethereum.Value.fromUnsignedBigInt(messageNonce)
    )
  )

  return failedRelayedFastMessageEvent
}

export function createFailedRelayedMessageEvent(
  msgHash: Bytes
): FailedRelayedMessage {
  let failedRelayedMessageEvent = changetype<FailedRelayedMessage>(
    newMockEvent()
  )

  failedRelayedMessageEvent.parameters = new Array()

  failedRelayedMessageEvent.parameters.push(
    new ethereum.EventParam("msgHash", ethereum.Value.fromFixedBytes(msgHash))
  )

  return failedRelayedMessageEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMessageAllowedEvent(
  _xDomainCalldataHash: Bytes
): MessageAllowed {
  let messageAllowedEvent = changetype<MessageAllowed>(newMockEvent())

  messageAllowedEvent.parameters = new Array()

  messageAllowedEvent.parameters.push(
    new ethereum.EventParam(
      "_xDomainCalldataHash",
      ethereum.Value.fromFixedBytes(_xDomainCalldataHash)
    )
  )

  return messageAllowedEvent
}

export function createMessageBlockedEvent(
  _xDomainCalldataHash: Bytes
): MessageBlocked {
  let messageBlockedEvent = changetype<MessageBlocked>(newMockEvent())

  messageBlockedEvent.parameters = new Array()

  messageBlockedEvent.parameters.push(
    new ethereum.EventParam(
      "_xDomainCalldataHash",
      ethereum.Value.fromFixedBytes(_xDomainCalldataHash)
    )
  )

  return messageBlockedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRelayedFastMessageEvent(
  target: Address,
  sender: Address,
  message: Bytes,
  messageNonce: BigInt
): RelayedFastMessage {
  let relayedFastMessageEvent = changetype<RelayedFastMessage>(newMockEvent())

  relayedFastMessageEvent.parameters = new Array()

  relayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  relayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  relayedFastMessageEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )
  relayedFastMessageEvent.parameters.push(
    new ethereum.EventParam(
      "messageNonce",
      ethereum.Value.fromUnsignedBigInt(messageNonce)
    )
  )

  return relayedFastMessageEvent
}

export function createRelayedMessageEvent(msgHash: Bytes): RelayedMessage {
  let relayedMessageEvent = changetype<RelayedMessage>(newMockEvent())

  relayedMessageEvent.parameters = new Array()

  relayedMessageEvent.parameters.push(
    new ethereum.EventParam("msgHash", ethereum.Value.fromFixedBytes(msgHash))
  )

  return relayedMessageEvent
}

export function createSentMessageEvent(
  target: Address,
  sender: Address,
  message: Bytes,
  messageNonce: BigInt,
  gasLimit: BigInt
): SentMessage {
  let sentMessageEvent = changetype<SentMessage>(newMockEvent())

  sentMessageEvent.parameters = new Array()

  sentMessageEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  sentMessageEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sentMessageEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )
  sentMessageEvent.parameters.push(
    new ethereum.EventParam(
      "messageNonce",
      ethereum.Value.fromUnsignedBigInt(messageNonce)
    )
  )
  sentMessageEvent.parameters.push(
    new ethereum.EventParam(
      "gasLimit",
      ethereum.Value.fromUnsignedBigInt(gasLimit)
    )
  )

  return sentMessageEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
