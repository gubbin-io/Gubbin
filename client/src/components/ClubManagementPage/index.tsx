import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { BlockPicker } from "react-color";
import { ArrowLeftShort, Twitter } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { GET_CLUB_INFO } from "../../constants/queries";
import { Club } from "../../constants/types";
import LoadingScreen from "../LoadingScreen";
import useStyles from "./style";

export interface ClubManagementPageProp {
  clubId: String;
}

const ClubManagementPage: React.FC<ClubManagementPageProp> = ({ clubId }) => {
  const classes = useStyles();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CLUB_INFO, {
    variables: { clubId },
  });

  const [fileName, setFileName] = useState("Upload Logo Image");
  const [backgroundFileName, setbackgroundFileName] = useState(
    "Upload Background Image"
  );

  let body = <></>;

  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const schema = Yup.object().shape({
    clubName: Yup.string()
      .min(3, "Club name must have at least 3 characters")
      .max(50, "Club name can't be longer than 50 characters")
      .required("Club name is a required field"),
    description: Yup.string()
      .min(3, "Club tagline must have at least 3 characters")
      .max(30, "Club tagline can't be longer than 30 characters")
      .required("Club tagline is a required field"),
    themeColor: Yup.string()
      .required()
      .matches(colorRegex, "Theme colour must be a hex colour"),
    about: Yup.string().required("About section is required"),
    logoURI: Yup.mixed().test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value &&
          ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
            value.type
          ))
    ),
    backgroundURI: Yup.mixed().test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value &&
          ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
            value.type
          ))
    ),
  });

  if (loading) body = <LoadingScreen />;
  else if (error) body = <p>Error! {error.message}</p>;
  else {
    const {
      id, // DO NOT ALLOW
      clubName, // Allow
      description, // Allow
      themeColor, // Allow

      logoUri, // Allow - File Upload
      backgroundUri, // Allow - File Upload

      about, // Allow
      socialMedia, // Allow - 7 Options (Each with own text box)
      questions, // Allow - Only answer though
      reviews, // DO NOT ALLOW
      rating, // DO NOT ALLOW
      numMembers, // DO NOT ALLOW
    }: Club = data.club;

    body = (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          clubName: clubName,
          description: description,
          about: about,
          themeColor: themeColor,
          numMembers: numMembers,
          logoURI: null,
          backgroundURI: null,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          setFieldValue,
        }) => {
          const ColorPicker = React.forwardRef((props, ref) => (
            <div className={classes.pickerBox}>
              <BlockPicker
                triangle="hide"
                color={values.themeColor}
                colors={[
                  "#e03131",
                  "#c2255c",
                  "#9c36b5",
                  "#6741d9",
                  "#3b5bdb",
                  "#1971c2",
                  "#0c8599",
                  "#099268",
                  "#2f9e44",
                  "#66a80f",
                  "#f08c00",
                  "#e8590c",
                ]}
                width="100%"
                onChange={(color) => {
                  setFieldValue("themeColor", color);
                }}
              />
            </div>
          ));

          return (
            <Form noValidate onSubmit={handleSubmit}>
              {/* Club Name */}
              <Form.Group as={Row} controlId="validationFormikName">
                <Form.Label column sm={2}>
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
                <Form.Label column sm={2}>
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
              <Form.Group as={Row} controlId="validationFormikDescription">
                <Form.Label column sm={2}>
                  About
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
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
                <Form.Label column sm={2}>
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
                <Form.Label column sm={2}>
                  Logo
                </Form.Label>
                <Col sm={10}>
                  <Form.File name="logoURI" id="custom-file" custom>
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
                <Form.Label column sm={2}>
                  Background
                </Form.Label>
                <Col sm={10}>
                  <Form.File name="backgroundURI" id="custom-file" custom>
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

              {/* Social Media - Twitter */}
              <Form.Group as={Row} controlId="validationFormikBackgroundImage">
                <Form.Label column sm={2}>
                  Twitter
                </Form.Label>
                <Col sm={10}>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <Twitter size={16} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Twitter URL"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      // value={values.socialMedia}
                      onChange={handleChange}
                      // isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.username} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Update</Button>
                </Col>
              </Form.Group>
            </Form>
          );
        }}
      </Formik>
    );
  }

  return (
    <>
      <div className={classes.header}>
        <Button
          className={classes.backButton}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowLeftShort className={classes.icon} size={36} />
        </Button>
        <div className={classes.heading}>
          <span className={classes.titleText}>Club Management</span>
          <hr className={classes.divider} />
        </div>
      </div>

      {body}
    </>
  );
};

export default ClubManagementPage;
