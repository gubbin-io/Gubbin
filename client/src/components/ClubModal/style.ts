import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  modalContent: {
    width: `100vw`,
    height: `90vh`,
    backgroundColor: theme.background,
    borderRadius: theme.radius,
    boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.16), 
                0px 2px 6px rgba(0, 0, 0, 0.08), 
                0px 0px 1px rgba(0, 0, 0, 0.08)`,
    borderWidth: 0,
    overflowY: `hidden`,
  },
  modalDialog: {
    width: `60vw`,
    maxWidth: `none`,
    marginLeft: `20vw`,
    marginRight: `20vw`,
  },
  modalBackdrop: {
    backgroundColor: `rgba(0, 0, 0)`,
    "&.show": {
      opacity: 0.25,
    },
  },
  modalBody: {
    padding: `36px 16px 16px 16px`,
    height: "65%", //Note: change this based on height of header
  },
  "@media screen and (max-width: 1024px)": {
    modalDialog: {
      width: `90vw`,
      maxWidth: `none`,
      marginLeft: `5vw`,
      marginRight: `5vw`,
    },
  },
}));

export default useStyles;
