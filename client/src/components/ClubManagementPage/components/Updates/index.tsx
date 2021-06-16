import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import createDatePicker from "./DatePicker";
import useStyles from "./style";
import schema from "./schema";
import { useMutation } from "@apollo/client";
import {
  ADD_UPDATE,
  GET_CLUB_INFO,
  GET_ORGANISER_CLUBS,
} from "../../../../constants/queries";

export interface UpdatesProp {
  clubId: string;
  themeColor: string;
}

const Updates: React.FC<UpdatesProp> = ({ clubId, themeColor }) => {
  const classes = useStyles({ clubColor: themeColor });

  const refetchQueries = [
    { query: GET_CLUB_INFO, variables: { clubId } },
    { query: GET_ORGANISER_CLUBS },
  ];

  const [addUpdate] = useMutation(ADD_UPDATE, { refetchQueries });
  const date = useState(new Date());

  async function handleSubmit(values: any) {
    addUpdate({
      variables: {
        clubId,
        title: values.title,
        description: values.description,
        date: date[0],
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
        description: "",
        date: date,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        const DatePicker = createDatePicker(date);
        return (
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
                  placeholder="Enter update title"
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

            {/* Update Description*/}
            <Form.Group as={Row} controlId="validationFormikDescription">
              <Form.Label className={classes.label} column sm={2}>
                Description
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter a short description (optional)"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                  isValid={touched.description && !errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="validationFormikColor">
              <Form.Label className={classes.label} column sm={2}>
                Date
              </Form.Label>
              <Col sm={10}>
                <Form.Control isInvalid={!!errors.date} as={DatePicker} />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button className={classes.submitButton} type="submit">
                  Add Update
                </Button>
              </Col>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Updates;
