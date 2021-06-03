import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClubCard from "./ClubCard";
import MyButton from "./Button";
import useStyles from "./style";
import { Container, Row } from "react-bootstrap";

const GET_CLUBS = gql`
  query {
    clubs {
      id
      clubname
      reviews {
        rating
        comment
      }
    }
  }
`;

function App() {
  useStyles();

  const { loading, error, data } = useQuery(GET_CLUBS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Container>
      <Row>
        {data.clubs.map(({ clubname, id }: any) => (
          <ClubCard key={id} clubname={clubname} id={id} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
