import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
                    {/* Sidebar content here */}
                    {/* For Admin */}
                    <li><a>Manage Classes</a></li>
                    <li><a>Manage Users</a></li>

                    {/* For Instructor */}
                    <li><a>Add A Classes</a></li>
                    <li><a>My Classes</a></li>
                    <li><a>Total Enrolled Students</a></li>
                    <li><a>Feedback</a></li>

                    {/* For Student */}
                    <li><a>My Selected Class</a></li>
                    <li><a>My Enrolled Class</a></li>

                    <div className="divider"></div>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Instructors</Link></li>
                    <li><Link to="/">Classes</Link></li>
                </ul>

            </div>
        </div>

    );
};

export default DashboardLayout;