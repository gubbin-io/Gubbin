import React from "react";
import { Card, Col } from "react-bootstrap";

export interface UserProp {
  clubname: String;
  rating?: Number;
  onClick: () => void;
}

const User: React.FC<UserProp> = ({ clubname, rating, onClick }) => {
  return (
    <Col md={3}>
      <Card onClick={onClick} style={{ marginTop: "1rem", width: "100%" }}>
        <Card.Title>{clubname}</Card.Title>
        <Card.Body>
          {rating ? `rating: ${rating.toString()} / 5` : "No Reviews"}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
