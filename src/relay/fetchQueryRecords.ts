import { fetchQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType, Variables } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createServerRelayEnvironment from "./createServerRelayEnvironment";

async function fetchQueryRecords<T extends OperationType>(
  query: GraphQLTaggedNode,
  variables: T["variables"]
): Promise<RecordMap> {
  const environment = createServerRelayEnvironment();

  await fetchQuery(environment, query, variables, {
    fetchPolicy: "network-only",
  }).toPromise();

  return environment.getStore().getSource().toJSON();
}

export default fetchQueryRecords;
