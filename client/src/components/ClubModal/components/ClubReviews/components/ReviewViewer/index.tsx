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
        .map(({ id, rating, title, comment, commentTime }) => (
          <Card className={classes.reviewCard} key={id}>
            <Card.Body className={classes.reviewBody}>
              <div className={classes.bodyHeader}>
                <div className={classes.headerLeft}>
                  <span className={classes.largeText}>{title}</span>
                  <StarBox score={rating} />
                </div>
                <div className={classes.headerRight}>
                  <span className={classes.smallText}>
                    {new Date(commentTime).toLocaleString()}
                  </span>
                  <span className={classes.mediumText}>Anonymous</span>
                </div>
              </div>
              <Card.Text className={classes.bodyText}>{comment}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default ReviewViewer;
