import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  statistics: {
    display: "flex",
    marginBottom: "24px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    marginRight: "8px",
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: "16px",
    borderRight: `1px solid ${theme.separator}`,
  },
  bigText: {
    marginTop: "4px",
    marginBottom: "4px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "39px",
  },
  memberBox: {
    paddingLeft: "16px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  smallText: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "15px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#adb5bd",
  },
  mediumText: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "14px",
    textTransform: "uppercase",
  },
  sidebar: {
    width: "240px",
    padding: "0px 16px",
    flex: "0 0 240px",
  },
  tabButton: ({ clubColor }: any) => ({
    backgroundColor: theme.inactive,
    color: theme.text,

    marginBottom: "8px",
    padding: `8px`,

    borderRadius: `${theme.radius} !important`,

    "&.active": {
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
    marginRight: `8px`,
  },
}));

export default useStyles;
