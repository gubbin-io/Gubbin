import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "./User";
import Button from "./Button";

const GET_USERS = gql`
  query {
    users {
      id
      username
      firstLetterOfUsername
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  console.log(data);

  return (
    <div>
      {data.users.map(({ username, id, firstLetterOfUsername }: any) => (
        <User
          key={id}
          firstLetter={firstLetterOfUsername}
          username={username}
        />
      ))}
      <Button> JSS demo </Button>
    </div>
  );
}

export default App;
