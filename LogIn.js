import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import "./style.css";


const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="body">
      <h1>Log Into Sharskill</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" /><br></br>
        <input type="password" name="password" placeholder="Password" /><br></br>
        <button className="signin" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;