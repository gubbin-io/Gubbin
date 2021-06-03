import React from "react";
import { Card, Col } from "react-bootstrap";

export interface UserProp {
  clubname: String;
  id: String;
}

const User: React.FC<UserProp> = ({ clubname, id }) => {
  return (
    <Col>
      <Card>
        <Card.Title>{clubname}</Card.Title>
        <Card.Body>ID: {id}</Card.Body>
      </Card>
    </Col>
  );
};

export default User;
