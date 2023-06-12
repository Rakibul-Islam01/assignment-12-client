import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FaBeer, FaEye, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Email:', email);
        console.log('Password:', password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast("Login Successfull")
            })
            .catch(err => {
                toast('Wrong Password')
            })
    };

    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                // saveUser(result.user)
                // navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='w-full text-start md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 '>
                    <label className='' htmlFor="email">Email:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="email"
                        id="email"
                        name='email'
                        required
                    /><br /><br />

                    <label htmlFor="password">Password:</label> <br />
                    <div className='relative'>
                        <input
                            className='py-2 mt-2 px-3 width-res shadow'
                            type="password"
                            id="password"
                            name='password'
                            required
                        />
                        {/* <FaEye className='absolute right-12 text-lg bottom-3'></FaEye> */}
                    </div>
                    <input className='border login-btn bg-[#00cecb] hover:bg-[#0d807e] transition  text-white py-2 px-4 text-xl rounded mt-5 cursor-pointer' type="submit" value="Login" />
                </div>
                
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 w-3/4 mx-auto mt-6 border-gray-300 border-rounded hover:bg-[#0ca09d] transition cursor-pointer'
                >
                    <FaGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='text-center mt-6'>Haven't an account? Please <Link className='border-2 rounded px-2 py-1 hover:bg-[#e6e6e6]  border-gray' to="/register">Register</Link> here </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;