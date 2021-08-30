import type { GetStaticProps } from "next";
import type { FunctionComponent } from "react";

import IndexLayout, { Query } from "../layouts/IndexLayout";
import fetchQueryRecords from "../relay/fetchQueryRecords";
import withRelay, { RelayProps } from "../relay/withRelay";

const IndexPage: FunctionComponent = () => {
  // Render the component that includes the Query.
  return <IndexLayout />;
};

export const getStaticProps: GetStaticProps<RelayProps> = async () => {
  // Load the query records for the given query. This function will also
  // serialize the store so we can return it as props.
  const records = await fetchQueryRecords(Query, {});

  // Return the serialized record store, and revalidate the data after an hour.
  return { props: { records }, revalidate: 3600 };
};

export default withRelay(IndexPage);
