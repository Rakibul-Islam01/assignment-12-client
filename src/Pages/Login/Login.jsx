import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaBeer, FaEye, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveUser } from '../../api/auth';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)

    const from = location?.state?.from?.pathname || '/'

 
    const onSubmit = (data) => {
        // console.log(data); 
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast("Login Successfull")
                reset()
                navigate(from, {replace: true})
                // saveUser(result.user)
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
                saveUser(result.user)
                // navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full text-start md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 '>
                    <label className='' htmlFor="email">Email:</label> <br />
                    <input {...register('email', { required: 'Email is required' })} className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="email"
                        id="email"
                        name='email'
                        required
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <br /><br />

                    <label htmlFor="password">Password:</label> <br />
                    <div className='relative'>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: passwordRegex,
                                    message:
                                        'Password must contain at least 6 characters, one uppercase letter, and one special character',
                                },
                            })}
                            className='py-2 mt-2 px-3 width-res shadow'
                            type="password"
                            id="password"
                            name='password'
                            required
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <button className='border login-btn bg-[#00cecb] hover:bg-[#0d807e] transition  text-white py-2 px-4 text-xl rounded mt-5 cursor-pointer' type="submit">Login</button>
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