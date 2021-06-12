import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  sectionHeading: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    letterSpacing: "-1.25px",
  },
  something: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "left",
  },
  divider: {
    marginTop: "8px",
    marginBottom: "16px",
  },
  longButton: ({ clubColor }: any) => ({
    width: "208px",
    backgroundColor: theme.inactive,
    color: theme.text,

    marginBottom: "8px",
    padding: `8px`,

    borderRadius: `${theme.radius} !important`,
    border: 0,

    "&:active": {
      backgroundColor: `${clubColor} !important`,
      color: `${theme.invertText} !important`,
      fontWeight: `500`,
    },

    display: `flex`,
    alignItems: "center",

    fontWeight: `400`,
    fontSize: `15px`,
    textAlign: `left`,

    "&:hover": {
      backgroundColor: theme.inactiveHover,
      color: theme.text,
    },
    "&:focus:hover": {
      backgroundColor: theme.inactiveHover,
      color: theme.text,
    },
    "&:focus": {
      backgroundColor: theme.inactive,
      color: theme.text,
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
  icon: {
    marginRight: "8px",
  },
}));

export default useStyles;
