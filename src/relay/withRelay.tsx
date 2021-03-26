import { NextPage } from "next";
import { FunctionComponent } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import createRelayEnvironment from "./createRelayEnvironment";

export interface RelayProps {
  records: RecordMap;
}

const withRelay = (ComposedComponent: NextPage) => {
  const WithRelay: FunctionComponent<RelayProps> = ({ records }) => {
    const environment = createRelayEnvironment(records);

    return (
      <RelayEnvironmentProvider environment={environment}>
        <ComposedComponent />
      </RelayEnvironmentProvider>
    );
  };

  return WithRelay;
};

export default withRelay;
