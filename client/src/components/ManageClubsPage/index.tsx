import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORGANISER_CLUBS } from "../../constants/queries";
import LoadingScreen from "../LoadingScreen";

import { Club } from "../../constants/types";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";
import { useHistory } from "react-router-dom";

export interface ManagePageProp {
  showModalClub: (id: string) => void;
}

const ManagePage: React.FC<ManagePageProp> = ({ showModalClub }) => {
  const { loading, error, data } = useQuery(GET_ORGANISER_CLUBS);
  const classes = useStyles();
  const history = useHistory();

  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <>
      <div className={classes.header}>
        <div className={classes.heading}>
          <span className={classes.titleText}>Manage Clubs</span>
          <hr className={classes.divider} />
        </div>
      </div>

      <div className={classes.body}>
        {data.currentUser.organizerClubs.map(
          ({
            clubName,
            description,
            themeColor,
            logoUri,
            id,
            joined,
          }: Club) => (
            <ClubCard
              clubName={clubName}
              description={description}
              joined={joined}
              id={id}
              themeColor={themeColor}
              logoUri={logoUri}
              isOrganiser={true}
              key={id}
              onClick={() => {
                history.push(`manage/${id}`);
              }}
              onView={() => showModalClub(id)}
            />
          )
        )}
        <CardFiller />
        <CardFiller />
        <CardFiller />
        <CardFiller />
        <CardFiller />
      </div>
    </>
  );
};

export default ManagePage;
