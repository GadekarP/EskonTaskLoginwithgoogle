import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const LoginWithGoogle = () => {
    const Navigate = useNavigate()
  const apiKey = "AIzaSyDd2mcgCCLJ6__zAMznUWfUEpVfwk2I7rc";
  const clientId =
    "566141256536-04bp964ghrn7pem34rhnund92tijqgc1.apps.googleusercontent.com";
  const handleLogin = async (credentialResponse) => {
    var obj = jwtDecode(credentialResponse.credential);
    var data = JSON.stringify(obj);
    var data1 = JSON.parse(data);
      if (data1.email_verified==true) {
        localStorage.setItem("userData",JSON.stringify({name:data1.name,email:data1.email,picture:data1.picture}));
        Navigate("/dashboard")
      } else {
        
      }
  };
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={handleLogin} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginWithGoogle;
