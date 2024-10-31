import {
  FailedRelayedMessage as FailedRelayedMessageEvent,
  RelayedMessage as RelayedMessageEvent,
  SentMessage as SentMessageEvent,
} from "../generated/L2CrossDomainMessenger/L2CrossDomainMessenger";
import {
  FailedRelayedMessage,
  RelayedMessage,
  SentMessage,
} from "../generated/schema";

export function handleFailedRelayedMessage(
  event: FailedRelayedMessageEvent
): void {
  let entity = new FailedRelayedMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.msgHash = event.params.msgHash;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRelayedMessage(event: RelayedMessageEvent): void {
  let entity = new RelayedMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.msgHash = event.params.msgHash;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSentMessage(event: SentMessageEvent): void {
  let entity = new SentMessage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.target = event.params.target;
  entity.sender = event.params.sender;
  entity.message = event.params.message;
  entity.messageNonce = event.params.messageNonce;
  entity.gasLimit = event.params.gasLimit;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
