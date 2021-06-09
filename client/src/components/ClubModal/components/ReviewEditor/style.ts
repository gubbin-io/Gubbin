import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  starBox: {
    display: "flex",
    gap: "18px",
    padding: "0px 8px",
  },
  fields: {
    width: "100%",
    marginTop: "8px",
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    maxWidth: "512px",
  },
  titleField: ({ clubColor }: any) => ({
    width: "100%",
    marginTop: "16px",
    borderRadius: theme.radius,
    "&:focus": {
      borderColor: `${clubColor}7F`,
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },
  }),
  reviewField: ({ clubColor }: any) => ({
    width: "100%",
    marginTop: "16px",
    borderRadius: theme.radius,
    "&:focus": {
      borderColor: `${clubColor}7F`,
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },
  }),
  submitButton: ({ clubColor }: any) => ({
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
      backgroundColor: `${clubColor} !important`, //TODO: Use club colou
      color: "#FFFFFF",
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: "#343A40",
      color: "#FFFFFF",
    },
    "&:focus": {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`, //TODO: Use club colour
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
}));

export default useStyles;
