import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Update title must have at least 3 characters")
    .max(100, "Update title can't be longer than 100 characters")
    .required("Update title is a required field"),
  description: Yup.string(),
});

export default schema;
