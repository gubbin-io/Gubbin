import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
  },
  right: {
    width: "50%",
    height: "100%",
    backgroundColor: theme.background,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    width: "50%",
    height: "100%",
    backgroundColor: theme.background,
  },
  coverImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    maxWidth: "420px",
  },
  brandText: {
    fontSize: "38px",
    fontWeight: "600",
  },
  brandIcon: {
    width: "108px",
    height: "108px",
    marginBottom: "16px",
  },
  brandTagline: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#ADB5BD",
  },
  form: {
    marginTop: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    "& > div": {
      width: "100%",
    },
    marginBottom: "32px",
  },
  field: {
    backgroundColor: theme.background,
    borderRadius: theme.radius,
    "&::placeholder": {
      color: "#ADB5BD",
      opacity: 1,
    },
  },
  miscText: { marginTop: "8px", color: "#ADB5BD" },
  link: {
    color: "#868e96",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#000000",
    },
  },
  label: {
    fontSize: "14px",
    color: "#868e96",
    fontWeight: "500",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#000000", //Note: Change later to use theme
    color: "#FFFFFF", // Note: Change later to use theme

    borderRadius: theme.radius,
    borderWidth: 0,
    padding: 8,
    marginTop: 16,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: `500`,
    fontSize: `15px`,
    textAlign: `left`,

    "&:active": {
      backgroundColor: `#1971c2 !important`,
      color: theme.invertText,
      fontWeight: `500`,
    },
    "&.active": {
      backgroundColor: `#1971c2 !important`,
      color: theme.invertText,
      fontWeight: `500  !important`,
    },
    "&:hover": {
      backgroundColor: "#495057",
      color: theme.invertText,
    },
    "&:focus:hover": {
      backgroundColor: "#495057",
      color: theme.invertText,
    },
    "&:focus": {
      backgroundColor: "#495057",
      color: theme.invertText,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  },
}));

export default useStyles;
