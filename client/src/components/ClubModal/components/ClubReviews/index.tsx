import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Button, Card, Form, FormControl, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export interface ReviewsProp {
  clubName: string;
  reviews: Review[];
}

interface Review {
  rating: number;
  comment: string;
}

const ClubReviews: React.FC<ReviewsProp> = ({ clubName, reviews }) => {
  return (
    <>
      <h4>{`Ratings & Reviews`}</h4>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormControl
          type="number"
          placeholder="rating"
          className="mr-lg-1"
          value={""}
          onChange={() => {}}
        />
        <FormControl
          type="text"
          placeholder="comment"
          className="mr-lg-2"
          value={""}
          onChange={() => {}}
        />
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>

      {reviews.map(({ rating, comment }) => (
        <Row>
          <Card style={{ marginTop: "1rem", width: "100%" }}>
            <Card.Body>
              <Card.Title>Anonymous</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {rating} / 5
              </Card.Subtitle>
              <Card.Text>{comment}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      ))}
    </>
  );
};

export default ClubReviews;
