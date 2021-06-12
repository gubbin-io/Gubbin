import { useQuery } from "@apollo/client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { GET_CLUB_INFO } from "../../constants/queries";
import { Club } from "../../constants/types";
import ClubBody from "./components/ClubBody";
import ClubHeader from "./components/ClubHeader";
import useStyles from "./style";

export interface ClubModalProp {
  show: boolean;
  clubId?: string;
  setShow: (a: boolean) => void;
}

const ClubModal: React.FC<ClubModalProp> = ({ show, setShow, clubId }) => {
  const { loading, error, data } = useQuery(GET_CLUB_INFO, {
    variables: { clubId },
  });

  const classes = useStyles();

  if (!clubId) return <></>;

  let body = <></>;
  let header = <></>;

  if (loading) body = <p>Loading...</p>;
  else if (error) body = <p>Error! {error.message}</p>;
  else {
    const {
      id,
      description,
      numMembers,
      themeColor,
      about,
      clubName,
      logoUri,
      backgroundUri,
      questions,
      reviews,
      rating,
    }: Club = data.club;

    header = (
      <ClubHeader
        clubName={clubName}
        bgUrl={backgroundUri}
        iconUrl={logoUri}
        clubColor={themeColor}
        tagline={description}
        onHide={() => setShow(false)}
      />
    );

    body = (
      <ClubBody
        clubId={id}
        clubName={clubName}
        about={about}
        numMembers={numMembers}
        questions={questions}
        clubColor={themeColor}
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
