import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { saveUser } from '../../api/auth';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { createUser, signInWithGoogle } = useContext(AuthContext);


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                handleUpdateUser(result.user, name, photoUrl)
                toast("Registration Successfull")
                reset()
                saveUser(result.user)
            })
            .catch(error => {
                toast(error.message)
            })

        const handleUpdateUser = (user, name, photoUrl) => {
            updateProfile(user, {
                displayName: data.name, photoURL: data.photoUrl
            })
                .then(() => {
                    console.log('user name and photo updated')
                    saveUser(user)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    };

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
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 text-start'>
                    <label htmlFor="name">Name:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        name='name'
                        required
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                    <br /><br />
                    <label htmlFor="email">Email:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        type="email"
                        id="email"
                        name='email'
                        required
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <br /><br />

                    <label htmlFor="password">Password:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: passwordRegex,
                                message:
                                    'Password must contain at least 6 characters, one uppercase letter, and one special character',
                            },
                        })}
                        type="password"
                        id="password"
                        name='password'
                        required
                    />
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    <br /><br />
                    <label htmlFor="photoUrl">Photo Url:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        {...register('photoUrl')}
                        type="text"
                        id="photoUrl"
                        name='photoUrl'
                        required
                    /><br /><br />
                    <button className='border login-btn bg-[#00cecb] hover:bg-[#0d807e] transition  text-white py-2 px-4 text-xl rounded mt-5 cursor-pointer' type="submit">Register</button>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 w-3/4 mx-auto mt-6 border-gray-300 border-rounded hover:bg-[#0ca09d] transition cursor-pointer'
                >
                    <FaGoogle size={32} />

                    <p>Continue with Google</p>
                </div>

                <p className='text-center mt-3'>Already Registered? Please <Link className='border-2 rounded px-2 py-1 hover:bg-[#e6e6e6]  border-gray' to="/login">Login</Link> here </p>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;