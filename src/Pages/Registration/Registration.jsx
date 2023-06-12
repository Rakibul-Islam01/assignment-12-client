import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';

const Registration = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser, signInWithGoogle } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl)

        if (/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
            // Password is valid
            console.log("Password is valid");
          } else {
            // Password is invalid
            toast("Password is invalid");
            return;
          }

        setError('')
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                handleUpdateUser(result.user, name, photoUrl)
                form.reset()
                setSuccess("User has been created successfully")
            })
            .catch(error => {
                // console.log(error)
            })

        // if (password.length < 6 || /[A-Z]/.test(password) || /[!@#$%^&*]/.test(password)) {
        //     setError('Password should be at least 6 characters')
        //     return;
        // }


       

        const handleUpdateUser = (user, name, photoUrl) => {
            updateProfile(user, {
                displayName: name, photoURL: photoUrl
            })
                .then(() => {
                    console.log('user name and photo updated')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }

    }

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
            <form onSubmit={handleRegister} className='w-full md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 text-start'>
                    <label htmlFor="name">Name:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="text"
                        id="name"

                        name='name'
                        required
                    /><br /><br />
                    <label htmlFor="email">Email:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="email"
                        id="email"

                        name='email'
                        required
                    /><br /><br />

                    <label htmlFor="password">Password:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        type="password"
                        id="password"
                        name='password'
                        required
                    /><br /><br />
                    <label htmlFor="photoUrl">Photo Url:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        type="text"
                        id="photoUrl"
                        name='photoUrl'
                        required
                    /><br /><br />
                    <input className='border login-btn bg-[#00cecb] hover:bg-[#0d807e] transition  text-white py-2 px-4 text-xl rounded mt-5 cursor-pointer' type="submit" value="Register" />
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 w-3/4 mx-auto mt-6 border-gray-300 border-rounded hover:bg-[#0ca09d] transition cursor-pointer'
                >
                    <FaGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                {/* <p className='text-green-700 text-center'>{success}</p> */}
                {/* <p className='text-red-700 text-center'>{error}</p> */}

                <p className='text-center mt-3'>Already Registered? Please <Link className='border-2 rounded px-2 py-1 hover:bg-[#e6e6e6]  border-gray' to="/login">Login</Link> here </p>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;