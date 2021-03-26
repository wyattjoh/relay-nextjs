import { Network } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createEnvironment from "./createEnvironment";
import fetchQuery from "./fetchQuery";

const network = Network.create(fetchQuery);

export default function createServerRelayEnvironment(records?: RecordMap) {
  return createEnvironment(records, network);
}
