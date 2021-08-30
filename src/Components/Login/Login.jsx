import React, { useState } from 'react'
import { Button } from 'antd'
import googleIcon from '../../Images/google-logo.png'
import email from '../../Images/email.png'
import twitter from '../../Images/twitter.png'

import './login.css'




function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="addCoinWrapper">

            <div className="signup">

                <div className="container">

                    <div className="signup-content">

                        <h2 className="form-title">Log In</h2>
                        <p className="create-text">
                            To vote and add coins
                        </p>

                        <form action="" className="register-form" id="registration-form">

                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                
                            </div>

                            <div className="form-group">

                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                            </div>

                            <button className="btnRegister" >

                                <span style={{ color: "#fff", fontSize: "16px" }}>
                                    Login
                                </span>

                            </button>

                            <a className="memberBtn" onClick={e => window.location.href = "/Signup"}>Sign up</a>



                        </form>

                    </div>
                </div>
            </div>


            {/* <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "18px", display: "flex", justifyContent: "center", marginBottom:"0px" }}>Login with</p>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <button className="btnGooglee" style={{marginRight:"10px"}}>

                    <span>
                        <img src={googleIcon} alt="google" className="gIcon" />
                    </span>

                </button>

                <button className="btnGooglee" style={{marginRight:"10px"}}>

                    <span>
                        <img src={email} alt="google" className="eIcon" />
                    </span>

                </button>

                <button className="btntwiter">

                    <span>
                        <img src={twitter} alt="google" className="tIcon" />
                    </span>

                </button>

            </div > */}




        </div>
    )
}

export default Login
