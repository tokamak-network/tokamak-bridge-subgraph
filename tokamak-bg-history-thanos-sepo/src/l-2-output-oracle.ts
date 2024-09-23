import {
  Initialized as InitializedEvent,
  OutputProposed as OutputProposedEvent,
  OutputsDeleted as OutputsDeletedEvent,
} from "../generated/L2OutputOracle/L2OutputOracle";
import { OutputProposed, OutputsDeleted } from "../generated/schema";

export function handleOutputProposed(event: OutputProposedEvent): void {
  let entity = new OutputProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.outputRoot = event.params.outputRoot;
  entity.l2OutputIndex = event.params.l2OutputIndex;
  entity.l2BlockNumber = event.params.l2BlockNumber;
  entity.l1Timestamp = event.params.l1Timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOutputsDeleted(event: OutputsDeletedEvent): void {
  let entity = new OutputsDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.prevNextOutputIndex = event.params.prevNextOutputIndex;
  entity.newNextOutputIndex = event.params.newNextOutputIndex;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
