import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ClubReviews from "./components/ClubReviews";

export interface ClubModalProp {
  show: boolean;
  clubName?: string;
  setShow: (a: boolean) => void;
}

const GET_CLUB_INFO = gql`
  query Club($clubname: String!) {
    club(clubname: $clubname) {
      id
      clubname
      rating
      description
      reviews {
        rating
        comment
      }
    }
  }
`;

const ClubModal: React.FC<ClubModalProp> = ({ show, setShow, clubName }) => {
  const { loading, error, data, refetch } = useQuery(GET_CLUB_INFO, {
    variables: { clubname: clubName },
  });

  if (!clubName) return <></>;

  let body = <></>;
  if (loading) body = <p>Loading...</p>;
  else if (error) body = <p>Error! {error.message}</p>;
  else {
    const { rating, description, reviews, id } = data.club;

    body = (
      <Container>
        <p>Ratings: {rating ? `${rating} / 5` : `No ratings yet`}</p>
        <h4>Description</h4>
        <p>{description}</p>
        <ClubReviews
          clubid={id}
          reviews={reviews}
          updateReviews={() => {
            refetch();
          }}
        />
      </Container>
    );
  }

  return (
    <Modal show={show} size="lg" onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{clubName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default ClubModal;
