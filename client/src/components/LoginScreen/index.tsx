import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET_CURRENT_USER, LOG_IN } from "../../constants/queries";
import { client } from "../../constants/routes";
import LoadingScreen from "../LoadingScreen";
import useStyles from "./style";

export interface ComponentProp {}

const LoginScreen: React.FC<ComponentProp> = () => {
  const classes = useStyles();
  const [doLogIn] = useMutation(LOG_IN);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingScreen />;

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
            onSubmit={async (e: any) => {
              e.preventDefault();
              try {
                const ret = await doLogIn({
                  variables: {
                    userName: username,
                    password: password,
                  },
                });
                const token = ret.data.login.token as string;
                const storage = remember ? localStorage : sessionStorage;
                if (token) storage.setItem("token", token);

                client.query({ query: GET_CURRENT_USER });
                setLoading(true);
              } catch (error) {
                setError(error);
              }
            }}
          >
            {error && (
              <span style={{ color: "red" }}>
                Something went wrong, please try again.
              </span>
            )}
            <Form.Group controlId="formBasicEmail">
              <Form.Label className={classes.label}>Username</Form.Label>
              <Form.Control
                className={classes.field}
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className={classes.label}>Password</Form.Label>
              <Form.Control
                className={classes.field}
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={remember}
                onChange={(e) => {
                  setRemember(e.target.checked);
                }}
              />
            </Form.Group>
            <Button className={classes.submitButton} type="submit">
              Log In
            </Button>
          </Form>
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
