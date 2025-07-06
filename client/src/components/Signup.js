import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import LoadingSpinner from "./LoadingSpinner";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SignUp = () => {
  const { handleGoogle, loading, error } = useFetch(
    process.env.REACT_APP_SIGNUP_URL
  );

  useEffect(() => {
    /* global google */
    if (window.google && !loading) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      const signUpDiv = document.getElementById("signUpDiv");
      if (signUpDiv && !signUpDiv.hasChildNodes()) {
        google.accounts.id.renderButton(signUpDiv, {
          theme: "filled_black",
          text: "continue_with",
          shape: "pill",
        });
      }
    }
  }, [handleGoogle, loading]);

  return (
    <>
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
        <h1>REGISTER TO CONTINUE</h1>
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
        {loading ? (
          <LoadingSpinner message="Creating your account..." />
        ) : (
          <div>
            <div id="signUpDiv" data-text="signup_with"></div>
            <br />
            <button
              onClick={() => {
                // Temporary bypass for testing
                const testUser = {
                  firstName: "Demo",
                  lastName: "User",
                  email: "demo@makeyourresume.com",
                  picture: "https://via.placeholder.com/150"
                };
                localStorage.setItem("user", JSON.stringify(testUser));
                window.location.replace("/");
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff5722",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              🚀 Demo Signup (Skip OAuth)
            </button>
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default SignUp;
