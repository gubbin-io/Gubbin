import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  sidebar: {
    width: `100%`,
    height: `100%`,
  },
  sidebarContainer: {
    padding: `20px 20px`,
    height: `calc(100vh - 53px)`,
    overflow: `hidden`,
    background: theme.primary,
    borderRight: `1px solid ${theme.separator}`,
  },
}));

export default useStyles;
