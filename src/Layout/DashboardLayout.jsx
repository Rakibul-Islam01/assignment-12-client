import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const DashboardLayout = () => {
    const {user, loading, logOut} = useContext(AuthContext)
    const {allClasses, setAllClasses} = useState([])
    const navigate = useNavigate()

    const { data: loggeduser = [], refetch } = useQuery(['loggeduser'], async () => {
        const res = await fetch(`http://localhost:5000/users?email=${user?.email}`)
        return res.json()
    })

    if(loading){
        <span className="loading loading-bars loading-lg"></span>
    }
    console.log(loggeduser[0]?.role)



 

    const handleLogOut = () =>{
        logOut()
        .then(result=>{
            toast("LogOut Successfull")
        })
        .catch(err=>{})
    }


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 uppercase font-semibold w-80 h-full bg-base-200 text-base-content">

                    <div>
                        <h2 className='text-xl font-bold text-cyan-600 mb-8'>DRAW VERSE</h2>
                    </div>


                    {/* Sidebar content here */}
                    {/* For Admin */}
                    {loggeduser[0]?.role === 'admin' ? <>
                        <li className='text-start ps-4 mb-4 font-bold '>Admin Dashboard</li>
                        <div className='text-center mb-2 ms-4'>
                            <img className='w-20 h-20 rounded' src={loggeduser[0]?.image} alt="" />
                        </div>
                        <p className='capitalize mb-1 text-start ms-4'>{loggeduser[0]?.name}</p>
                        <p className='lowercase mb-4 text-start ms-4'>{loggeduser[0]?.email}</p>
                        <hr />
                        <li><Link to="dashboard/manage-classes">Manage Classes</Link></li>
                        <li><Link to="dashboard/users">Manage Users</Link></li>
                    </> : loggeduser[0]?.role === 'instructor' ? <>
                    <li className='text-start ps-4 mb-4 font-bold '>Instructor Dashboard</li>
                        <li><Link to="dashboard/add-a-class">Add A Class</Link></li>
                        <li><Link to="dashboard/my-classes">My Classes</Link></li>
                        <li><a>Total Enrolled Students</a></li>
                        <li><a>Feedback</a></li>
                    </> : <>
                    <li className='text-start ps-4 mb-4 font-bold '>Student Dashboard</li>
                        <li><a>My Selected Class</a></li>
                        <li><a>My Enrolled Class</a></li>
                    </>}


                    <div className="divider"></div>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                    <li><Link to="/classes">Classes</Link></li>

                    <button onClick={handleLogOut} className='btn bottom-4 w-3/4 absolute bg-gray-300'>LogOut</button>
                </ul>

            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default DashboardLayout;