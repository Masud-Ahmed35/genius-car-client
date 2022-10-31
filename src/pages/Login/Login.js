import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-700 py-10 border">
                    <h1 className="text-5xl text-center font-bold mb-3 text-orange-600">Login</h1>
                    <from onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="********" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success text-slate-900 normal-case text-lg font-semibold" type="submit" value="Login" />
                        </div>
                    </from>
                    <p className='text-center text-lg'>Have an account? <Link to='/signup' className='text-orange-600 font-semibold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;