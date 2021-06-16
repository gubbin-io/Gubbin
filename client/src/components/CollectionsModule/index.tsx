import { useQuery } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";
import { useHistory } from "react-router";
import useWindowDimensions from "../../constants/hooks";
import { GET_CLUB_COLLECTION } from "../../constants/queries";
import ClubCard from "../ClubCard";
import CardFiller from "../ClubCard/components/CardFiller";
import useStyles from "./style";
import LoadingScreen from "../LoadingScreen";
import { Club } from "../../constants/types";

export interface CollectionsModuleProp {
  collectionID: String;
  showModalClub: (id: string) => void;
}

const CollectionsModule: React.FC<CollectionsModuleProp> = ({
  collectionID,
  showModalClub,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: collectionID },
  });
  const { width } = useWindowDimensions();
  const limit = width > 1680 ? 8 : 6;
  if (loading) return <LoadingScreen />;
  if (error) return <p>`Error! ${error}`</p>;

  const handleShowAll = () => {
    history.push(`/collection/${collectionID}`);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <span
            className={classes.headerText}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleShowAll();
            }}
          >
            {data.clubCollection.collectionName}
          </span>
          <Button
            className={classes.expandButton}
            onClick={() => {
              handleShowAll();
            }}
          >
            See All
            <CaretRightFill className={classes.icon} size={16} />
          </Button>
        </div>
        <div className={classes.body}>
          {data.clubCollection.clubs
            .slice(0, limit)
            .map(
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
                  themeColor={themeColor}
                  logoUri={logoUri}
                  joined={joined}
                  id={id}
                  key={id}
                  onClick={() => showModalClub(id)}
                />
              )
            )}
          <CardFiller />
          <CardFiller />
          <CardFiller />
        </div>
      </div>
    </>
  );
};

export default CollectionsModule;
