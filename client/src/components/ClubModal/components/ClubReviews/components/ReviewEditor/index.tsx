import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { ADD_REVIEW, GET_CLUB_INFO } from "../../../../../../constants/queries";
import StarSelect from "../../../../../StarSelect";
import useStyles from "./style";

export interface ReviewEditorProp {
  clubId: String;
  clubColor: String;
  showViewer: () => void;
}

const ReviewEditor: React.FC<ReviewEditorProp> = ({
  clubId,
  clubColor,
  showViewer,
}) => {
  const classes = useStyles({ clubColor });
  const [addReview] = useMutation(ADD_REVIEW, {
    refetchQueries: [{ query: GET_CLUB_INFO, variables: { clubId } }],
  });
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  return (
    <>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          addReview({
            variables: {
              clubId,
              reviewer: "Anonymous",
              rating,
              title,
              comment,
            },
          });
          setRating(3);
          setComment("");
          setTitle("");
          showViewer();
        }}
      >
        <div className={classes.fields}>
          <StarSelect
            rating={rating}
            setRating={(rating: number) => setRating(rating)}
          />
          <FormControl
            type="text"
            placeholder="Enter Title (Optional)"
            className={classes.titleField}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FormControl
            type="text"
            as="textarea"
            rows={4}
            placeholder="Enter Review (Optional)"
            className={classes.reviewField}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <Button className={classes.submitButton} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ReviewEditor;
