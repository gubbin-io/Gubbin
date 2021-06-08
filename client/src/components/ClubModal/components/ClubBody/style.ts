import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  contentColumn: {
    overflowX: `hidden`,
    overflowY: `scroll`,
    height: "100%",
  },
  contentTab: {
    marginRight: "8px",
    marginLeft: "8px",
  },
}));

export default useStyles;
