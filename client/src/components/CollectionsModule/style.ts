import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  container: {
    marginTop: "20px",
    borderBottom: `1px solid ${theme.separator}`,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "30px",
  },
  expandButton: {
    padding: `8px`,

    borderRadius: theme.radius,
    border: 0,

    backgroundColor: theme.background,
    color: theme.text,

    display: `flex`,
    width: `96px`,
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
  body: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
    gap: "16px",
    "@media ( max-width: 1440px)": {
      // Two items per row
      "& > div": {
        flexBasis: "33.3%",
      },
    },
    "@media ( max-width: 1120px)": {
      // One item per row
      "& > div": {
        flexBasis: "66.6%",
      },
    },
  },
  icon: {
    marginLeft: "8px",
  },
}));

export default useStyles;
