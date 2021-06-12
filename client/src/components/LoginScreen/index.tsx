import React from "react";
import useStyles from "./style";

export interface ComponentProp {}

const LoginScreen: React.FC<ComponentProp> = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <img
            src="https://github.com/aaronpenne/generative_art/raw/master/sinful/images/sinful_x_rando.png"
            alt="white lines"
            className={classes.coverImage}
          />
        </div>
        <div className={classes.right}>
          <div className={classes.login}>
            <img
              src="/brand-icon.svg"
              alt="Gubbin Logo"
              className={classes.brandIcon}
            />
            <span className={classes.brandText}>Gubbin</span>
            <span className={classes.brandTagline}>
              {`Discover Clubs & Societes`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
