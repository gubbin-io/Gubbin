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
  },
  brandText: {
    fontSize: "48px",
    fontWeight: "600",
  },
  brandIcon: {
    width: "128px",
    height: "128px",
    marginBottom: "16px",
  },
  brandTagline: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#ADB5BD",
    fontStyle: "italic",
  },
}));

export default useStyles;
