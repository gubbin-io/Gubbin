import { useMutation } from "@apollo/client";
import React, { CSSProperties, useState } from "react";
import { Button } from "react-bootstrap";
import {
  ADD_MEMBER_CLUB,
  GET_MEMBER_CLUBS,
  REMOVE_MEMBER_CLUB,
  GET_CLUB_INFO,
} from "../../constants/queries";
import useStyles from "./style";

export interface JoinButtonProp {
  joined: boolean;
  clubId: string;
  clubColor: string;
  style?: CSSProperties;
}

const JoinButton: React.FC<JoinButtonProp> = ({
  joined,
  clubId,
  clubColor,
  style,
}) => {
  const classes = useStyles({ clubColor });
  const [joinState, setJoinState] = useState(joined);
  const refetchQueries = [
    { query: GET_MEMBER_CLUBS },
    "GetClubCollection",
    { query: GET_CLUB_INFO, variables: { clubId } },
  ];
  const [addMemberClub] = useMutation(ADD_MEMBER_CLUB, { refetchQueries });

  const [removeMemberClub] = useMutation(REMOVE_MEMBER_CLUB, {
    refetchQueries,
  });

  function handleJoin() {
    const userId = sessionStorage.getItem("userId");

    if (userId && userId !== "undefined") {
      addMemberClub({ variables: { userId, clubId } });
      setJoinState(!joinState);
    }
  }

  function handleUnJoin() {
    const userId = sessionStorage.getItem("userId");

    if (userId && userId !== "undefined") {
      removeMemberClub({ variables: { userId, clubId } });
      setJoinState(!joinState);
    }
  }

  return (
    <Button
      className={`${classes.joinButton}${joinState ? " joined" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (joinState) {
          handleUnJoin();
        } else {
          handleJoin();
        }
      }}
      style={style}
    >
      {joinState ? `Leave` : `Join`}
    </Button>
  );
};

export default JoinButton;
