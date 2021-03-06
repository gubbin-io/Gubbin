import React from "react";
import { Card } from "react-bootstrap";
import { Review } from "../../../../../../constants/types";
import StarBox from "../../../../../StarBox";
import useStyles from "./style";

export interface ReviewViewerProp {
  reviews: Review[];
}

const ReviewViewer: React.FC<ReviewViewerProp> = ({ reviews }) => {
  const classes = useStyles();

  return (
    <>
      {reviews
        .filter(({ title }) => title)
        .map(
          ({
            id,
            rating,
            title,
            comment,
            commentTime,
            anonymousReview,
            reviewer,
            followups,
          }) => (
            <Card className={classes.reviewCard} key={id}>
              <Card.Body className={classes.reviewBody}>
                <div className={classes.bodyHeader}>
                  <div className={classes.headerLeft}>
                    <span className={classes.largeText}>{title}</span>
                    <StarBox score={rating} />
                  </div>
                  <div className={classes.headerRight}>
                    <span className={classes.smallText}>
                      {new Date(commentTime).toLocaleDateString()}
                    </span>
                    <span className={classes.mediumText}>
                      {anonymousReview === false && reviewer
                        ? reviewer.userName
                        : "Anonymous"}
                    </span>
                  </div>
                </div>
                <Card.Text className={classes.bodyText}>{comment}</Card.Text>
                {followups &&
                  followups.map((followup) => (
                    <>
                      <hr />
                      <div className={classes.bodyHeader}>
                        <div className={classes.headerLeft}>
                          <span className={classes.largeText}>
                            {followup.isCommittee
                              ? "Committee Response"
                              : reviewer?.userName}
                          </span>
                        </div>
                        <div className={classes.headerRight}>
                          <span className={classes.mediumText}>
                            {new Date(
                              followup.followupTime
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Card.Text className={classes.bodyText}>
                        {followup.comment}
                      </Card.Text>
                    </>
                  ))}
              </Card.Body>
            </Card>
          )
        )}
    </>
  );
};

export default ReviewViewer;
