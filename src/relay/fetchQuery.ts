import { RequestParameters, Variables } from "relay-runtime";

export default async function fetchQuery(
  { text: query }: RequestParameters,
  variables: Variables
) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status !== 200) {
    console.error(await response.text());
    throw new Error("invalid response from server");
  }

  return await response.json();
}
