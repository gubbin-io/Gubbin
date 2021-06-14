import { useQuery } from "@apollo/client";
import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { GET_CLUB_COLLECTION } from "../../../../constants/queries";
import { Club } from "../../../../constants/types";
import LoadingScreen from "../../../LoadingScreen";
// import useStyles from "./style";

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

  if (loading) return <LoadingScreen />;
  if (error || data.clubCollection.clubs.length === 0) return <></>;

  return (
    <Carousel interval={null} controls={false}>
      {data.clubCollection.clubs.map(
        ({ id, clubName, description, backgroundUri }: Club) => (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={backgroundUri}
              alt={clubName}
              style={{ width: 800, height: 400 }}
            />
            <Carousel.Caption>
              <h3>{clubName}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
};

export default FeaturedSocieties;
