import { FunctionComponent } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import { Greeting_viewer$key } from "../__generated__/relay/Greeting_viewer.graphql";

const fragment = graphql`
  fragment Greeting_viewer on User {
    login
  }
`;

interface Props {
  viewer: Greeting_viewer$key;
}

const Greeting: FunctionComponent<Props> = (props) => {
  const user = useFragment(fragment, props.viewer);

  return (
    <div className="text-3xl">
      Hi <span className="text-blue-500">{user.login}</span>!
    </div>
  );
};

export default Greeting;
