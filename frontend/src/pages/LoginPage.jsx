import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/LoginRegisterPage.css"
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        toast.success("Successfully signed in");
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error("Invalid credentials")
      });
  };
  return (
    <div className="lr-outer-div">
      <span className="lr-heading">Login</span>
      <form onSubmit={handleSubmit} className="lr-form">
        <div className="lr-input-div">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="lr-input-div">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter password"
          />
        </div>
        <div className="lr-submit-div">
          <button>Submit</button>
        </div>
        <div className="lr-account">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
