import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginWithGoogle from "./LoginWithGoogle";
const Signup = () => {
  const Navigate = useNavigate(); // Initialize Navigate

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = {
      name: userData.name,
      email: userData.email,
      password1: userData.password,
    };
    console.log("Form data submitted:", result);
    if (result) {
      alert("User Register Successfully!");
      Navigate("/login");
    } else {
    }
  };
  console.log(localStorage.getItem("myData"));
  const saveObjectToLocalStorage = () => {
    if (localStorage.getItem("myData") == null) {
      localStorage.setItem("myData", JSON.stringify([userData]));
    } else {
      let getData = JSON.parse(localStorage.getItem("myData"));
      localStorage.setItem("myData", JSON.stringify([...getData, userData]));
    }
  };
  useEffect(() => {
    let data = localStorage.getItem('userData')
    if (data) {
        Navigate('/dashboard')
    }
}, [])
  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <form onSubmit={handleSubmit} className="signup">
            <div className="field">
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <button type="submit" onClick={saveObjectToLocalStorage}>
                Signup
              </button>
            </div>
            <h4 className="Or">Or</h4>
            <div className="field btn">
              <div className="btn-layer"></div>
              <button
                onClick={() => {
                  Navigate("/login");
                }}
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="Or">
              <LoginWithGoogle/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
