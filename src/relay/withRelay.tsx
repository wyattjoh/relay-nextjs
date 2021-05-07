import { NextPage } from "next";
import { FunctionComponent, useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import createRelayEnvironment from "./createRelayEnvironment";

export interface RelayProps {
  records: RecordMap;
}

const withRelay = (ComposedComponent: NextPage) => {
  const WithRelay: FunctionComponent<RelayProps> = (props) => {
    const environment = useMemo(() => createRelayEnvironment(props.records), [
      props.records,
    ]);

    return (
      <RelayEnvironmentProvider environment={environment}>
        <ComposedComponent {...props} />
      </RelayEnvironmentProvider>
    );
  };

  return WithRelay;
};

export default withRelay;
