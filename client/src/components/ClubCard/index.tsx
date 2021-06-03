import React from "react";
import { Card, Col } from "react-bootstrap";

export interface UserProp {
  clubname: String;
  rating?: Number;
}

const User: React.FC<UserProp> = ({ clubname, rating }) => {
  return (
    <Col>
      <Card>
        <Card.Title>{clubname}</Card.Title>
        <Card.Body>
          {rating ? `rating: ${rating.toString()} / 5` : "No Reviews"}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
