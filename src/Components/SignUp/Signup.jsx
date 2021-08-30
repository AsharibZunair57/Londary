import React from 'react'
import './signup.css'


function Signup() {
    return (
        <>

        <div className="signup_Container">

            <div className="signup">

                <div className="container">

                    <div className="signup-content">

                        <h2 className="form-title">Sign up</h2>
                        <p className="create-text">
                            Create your Account
                        </p>

                        <form action="" className="register-form" id="registration-form">

                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="Full Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="displayname"><i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="displayname" id="displayname" autoComplete="off" placeholder="Display Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Password" />
                            </div>

                                <button className="btnRegister" >

                                    <span style={{ color: "#fff", fontSize: "16px" }}>
                                        Register
                                    </span>

                                </button>

                                <a className="memberBtn" onClick={e => window.location.href="/login"}>Already a Member</a>



                        </form>

                    </div>
                </div>
            </div>

            </div>

        </>
    )
}

export default Signup
