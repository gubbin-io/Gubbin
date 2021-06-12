import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStyles from "./style";

export interface ComponentProp {}

const LoginScreen: React.FC<ComponentProp> = () => {
  const classes = useStyles();

  return (
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
          <Form
            className={classes.form}
            onSubmit={(e: any) => {
              e.preventDefault();
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label className={classes.label}>Email</Form.Label>
              <Form.Control
                className={classes.field}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className={classes.label}>Password</Form.Label>
              <Form.Control
                className={classes.field}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className={classes.submitButton} type="submit">
              Log In
            </Button>
          </Form>
          <Link className={classes.link} to="/resetpassword">
            Forgot Password?
          </Link>
          <span className={classes.miscText}>
            Don't have an account?{" "}
            <Link className={classes.link} to="/signup">
              Sign Up!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
