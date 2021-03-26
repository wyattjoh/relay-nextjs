import { FunctionComponent } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import { Greeting_user$key } from "../__generated__/relay/Greeting_user.graphql";

const fragment = graphql`
  fragment Greeting_user on User {
    login
  }
`;

interface Props {
  user: Greeting_user$key;
}

const Greeting: FunctionComponent<Props> = (props) => {
  const user = useFragment(fragment, props.user);

  return (
    <div className="text-3xl">
      Hi <span className="text-blue-500">{user.login}</span>!
    </div>
  );
};

export default Greeting;
