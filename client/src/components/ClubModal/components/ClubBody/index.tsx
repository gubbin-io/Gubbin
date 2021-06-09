import React from "react";
import { Tab, Row, Col } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import ClubReviews from "../ClubReviews";
import useStyles from "./style";
import ClubSideBar from "../ClubSideBar";

export interface ClubBodyProp {
  clubId: string;
  clubName: string;
  about: string;
  clubColor: string;
  numMembers: number;
  rating?: number;
  reviews: Review[];
}

const ClubBody: React.FC<ClubBodyProp> = ({
  clubId,
  clubName,
  about,
  clubColor,
  numMembers,
  rating,
  reviews,
}) => {
  const classes = useStyles();

  return (
    <Tab.Container defaultActiveKey="first">
      <Row style={{ height: "100%", marginBottom: "8px" }}>
        <ClubSideBar
          clubColor={clubColor}
          numMembers={numMembers}
          rating={rating}
          numReviews={reviews.length}
        />
        {/* Main Content of Tab */}
        <Col className={classes.contentColumn}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h4>About</h4>
              <hr />
              <p>{about}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ClubReviews clubId={clubId} reviews={reviews} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ClubBody;
