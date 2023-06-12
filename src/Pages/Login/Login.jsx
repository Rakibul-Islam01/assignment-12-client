import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FaBeer, FaEye } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

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
                {/* <p className='text-green-700 text-center'>{success}</p>
                <p className='text-red-700 text-center'>{error}</p> */}
                <p className='text-center mt-3'>Haven't an account? Please <Link className='border-2 rounded px-2 py-1 hover:bg-[#e6e6e6]  border-gray' to="/register">Register</Link> here </p>
            </form>
        </div>
    );
};

export default Login;