import { FunctionComponent } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

import { IndexLayoutQuery } from "../__generated__/relay/IndexLayoutQuery.graphql";
import Greeting from "../components/Greeting";

export const Query = graphql`
  query IndexLayoutQuery {
    viewer {
      ...Greeting_viewer
    }
  }
`;

const IndexLayout: FunctionComponent = () => {
  const data = useLazyLoadQuery<IndexLayoutQuery>(
    Query,
    {},
    { fetchPolicy: "store-only" }
  );

  return (
    <div className="space-y-8 text-center mt-8">
      <Greeting viewer={data.viewer} />
    </div>
  );
};

export default IndexLayout;
