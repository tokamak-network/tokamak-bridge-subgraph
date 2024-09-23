import { MessagePassed as MessagePassedEvent } from "../generated/L2ToL1MessagePasser/L2ToL1MessagePasser";
import { MessagePassed } from "../generated/schema";

export function handleMessagePassed(event: MessagePassedEvent): void {
  let entity = new MessagePassed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.target = event.params.target;
  entity.value = event.params.value;
  entity.data = event.params.data;
  entity.gasLimit = event.params.gasLimit;
  entity.nonce = event.params.nonce;
  entity.withdrawalHash = event.params.withdrawalHash;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
