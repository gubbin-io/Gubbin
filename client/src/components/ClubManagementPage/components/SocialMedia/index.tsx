import { Formik } from "formik";
import React from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import {
  Discord,
  Facebook,
  Instagram,
  Messenger,
  Twitter,
  Whatsapp,
  Globe2,
} from "react-bootstrap-icons";
import { SocialMedia } from "../../../../constants/types";
import useStyles from "./style";
import schema from "./schema";
import { useMutation } from "@apollo/client";
import {
  UPDATE_SOCIAL_MEDIA,
  GET_CLUB_INFO,
} from "../../../../constants/queries";

export interface SocialMediaProp {
  clubId: string;
  socialMedia?: SocialMedia;
  themeColor: string;
}

const SocialMediaPage: React.FC<SocialMediaProp> = ({
  clubId,
  socialMedia,
  themeColor,
}) => {
  const classes = useStyles({ clubColor: themeColor });

  const [updateSocialMedia] = useMutation(UPDATE_SOCIAL_MEDIA, {
    refetchQueries: [{ query: GET_CLUB_INFO, variables: { clubId } }],
  });

  async function handleSubmit(values: any) {
    console.log(values);
    updateSocialMedia({
      variables: {
        clubId,
        discord: values.discord,
        facebook: values.facebook,
        instagram: values.instagram,
        messager: values.messager,
        twitter: values.twitter,
        website: values.website,
        whatsapp: values.whatsapp,
      },
    });
  }

  return (
    <>
      <Formik
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={schema}
        initialValues={{
          facebook: socialMedia?.facebook || "",
          discord: socialMedia?.discord || "",
          whatsapp: socialMedia?.whatsapp || "",
          website: socialMedia?.website || "",
          twitter: socialMedia?.twitter || "",
          messager: socialMedia?.messager || "",
          instagram: socialMedia?.instagram || "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* Social Media - Twitter */}
            <Form.Group as={Row} controlId="validationFormikTwitter">
              <Form.Label className={classes.label} column sm={2}>
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
                    name="twitter"
                    value={values.twitter}
                    onChange={handleChange}
                    isInvalid={!!errors.twitter}
                    isValid={!errors.twitter && touched.twitter}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.twitter}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - Instagram */}
            <Form.Group as={Row} controlId="validationFormikInstagram">
              <Form.Label className={classes.label} column sm={2}>
                Instagram
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Instagram size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Instagram URL"
                    aria-describedby="inputGroupPrepend"
                    name="instagram"
                    value={values.instagram}
                    onChange={handleChange}
                    isInvalid={!!errors.instagram}
                    isValid={!errors.instagram && touched.instagram}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.instagram}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - Facebook */}
            <Form.Group as={Row} controlId="validationFormikFacebook">
              <Form.Label className={classes.label} column sm={2}>
                Facebook
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Facebook size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Facebook URL"
                    aria-describedby="inputGroupPrepend"
                    name="facebook"
                    value={values.facebook}
                    onChange={handleChange}
                    isInvalid={!!errors.facebook}
                    isValid={!errors.facebook && touched.facebook}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.facebook}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - Messenger */}
            <Form.Group as={Row} controlId="validationFormikMessenger">
              <Form.Label className={classes.label} column sm={2}>
                Messenger
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Messenger size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Messenger URL"
                    aria-describedby="inputGroupPrepend"
                    name="messager"
                    value={values.messager}
                    onChange={handleChange}
                    isInvalid={!!errors.messager}
                    isValid={!errors.messager && touched.messager}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.messager}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - Discord */}
            <Form.Group as={Row} controlId="validationFormikDiscord">
              <Form.Label className={classes.label} column sm={2}>
                Discord
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Discord size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Discord URL"
                    aria-describedby="inputGroupPrepend"
                    name="discord"
                    value={values.discord}
                    onChange={handleChange}
                    isInvalid={!!errors.discord}
                    isValid={!errors.discord && touched.discord}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.discord}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - WhatsApp */}
            <Form.Group as={Row} controlId="validationFormikWhatsApp">
              <Form.Label className={classes.label} column sm={2}>
                WhatsApp
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Whatsapp size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="WhatsApp URL"
                    aria-describedby="inputGroupPrepend"
                    name="whatsapp"
                    value={values.whatsapp}
                    onChange={handleChange}
                    isInvalid={!!errors.whatsapp}
                    isValid={!errors.whatsapp && touched.whatsapp}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.whatsapp}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            {/* Social Media - Website */}
            <Form.Group as={Row} controlId="validationFormikWebsite">
              <Form.Label className={classes.label} column sm={2}>
                Website
              </Form.Label>
              <Col sm={10}>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <Globe2 size={16} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Website URL"
                    aria-describedby="inputGroupPrepend"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    isInvalid={!!errors.website}
                    isValid={!errors.website && touched.website}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.website}
                  </Form.Control.Feedback>
                </InputGroup>
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
        )}
      </Formik>
    </>
  );
};

export default SocialMediaPage;
