import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/LoginRegisterPage.css";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords donot match");
    } else if (password.length < 6) {
      toast.error("Password is too short");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // userCredentials is whatever the createUWEandP returns
          navigate("/");
          toast.success("Successfully registered");
          // const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error.code, error.message);
          toast.error("Error has occured during registration");
        });
    }
  };

  return (
    <div className="lr-outer-div">
      <span className="lr-heading">Register</span>
      <form onSubmit={handleSubmit} className="lr-form">
        <div className="lr-input-div">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="lr-input-div">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="lr-input-div">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="lr-input-div">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="lr-submit-div">
          <button>Submit</button>
        </div>
        <div className="lr-account">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
