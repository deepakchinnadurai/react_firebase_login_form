import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import "./style.css";


const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/dashboard" />;
  }


  return (
    <div className="body">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" /><br></br>
        <input type="password" name="password" placeholder="Password" /><br></br>
        <button className="signin" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;