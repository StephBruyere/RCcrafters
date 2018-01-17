import React from "react";
import "./register.css";

const Register = () =>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">   
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Register your account</h4>
          <div className="modalDesc"> Use the form below to register your account.</div>
        </div>
        <div className="modal-body">
        <form className="form" id="formLogin"> 
        <ul className="navbar-text registerContainer">
        <li className="regInput">Email<input className="register" id="Email" type="text" placeholder="email" required/></li> 
        <li className="regInput">Username<input className="register" id="Username" type="text" placeholder="username" required/></li> 
   <li className="regInput">Password<input className="register" id="Password" type="text" placeholder="password" required/></li> 
        </ul>
        <div className="login-register-desc">Already have an account?<button type="button" className=" register-color formLogin" data-toggle="modal" data-target="#myModal">Login Here!</button></div>
        <div className="modal-footer">
        <button type="button" id="btnLogin" className="btn">Submit</button>
        <button type="button" id="btnClose" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        </form>
        </div>

      </div>  
    </div>
  </div>

  export default Register;