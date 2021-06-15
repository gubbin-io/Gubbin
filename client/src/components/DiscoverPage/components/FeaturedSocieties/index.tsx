import { useQuery } from "@apollo/client";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/esm/Carousel";
import { classicNameResolver } from "typescript";
import { GET_CLUB_COLLECTION } from "../../../../constants/queries";
import { Club } from "../../../../constants/types";
import LoadingScreen from "../../../LoadingScreen";
import useStyles from "./style";

export interface FeaturedSocietiesProp {
  showModalClub: (id: string) => void;
}

const FeaturedSocieties: React.FC<FeaturedSocietiesProp> = ({
  showModalClub,
}) => {
  // Featured societies
  const { loading, error, data } = useQuery(GET_CLUB_COLLECTION, {
    variables: { collectionId: "60c7bb57889e63a7783c260f" },
  });
  const classes = useStyles();

  if (loading) return <LoadingScreen />;
  if (error || data.clubCollection.clubs.length === 0) return <></>;

  return (
    <div className={classes.container}>
      <Row className={classes.carousel}>
        {data.clubCollection.clubs.map(
          ({ id, clubName, description, backgroundUri }: Club) => (
            <Col
              className={classes.carouselItem}
              key={id}
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={5}
            >
              <div className={classes.featureCard}>
                <img
                  className={classes.image}
                  src={backgroundUri}
                  alt={clubName}
                />
                <div className={classes.overlay}></div>
                <div className={classes.clubDetails}>
                  <span className={classes.clubName}>{clubName}</span>
                  <span className={classes.clubTagline}>{description}</span>
                </div>
              </div>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default FeaturedSocieties;
