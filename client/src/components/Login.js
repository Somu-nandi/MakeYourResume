import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NavBar from "./NavBar";
import LoadingSpinner from "./LoadingSpinner";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    process.env.REACT_APP_LOGIN_URL
  );

  useEffect(() => {
    /* global google */
    if (window.google && !loading) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      const loginDiv = document.getElementById("loginDiv");
      if (loginDiv && !loginDiv.hasChildNodes()) {
        google.accounts.id.renderButton(loginDiv, {
          theme: "filled_black",
          text: "signin_with",
          shape: "pill",
        });
      }
    }
  }, [handleGoogle, loading]);

  return (
    <div>
      <NavBar></NavBar>
      <br/>
      <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
          <ArrowBackIcon style={{marginRight:"5px"}}/> Back
        </Button>
      <br/>
      <br/>

      <header style={{ textAlign: "center" }}>
        <h1>LOGIN TO CONTINUE</h1>
      </header>
      <br/>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <LoadingSpinner message="Signing you in..." /> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
