import * as Yup from "yup";

const URLCheck = Yup.string().matches(
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  "Enter Correct URL!"
);

const schema = Yup.object().shape({
  facebook: URLCheck,
  discord: URLCheck,
  whatsapp: URLCheck,
  website: URLCheck,
  twitter: URLCheck,
  messager: URLCheck,
  instagram: URLCheck,
});

export default schema;
