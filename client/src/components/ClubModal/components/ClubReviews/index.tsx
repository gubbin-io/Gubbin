import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, Row } from "react-bootstrap";
import { GET_CLUB_INFO } from "../..";

export interface ReviewsProp {
  clubid: string;
  clubName: string;
  reviews: Review[];
}

interface Review {
  rating: number;
  comment: string;
}

const ADD_REVIEW = gql`
  mutation NewReview(
    $clubid: ID!
    $reviewer: String!
    $rating: Int!
    $comment: String
  ) {
    addReview(
      review: {
        clubid: $clubid
        reviewer: $reviewer
        rating: $rating
        comment: $comment
      }
    )
  }
`;

const ClubReviews: React.FC<ReviewsProp> = ({ clubid, clubName, reviews }) => {
  const [addReview] = useMutation(ADD_REVIEW, {
    refetchQueries: [
      { query: GET_CLUB_INFO, variables: { clubname: clubName } },
    ],
  });
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <>
      <h4>{`Ratings & Reviews`}</h4>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          addReview({
            variables: {
              clubid,
              reviewer: "Anonymous",
              rating,
              comment,
            },
          });
          setRating(5);
          setComment("");
        }}
      >
        <FormControl
          type="number"
          placeholder="rating"
          className="mr-lg-1"
          value={rating.toString()}
          onChange={(e) => {
            setRating(parseInt(e.target.value));
          }}
        />
        <FormControl
          type="text"
          placeholder="comment"
          className="mr-lg-2"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
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
