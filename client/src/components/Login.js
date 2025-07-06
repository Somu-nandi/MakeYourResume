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
    console.log("Login useEffect triggered");
    console.log("window.google:", window.google);
    console.log("GOOGLE_CLIENT_ID:", process.env.REACT_APP_GOOGLE_CLIENT_ID);
    console.log("loading:", loading);

    if (window.google && !loading) {
      console.log("Initializing Google OAuth");
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      const loginDiv = document.getElementById("loginDiv");
      console.log("loginDiv:", loginDiv);
      if (loginDiv && !loginDiv.hasChildNodes()) {
        console.log("Rendering Google button");
        google.accounts.id.renderButton(loginDiv, {
          theme: "filled_black",
          text: "signin_with",
          shape: "pill",
        });
      }
    } else {
      console.log("Google not ready or loading");
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
        {loading ? <LoadingSpinner message="Signing you in..." /> : (
          <div>
            <div id="loginDiv"></div>
            <br />
            <button
              onClick={() => {
                // Temporary bypass for testing
                const testUser = {
                  firstName: "Test",
                  lastName: "User",
                  email: "test@example.com",
                  picture: "https://via.placeholder.com/150"
                };
                localStorage.setItem("user", JSON.stringify(testUser));
                window.location.replace("/");
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4285f4",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              🚀 Demo Login (Skip OAuth)
            </button>
          </div>
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
