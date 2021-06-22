import * as Yup from "yup";

const schema = Yup.object().shape({
  response: Yup.string()
    .min(3, "Response must have at least 3 characters")
    .required("Committee response is a required field"),
});

export default schema;
