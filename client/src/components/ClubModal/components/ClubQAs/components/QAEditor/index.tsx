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
  const [anonymous, setAnonymous] = useState(false);

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
              anonymousQuestion: anonymous,
            },
          });
          setContent("");
          setTitle("");
          setAnonymous(false);
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
          <Form.Group
            controlId="formBasicCheckbox"
            style={{ marginTop: "8px" }}
          >
            <Form.Check
              type="checkbox"
              label="Submit as Anonymous"
              checked={anonymous}
              onChange={() => {
                setAnonymous(!anonymous);
              }}
            />
          </Form.Group>
          <Button className={classes.submitButton} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default QAEditor;
