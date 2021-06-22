import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { PenFill, XSquareFill } from "react-bootstrap-icons";
import { Formik } from "formik";
import schema from "./schema";
import useStyles from "./style";
import { GET_CLUB_INFO, POST_FOLLOWUP } from "../../../../../constants/queries";
import { useMutation } from "@apollo/client";

export interface ResponseEditorProp {
  clubId: string;
  reviewId: string;
  response?: string;
  themeColor: string;
}

const ResponseEditor: React.FC<ResponseEditorProp> = ({
  clubId,
  reviewId,
  response,
  themeColor,
}) => {
  const classes = useStyles({ clubColor: themeColor });
  const [showEditor, setShowEditor] = useState(false);
  const [postFollowup] = useMutation(POST_FOLLOWUP, {
    refetchQueries: [{ query: GET_CLUB_INFO, variables: { clubId } }],
  });

  function handleSubmit(value: any) {
    postFollowup({
      variables: {
        comment: value.response,
        isCommittee: true,
        reviewId,
      },
    });
  }

  return (
    <>
      <Button
        className={classes.longButton}
        onClick={() => {
          setShowEditor(!showEditor);
        }}
      >
        {showEditor ? (
          <XSquareFill className={classes.icon} size={20} />
        ) : (
          <PenFill className={classes.icon} size={20} />
        )}
        {showEditor ? `Close Editor` : `Add/Edit Response`}
      </Button>
      {!showEditor ? (
        <></>
      ) : (
        <Formik
          validationSchema={schema}
          onSubmit={(v: any) => handleSubmit(v)}
          initialValues={{
            response: response || "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => {
            return (
              <>
                <Form noValidate onSubmit={handleSubmit}>
                  {/* Club Name */}
                  <Form.Group as={Row} controlId="validationFormikName">
                    <Form.Label className={classes.label} column sm={2}>
                      Committee Response
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="response"
                        placeholder="Enter Response"
                        value={values.response}
                        onChange={handleChange}
                        isInvalid={!!errors.response}
                        isValid={touched.response && !errors.response}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.response}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button className={classes.submitButton} type="submit">
                        Update
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default ResponseEditor;
