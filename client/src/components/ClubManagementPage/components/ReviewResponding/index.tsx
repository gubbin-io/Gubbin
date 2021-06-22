import React from "react";
import { Card } from "react-bootstrap";
import { Review } from "../../../../constants/types";
import ResponseEditor from "./ResponseEditor";
import useStyles from "./style";
import StarBox from "../../../StarBox";

export interface ReviewRespondingProp {
  clubId: string;
  reviews: Review[];
  themeColor: string;
}

const ReviewResponding: React.FC<ReviewRespondingProp> = ({
  clubId,
  reviews,
  themeColor,
}) => {
  const classes = useStyles();

  return (
    <>
      {reviews.map(
        ({ id, rating, title, comment, commentTime, reviewer, followups }) => (
          <div key={id}>
            <Card className={classes.reviewCard} key={id}>
              <Card.Body className={classes.reviewBody}>
                <div className={classes.bodyHeader}>
                  <div className={classes.headerLeft}>
                    <span className={classes.extraLargeText}>{title}</span>
                    <StarBox score={rating} />
                    <span className={classes.smallText}>
                      {new Date(commentTime).toLocaleString()}
                    </span>
                  </div>
                  <div className={classes.headerRight}>
                    <span className={classes.mediumText}>
                      {reviewer?.userName}
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
                          <span className={classes.smallText}>
                            {new Date(followup.followupTime).toLocaleString()}
                          </span>
                        </div>
                        <div className={classes.headerRight}></div>
                      </div>
                      <Card.Text className={classes.bodyText}>
                        {followup.comment}
                      </Card.Text>
                    </>
                  ))}
              </Card.Body>
            </Card>

            {!followups || followups?.length <= 1 ? (
              <ResponseEditor
                response={
                  followups && followups.length > 0 ? followups[0].comment : ""
                }
                themeColor={themeColor}
                reviewId={id}
                clubId={clubId}
              />
            ) : null}
          </div>
        )
      )}
    </>
  );
};

export default ReviewResponding;
