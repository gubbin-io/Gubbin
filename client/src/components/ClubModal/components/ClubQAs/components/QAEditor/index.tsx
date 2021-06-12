import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import {
  POST_QUESTION,
  GET_CLUB_INFO,
} from "../../../../../../constants/queries";
import useStyles from "./style";

export interface QAEditorProp {
  clubId: String;
  clubColor: String;
  showViewer: () => void;
}

const QAEditor: React.FC<QAEditorProp> = ({
  clubId,
  clubColor,
  showViewer,
}) => {
  const classes = useStyles({ clubColor });
  const [postQuestion] = useMutation(POST_QUESTION, {
    refetchQueries: [{ query: GET_CLUB_INFO, variables: { clubId } }],
  });
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  return (
    <>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          postQuestion({
            variables: {
              clubId,
              title,
              body: content,
            },
          });
          setContent("");
          setTitle("");
          showViewer();
        }}
      >
        <div className={classes.fields}>
          <FormControl
            type="text"
            placeholder="Enter Subject"
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
            placeholder="Enter Question"
            className={classes.reviewField}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
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

export default QAEditor;
