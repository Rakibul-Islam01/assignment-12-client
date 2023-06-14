import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {

    const admin = true;
    const instructor = false;
    const student = false;



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
                    <li className='text-start ps-4 mb-4 font-bold '>Admin Dashboard</li>


                    {/* Sidebar content here */}
                    {/* For Admin */}
                    {admin ? <>
                        <li><Link >Manage Classes</Link></li>
                        <li><Link to="dashboard/users">Manage Users</Link></li>
                    </> : instructor ? <>
                        <li><a>Add A Classes</a></li>
                        <li><a>My Classes</a></li>
                        <li><a>Total Enrolled Students</a></li>
                        <li><a>Feedback</a></li>
                    </> : <>
                        <li><a>My Selected Class</a></li>
                        <li><a>My Enrolled Class</a></li>
                    </>}


                    {/* For Instructor */}
                    {/* {instructor && <>
                        <li><a>Add A Classes</a></li>
                        <li><a>My Classes</a></li>
                        <li><a>Total Enrolled Students</a></li>
                        <li><a>Feedback</a></li>
                    </>} */}


                    {/* For Student */}
                    {/* {student && <>
                        <li><a>My Selected Class</a></li>
                        <li><a>My Enrolled Class</a></li>
                    </>} */}


                    <div className="divider"></div>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Instructors</Link></li>
                    <li><Link to="/">Classes</Link></li>

                    <button className='btn bottom-4 w-3/4 absolute bg-gray-300'>LogOut</button>
                </ul>

            </div>
        </div>

    );
};

export default DashboardLayout;