import { FunctionComponent } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";

import { IndexLayoutQuery } from "../__generated__/relay/IndexLayoutQuery.graphql";
import Greeting from "../components/Greeting";

export const Query = graphql`
  query IndexLayoutQuery {
    viewer {
      ...Greeting_user
    }
  }
`;

const IndexLayout: FunctionComponent = () => {
  const data = useLazyLoadQuery<IndexLayoutQuery>(Query, {});

  return (
    <div className="h-screen flex justify-center items-center">
      <Greeting user={data.viewer} />
    </div>
  );
};

export default IndexLayout;
