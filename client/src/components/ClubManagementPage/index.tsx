import { useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { GET_CLUB_INFO } from "../../constants/queries";
import { Club } from "../../constants/types";
import LoadingScreen from "../LoadingScreen";
import useStyles from "./style";

export interface ClubManagementPageProp {
  clubId: String;
}

const ClubManagementPage: React.FC<ClubManagementPageProp> = ({ clubId }) => {
  const classes = useStyles();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CLUB_INFO, {
    variables: { clubId },
  });

  let body = <></>;

  if (loading) body = <LoadingScreen />;
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
      socialMedia,
      backgroundUri,
      questions,
      reviews,
      joined,
      rating,
    }: Club = data.club;

    body = <p>{`${clubName}: Change Me`}</p>;
  }

  return (
    <>
      <div className={classes.header}>
        <Button
          className={classes.backButton}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftShort className={classes.icon} size={36} />
        </Button>
        <div className={classes.heading}>
          <span className={classes.titleText}>Club Management</span>
          <hr className={classes.divider} />
        </div>
      </div>

      {body}
    </>
  );
};

export default ClubManagementPage;
