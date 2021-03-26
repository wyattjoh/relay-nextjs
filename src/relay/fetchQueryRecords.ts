import { fetchQuery } from "react-relay";
import { GraphQLTaggedNode, Variables } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import createServerRelayEnvironment from "./createServerRelayEnvironment";

async function fetchQueryRecords(
  query: GraphQLTaggedNode,
  variables: Variables = {}
): Promise<RecordMap> {
  const environment = createServerRelayEnvironment();

  await fetchQuery(environment, query, variables, {
    fetchPolicy: "network-only",
  }).toPromise();

  return environment.getStore().getSource().toJSON();
}

export default fetchQueryRecords;
