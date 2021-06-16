import { useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { GET_CLUB_INFO } from "../../constants/queries";
import { Club } from "../../constants/types";
import LoadingScreen from "../LoadingScreen";
import PageBody from "./components/PageBody";
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
      clubName,
      description,
      themeColor,
      about,
      socialMedia,
      questions,
    }: Club = data.club;

    body = (
      <PageBody
        clubId={id}
        clubName={clubName}
        description={description}
        about={about}
        themeColor={themeColor}
        socialMedia={socialMedia}
        questions={questions}
      />
    );
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
