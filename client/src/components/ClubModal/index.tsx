import { useQuery } from "@apollo/client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { GET_CLUB_INFO } from "../../constants/queries";
import ClubBody from "./components/ClubBody";
import ClubHeader from "./components/ClubHeader";
import useStyles from "./style";

export interface ClubModalProp {
  show: boolean;
  clubName?: string;
  setShow: (a: boolean) => void;
}

const ClubModal: React.FC<ClubModalProp> = ({ show, setShow, clubName }) => {
  const { loading, error, data } = useQuery(GET_CLUB_INFO, {
    variables: { clubname: clubName },
  });

  const classes = useStyles();

  if (!clubName) return <></>;

  let body = <></>;
  let header = <></>;

  if (loading) body = <p>Loading...</p>;
  else if (error) body = <p>Error! {error.message}</p>;
  else {
    const { rating, description, reviews, id } = data.club;
    const bgUrl =
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483&q=80";
    const iconUrl =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/soccer-ball_26bd.png";
    const clubColor = "#2F9E44";
    const tagLine = "Become an Airborne Ranger!";
    const numMembers = 190;

    header = (
      <ClubHeader
        clubName={clubName}
        bgUrl={bgUrl}
        iconUrl={iconUrl}
        clubColor={clubColor}
        tagline={tagLine}
        onHide={() => setShow(false)}
      />
    );

    body = (
      <ClubBody
        clubid={id}
        clubName={clubName}
        about={description}
        numMembers={numMembers}
        clubColor={clubColor}
        rating={rating}
        reviews={reviews}
      />
    );
  }

  return (
    <Modal
      show={show}
      contentClassName={classes.modalContent}
      dialogClassName={classes.modalDialog}
      backdropClassName={classes.modalBackdrop}
      onHide={() => setShow(false)}
      centered
    >
      {header}
      <Modal.Body className={classes.modalBody}>{body}</Modal.Body>
    </Modal>
  );
};

export default ClubModal;
