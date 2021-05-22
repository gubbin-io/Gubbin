import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "./User";
import MyButton from "./Button";
import useStyles from "./style";
import { Container, Row } from "react-bootstrap";

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
  useStyles();

  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Container>
      <Row>
        {data.users.map(({ username, id, firstLetterOfUsername }: any) => (
          <User
            key={id}
            firstLetter={firstLetterOfUsername}
            username={username}
            id={id}
          />
        ))}
      </Row>
      <Row>
        <MyButton> JSS demo </MyButton>
      </Row>
    </Container>
  );
}

export default App;
