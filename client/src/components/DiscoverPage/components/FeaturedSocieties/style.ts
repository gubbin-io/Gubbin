import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  image: {
    objectFit: "cover",

    width: `100%`,
    height: `100%`,
    flex: "0 0 100%",

    gridColumnStart: 1,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 4,

    borderRadius: theme.radius,
    zIndex: 0,
    filter: "saturate(1.7)",
  },
  overlay: {
    background:
      "-webkit-linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 100%)",

    gridColumnStart: 1,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 4,

    borderRadius: theme.radius,
    zIndex: 1,
  },
  container: {
    paddingBottom: "8px",
    borderBottom: `1px solid ${theme.separator}`,
  },
  carousel: {
    width: "100%",
    height: "288px",
    margin: 0,

    display: "flex",
    flexWrap: "nowrap",

    scrollbarWidth: "thin",
    scrollbarColor: `${theme.background} ${theme.background}`,

    overflowY: "hidden",
    overflowX: "auto",
    //     marginRight: "-10px",
    //     marginLeft: "-10px",

    "&::-webkit-scrollbar": { width: "1rem", height: "0.5rem" },
    "&::-webkit-scrollbar-track": {
      background: `${theme.background}`,
      //       marginLeft: "10px",
      //       marginRight: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.background}`,
      borderRadius: theme.radius,
    },
    "&:hover": {
      scrollbarColor: `${theme.separator} ${theme.background}`,
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.separator}`,
    },
    "& > :last-child": {
      padding: 0,
    },
  },
  carouselItem: {
    borderRadius: theme.radius,
    padding: "0px 16px 0px 0px",
  },
  featureCard: {
    display: "grid",
    height: "98%",
    gridTemplate: `
      ".    .    ." 16px
      ". details ." 64px 
      ".    .    ." 1fr
      / 16px 1fr 16px
      `,
  },
  clubDetails: {
    gridArea: "details",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
  clubName: {
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "30px",
    marginBottom: "8px",
    color: theme.invertText,
  },
  clubTagline: {
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: theme.invertText,
  },
}));

export default useStyles;
