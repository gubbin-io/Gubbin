import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  brandIcon: {
    padding: 0,
    margin: 0,
  },
  brand: {
    padding: 0,
    margin: 0,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  navbar: {
    borderBottom: `1px solid ${theme.separator}`,
    height: `53px`,
    padding: `12px 20px`,
  },
  container: {
    height: `28px`,
    padding: 0,
  },
}));

export default useStyles;
