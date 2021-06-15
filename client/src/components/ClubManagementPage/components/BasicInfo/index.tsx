import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import createColorPicker from "./ColorPicker";
import useStyles from "./style";
import schema from "./schema";
import { useMutation } from "@apollo/client";
import {
  UPDATE_BASIC_INFO,
  GET_CLUB_INFO,
  UPDATE_LOGO,
  GET_ORGANISER_CLUBS,
} from "../../../../constants/queries";
import { toBase64 } from "../../../../constants/functions";

export interface BasicInfoProp {
  clubId: string;
  clubName: string;
  description: string;
  about: string;
  themeColor: string;
}

const BasicInfo: React.FC<BasicInfoProp> = ({
  clubId,
  clubName,
  description,
  about,
  themeColor,
}) => {
  const classes = useStyles({ clubColor: themeColor });

  const [fileName, setFileName] = useState("Upload Logo Image");
  const [backgroundFileName, setbackgroundFileName] = useState(
    "Upload Background Image"
  );
  const refetchQueries = [
    { query: GET_CLUB_INFO, variables: { clubId } },
    { query: GET_ORGANISER_CLUBS },
  ];

  const [updateBasicInfo] = useMutation(UPDATE_BASIC_INFO, {
    refetchQueries,
  });

  const [updateLogo] = useMutation(UPDATE_LOGO, {
    refetchQueries,
  });

  async function handleSubmit(values: any) {
    updateBasicInfo({
      variables: {
        clubId,
        clubName: values.clubName,
        description: values.description,
        about: values.about,
        themeColor: values.themeColor,
      },
    });

    if (values.logoURI) {
      const logoString = await toBase64(values.logoURI);
      updateLogo({
        variables: {
          clubId,
          content: logoString,
        },
      });
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      initialValues={{
        clubName: clubName,
        description: description,
        about: about,
        themeColor: themeColor,
        logoURI: null,
        backgroundURI: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue,
      }) => {
        const ColorPicker = createColorPicker(values, classes, setFieldValue);
        return (
          <Form noValidate onSubmit={handleSubmit}>
            {/* Club Name */}
            <Form.Group as={Row} controlId="validationFormikName">
              <Form.Label className={classes.label} column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="clubName"
                  placeholder="Enter Name"
                  value={values.clubName}
                  onChange={handleChange}
                  isInvalid={!!errors.clubName}
                  isValid={touched.clubName && !errors.clubName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.clubName}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Club Description*/}
            <Form.Group as={Row} controlId="validationFormikDescription">
              <Form.Label className={classes.label} column sm={2}>
                Tagline
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter Tagline"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                  isValid={touched.description && !errors.description}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Club About */}
            <Form.Group as={Row} controlId="validationFormikAbout">
              <Form.Label className={classes.label} column sm={2}>
                About
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="about"
                  placeholder="Enter About"
                  value={values.about}
                  onChange={handleChange}
                  isInvalid={!!errors.about}
                  isValid={touched.about && !errors.about}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.about}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Club Theme Colour */}
            <Form.Group as={Row} controlId="validationFormikColor">
              <Form.Label className={classes.label} column sm={2}>
                Theme Colour
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  isInvalid={!!errors.themeColor}
                  as={ColorPicker}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.themeColor}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* Logo URI */}
            <Form.Group as={Row} controlId="validationFormikLogoImage">
              <Form.Label className={classes.label} column sm={2}>
                Logo
              </Form.Label>
              <Col sm={10}>
                <Form.File name="logoURI" id="logo-uri" custom>
                  <Form.File.Input
                    isValid={touched.logoURI && !errors.logoURI}
                    isInvalid={!!errors.logoURI}
                    onChange={(e: any) => {
                      handleChange(e);
                      setFileName(
                        e.target.files
                          ? e.target.files[0].name
                          : "Upload Logo Image"
                      );
                      setFieldValue("logoURI", e.target.files[0]);
                    }}
                  />
                  <Form.File.Label data-browse="Upload">
                    {fileName}
                  </Form.File.Label>
                  <Form.Control.Feedback type="invalid">
                    {errors.logoURI}
                  </Form.Control.Feedback>
                </Form.File>
              </Col>
            </Form.Group>

            {/* Background URI */}
            <Form.Group as={Row} controlId="validationFormikBackgroundImage">
              <Form.Label className={classes.label} column sm={2}>
                Background
              </Form.Label>
              <Col sm={10}>
                <Form.File name="backgroundURI" id="bg-file" custom>
                  <Form.File.Input
                    isValid={touched.backgroundURI && !errors.backgroundURI}
                    isInvalid={!!errors.backgroundURI}
                    onChange={(e: any) => {
                      handleChange(e);
                      setbackgroundFileName(
                        e.target.files
                          ? e.target.files[0].name
                          : "Upload Background Image"
                      );
                      setFieldValue("backgroundURI", e.target.files[0]);
                    }}
                  />
                  <Form.File.Label data-browse="Upload">
                    {backgroundFileName}
                  </Form.File.Label>
                  <Form.Control.Feedback type="invalid">
                    {errors.backgroundURI}
                  </Form.Control.Feedback>
                </Form.File>
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
        );
      }}
    </Formik>
  );
};

export default BasicInfo;
