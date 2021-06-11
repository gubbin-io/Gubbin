import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  titleText: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "30px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  body: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    marginBottom: "20px",
    gap: "16px",
    "@media ( max-width: 1680px)": {
      // Three items per row
      "& > div": {
        flexBasis: "26%",
      },
    },
    "@media ( max-width: 1280px)": {
      // Two items per row
      "& > div": {
        flexBasis: "33.3%",
      },
    },
    "@media ( max-width: 880px)": {
      // One item per row
      "& > div": {
        flexBasis: "100%",
      },
    },
  },
  divider: { marginTop: "8px", marginBottom: "8px", width: "100%" },
  backButton: {
    padding: `0px`,

    borderRadius: theme.radius,
    border: 0,

    backgroundColor: theme.background,
    color: theme.text,

    display: `flex`,
    width: `36px`,
    alignItems: `center`,
    justifyContent: "center",

    fontWeight: `400`,
    fontSize: `15px`,
    textAlign: `center`,

    "&:active": {
      backgroundColor: `${theme.active} !important`,
      color: theme.invertText,
      fontWeight: `500`,
    },
    "&:hover": {
      backgroundColor: theme.inactive,
      color: theme.text,
    },
    "&:focus:hover": {
      backgroundColor: theme.inactiveHover,
      color: theme.text,
    },
    "&:focus": {
      backgroundColor: theme.inactive,
      color: theme.text,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  },
  icon: {
    marginRight: "0px",
  },
}));

export default useStyles;
