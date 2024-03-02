import React, { useState } from 'react';
import '../styles/Logincss.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isSignUpMode, setSignUpMode] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    const handleSignUpClick = () => {
        setSignUpMode(true);
    };

    const handleSignInClick = () => {
        setSignUpMode(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login", {
                username,
                password,
            });

            const { message } = response.data;

            if (message === "Login Successful") {
                console.log("Login done successfully");
                alert("Login Successful");
                navigate("/home");
            } else {
                alert("Login failed");
                console.log(message);
            }
        } catch (error) {
            console.log("Login error", error);
        }
        setusername("");
        setpassword("");
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup", {
                username,
                email,
                phoneNumber,
                password,
            });
            alert("Signed Up Successfully");
            navigate("/home");
        } catch (error) {
            alert("Sign up error");
            console.log("Sign up error", error);
        }
        setemail("");
        setpassword("");
        setusername("");
        setphoneNumber("");
    }
    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                        </div>
                        <input onClick={handleLogin} type="submit" value="Login" className="btn solid" />
                        {/* <p className="social-text">Or Sign in with social platforms</p> */}
                        <div className="social-media">
                            {/* <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-phone"></i>
                            <input type="text" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} placeholder="Phone" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                        </div>
                        <input type="submit" onClick={handleSignup} className="btn" value="Sign up" />
                        {/* <p className="social-text">Or Sign up with social platforms</p> */}
                        <div className="social-media">
                            {/* <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New to our community ?</h3>
                        <p>
                            Let's start new pattern of studying with the help of exciting methods and resources provided by Placement Planner.
                        </p>
                        <button className="btn transparent" onClick={handleSignUpClick}>
                            Sign up
                        </button>
                    </div>
                    <img
                        src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
                        className="image"
                        alt=""
                    />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of Our Valued Members</h3>
                        <p>
                            Thank you for being part of our community. Your presence enriches our
                            shared experiences. Let's continue this journey together!
                        </p>
                        <button className="btn transparent" onClick={handleSignInClick}>
                            Sign in
                        </button>
                    </div>
                    <img
                        src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
                        className="image"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
