import {
  StateBatchAppended as StateBatchAppendedEvent,
  StateBatchDeleted as StateBatchDeletedEvent,
} from "../generated/StateCommitmentChain/StateCommitmentChain";
import { StateBatchAppended, StateBatchDeleted } from "../generated/schema";

export function handleStateBatchAppended(event: StateBatchAppendedEvent): void {
  let entity = new StateBatchAppended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._batchIndex = event.params._batchIndex;
  entity._batchRoot = event.params._batchRoot;
  entity._batchSize = event.params._batchSize;
  entity._prevTotalElements = event.params._prevTotalElements;
  entity._extraData = event.params._extraData;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.rollUpBatch = entity._batchSize.plus(entity._prevTotalElements);

  entity.save();
}

export function handleStateBatchDeleted(event: StateBatchDeletedEvent): void {
  let entity = new StateBatchDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._batchIndex = event.params._batchIndex;
  entity._batchRoot = event.params._batchRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
