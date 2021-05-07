import { GetServerSideProps } from "next";
import { FunctionComponent } from "react";

import IndexLayout, { Query } from "../layouts/IndexLayout";
import fetchQueryRecords from "../relay/fetchQueryRecords";
import withRelay, { RelayProps } from "../relay/withRelay";

const IndexPage: FunctionComponent = () => {
  return <IndexLayout />;
};

export const getServerSideProps: GetServerSideProps<RelayProps> = async () => {
  const records = await fetchQueryRecords(Query, {});

  return { props: { records } };
};

export default withRelay(IndexPage);
