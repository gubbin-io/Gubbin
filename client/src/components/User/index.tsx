import React from "react";
import { Card, Col } from "react-bootstrap";

export interface UserProp {
  username: String;
  firstLetter: String;
  id: String;
}

const User: React.FC<UserProp> = ({ username, firstLetter, id }) => {
  return (
    <Col>
      <Card>
        <Card.Title>{username}</Card.Title>
        <Card.Body>
          firstLetter: {firstLetter}
          <br />
          ID: {id}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
