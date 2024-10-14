import { RequestCT as RequestCTEvent } from "../generated/L2CrossTrade/L2CrossTrade";
import { RequestCT } from "../generated/schema";

export function handleRequestCT(event: RequestCTEvent): void {
  let entity = new RequestCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._l1token = event.params._l1token;
  entity._l2token = event.params._l2token;
  entity._requester = event.params._requester;
  entity._totalAmount = event.params._totalAmount;
  entity._ctAmount = event.params._ctAmount;
  entity._saleCount = event.params._saleCount;
  entity._l2chainId = event.params._l2chainId;
  entity._hashValue = event.params._hashValue;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
