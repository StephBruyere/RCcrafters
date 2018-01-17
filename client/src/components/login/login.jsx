import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { register } from "../../components/register";

const Login = () =>
<div className="container login">
<div className="nav">
<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
<span className="sr-only">Toggle navigation</span>
<span className="icon-bar loginBtn"><button type="button" className="btn">Login</button></span>
</button> 
</div>
<div id="navbar2" className="navbar-collapse collapse">
<ul className="nav navbar-nav navbar-right">
<div className="modal fade" id="myModal4" role="dialog">
<div className="modal-dialog">   
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Rccrafter User Login</h4>
      <div className="modalDesc"> Use the form below to log in to Rccrafters' account using the username and password associated with your account. 
    </div>
    </div>
    <div className="modal-body">
    <form className="form" id="formLogin"> 
      <ul className="navbar-text registerContainer">
        <li className="regInput2">Username<input className="register2" id="username" type="text" placeholder="username" required/></li> 
        <li className="regInput2">Password<input className="register2" id="password" type="text" placeholder="password" required/></li> 
      </ul>
    <div className="login-register-desc">Don't have an account?<button type="button" className=" register-color formLogin" data-toggle="modal" data-target="#myModal">Sign Up Here!</button></div>
    <div className="modal-footer"> 
    <button type="button" id="btnLogin" className="btn">Submit</button>
    <button type="button" id="btnClose" className="btn btn-default" data-dismiss="modal">Close</button>
    </div>
    </form>
    </div>

  </div>  
</div>
</div>
    {/* Trigger the modal with a button */}
    <button type="button" className="formLogin" data-toggle="modal" data-target="#myModal4">LOGIN</button>
      <li className="loginItems"><a href="#"><img className= "cartIcon" src = "./assets/imgs/cart.png"/>CART</a></li>     
    </ul> 
    </div>
    </div>

export default Login;