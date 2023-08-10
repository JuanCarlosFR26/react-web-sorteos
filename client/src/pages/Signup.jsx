import React from "react";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup_form">
      <form className="form_signup">
        <div className="input_container">
          <label htmlFor="name">Nombre</label>
          <input className="name" name="nombre" type="text" id="nombre" />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input className="email" name="email" type="email" id="email" />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input className="password" name="password" type="password" id="password" />
        </div>
        <input type="submit" value={'Registrar'}/>
      </form>
    </div>
  );
};

export default Signup;
