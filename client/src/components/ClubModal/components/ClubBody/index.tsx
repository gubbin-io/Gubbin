import React from "react";
import { Tab, Row, Col } from "react-bootstrap";
import { Question, Review } from "../../../../constants/types";
import ClubReviews from "../ClubReviews";
import ClubQAs from "../ClubQAs";
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
  questions: Question[];
}

const ClubBody: React.FC<ClubBodyProp> = ({
  clubId,
  clubName,
  about,
  clubColor,
  numMembers,
  rating,
  questions,
  reviews,
}) => {
  const classes = useStyles();

  return (
    <Tab.Container defaultActiveKey="about">
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
            <Tab.Pane eventKey="about">
              <span className={classes.sectionHeading}>{`About`}</span>
              <hr className={classes.divider} />
              <p>{about}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              <ClubReviews
                clubId={clubId}
                reviews={reviews}
                clubColor={clubColor}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="questions">
              <ClubQAs
                clubId={clubId}
                questions={questions}
                clubColor={clubColor}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ClubBody;
