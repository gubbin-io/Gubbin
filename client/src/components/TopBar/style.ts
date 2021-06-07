import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  icon: {
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
  container: {
    height: `28px`,
    padding: 0,
  },
  navbar: {
    background: theme.primary,
    borderBottom: `1px solid ${theme.separator}`,
    height: `53px`,
    padding: `12px 20px`,
  },
}));

export default useStyles;
