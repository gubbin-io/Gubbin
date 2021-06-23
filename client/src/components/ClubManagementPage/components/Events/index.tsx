import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import useStyles from "./style";
import schema from "./schema";
import { useMutation } from "@apollo/client";
import {
  ADD_EVENT,
  GET_CLUB_INFO,
  GET_ORGANISER_CLUBS,
} from "../../../../constants/queries";

export interface EventsProp {
  clubId: string;
  themeColor: string;
}

const Events: React.FC<EventsProp> = ({ clubId, themeColor }) => {
  const classes = useStyles({ clubColor: themeColor });

  const refetchQueries = [
    { query: GET_CLUB_INFO, variables: { clubId } },
    { query: GET_ORGANISER_CLUBS },
  ];

  const [addEvent] = useMutation(ADD_EVENT, { refetchQueries });
  const date = useState(new Date());

  async function handleSubmit(values: any) {
    addEvent({
      variables: {
        clubId,
        title: values.title,
        link: values.url,
      },
    });
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      initialValues={{
        title: "",
        url: "",
        date: date,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {/* Update Title */}
          <Form.Group as={Row} controlId="validationFormikName">
            <Form.Label className={classes.label} column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter event highlight title"
                value={values.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
                isValid={touched.title && !errors.title}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {/* Update Url*/}
          <Form.Group as={Row} controlId="validationFormikUrl">
            <Form.Label className={classes.label} column sm={2}>
              Link
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="url"
                placeholder="Enter a short url"
                value={values.url}
                onChange={handleChange}
                isInvalid={!!errors.url}
                isValid={touched.url && !errors.url}
              />
              <Form.Control.Feedback type="invalid">
                {errors.url}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button className={classes.submitButton} type="submit">
                Add Highlight
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default Events;
