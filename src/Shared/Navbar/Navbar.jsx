import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut =()=>{
        logOut()
        .then(result=>{})
        .catch(err=>{})
    }


    return (
        <div>
            <div className="navbar bg-[#00cecb]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/instructors">Instructors</Link></li>
                            <li><Link to="/classes">Classes</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost uppercase font-bold text-xl">DrawVerse</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/instructors">Instructors</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link className='md:mr-2' to="/dashboard">Dashboard</Link> 
                    {
                        user ? <>
                            <button onClick={handleLogOut} className='btn btn-sm mr-2'>LogOut</button> <img className='h-12 w-12 rounded-full cursor-pointer' src={user.photoURL} alt="" height={60} width={60} title={user?.displayName} />
                        </> : <button className='btn btn-sm border-none hover:bg-[#13b8b5]'>
                            <Link to="/login">Login</Link>
                        </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;