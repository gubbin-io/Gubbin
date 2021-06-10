import React from "react";
import { Tab, Row, Col } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import ClubReviews from "../ClubReviews";
import useStyles from "./style";
import ClubSideBar from "../ClubSideBar";
import { useQuery, useMutation, gql } from "@apollo/client";

export interface ClubBodyProp {
  clubId: string;
  clubName: string;
  about: string;
  clubColor: string;
  numMembers: number;
  rating?: number;
  reviews: Review[];
}

const UPLOAD_LOGO = gql`
  mutation addLogo($clubId: ID!, $logo: Upload!) {
    addLogo(logoInput: { clubId: $clubId, logo: $logo }) {
      filename
    }
  }
`;

function UploadLogo({ clubId }: any) {
  const [uploadLogo] = useMutation(UPLOAD_LOGO, {
    onCompleted: (data) => console.log(data),
  });

  console.log("here");

  const handleFileChange = (e: any) => {
    if (!e.target.files[0]) return;
    uploadLogo({ variables: { clubId: clubId, logo: e.target.files[0] } });
  };

  return (
    <div>
      <h2>Upload Logo</h2>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
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
              <span className={classes.sectionHeading}>{`About`}</span>
              <hr className={classes.divider} />
              <p>{about}</p>
              <UploadLogo clubId={clubId} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ClubReviews
                clubId={clubId}
                reviews={reviews}
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
