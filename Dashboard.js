import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import "./style.css";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="body">
      <h1>Welcome To Sharskill</h1>
      <p>The place where you can share your Knowledge.</p>
      <button className = "signout" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;