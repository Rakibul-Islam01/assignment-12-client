import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl)
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

                {/* <p className='text-green-700 text-center'>{success}</p>
                <p className='text-red-700 text-center'>{error}</p> */}

                <p className='text-center mt-3'>Already Registered? Please <Link className='border-2 rounded px-2 py-1 hover:bg-[#e6e6e6]  border-gray' to="/login">Login</Link> here </p>
            </form>
        </div>
    );
};

export default Registration;