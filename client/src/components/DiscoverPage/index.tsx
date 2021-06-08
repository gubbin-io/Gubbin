import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import ClubCard from "../ClubCard";
import { Container, Row } from "react-bootstrap";
import ClubModal from "../ClubModal";
import useStyles from "./style";
import { GET_CLUBS } from "../../constants/queries";

export interface DiscoverPageProp {}

const DiscoverPage: React.FC<DiscoverPageProp> = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CLUBS);
  const [show, setShow] = useState(false);
  const [modalClubName, setModalClubName] =
    useState<string | undefined>(undefined);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const showModalClub = (clubname: string) => {
    setModalClubName(clubname);
    setShow(true);
  };

  return (
    <div className={classes.mainContainer}>
      <Container className="p-3">
        <ClubModal show={show} setShow={setShow} clubName={modalClubName} />
        <Row>
          {data.clubs.map(({ clubname, rating, id }: any) => (
            <ClubCard
              key={id}
              clubname={clubname}
              rating={rating}
              onClick={() => showModalClub(clubname)}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverPage;
