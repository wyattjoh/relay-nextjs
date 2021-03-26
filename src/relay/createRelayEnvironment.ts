import { Environment } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createEnvironment from "./createEnvironment";

let environment: Environment;

export default function createRelayEnvironment(records?: RecordMap) {
  if (!environment) {
    environment = createEnvironment(records);
  }

  return environment;
}
