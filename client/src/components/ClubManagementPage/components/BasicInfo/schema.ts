import * as Yup from "yup";

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

export default schema;
