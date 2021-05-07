import { Environment, INetwork, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

export default function createEnvironment(
  records?: RecordMap,
  network?: INetwork
) {
  const recordSource = new RecordSource(records);
  const store = new Store(recordSource);

  // We're forcing this here because in production, there is no network!
  return new Environment({ store, network: network!, isServer: !network });
}
