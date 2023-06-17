import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
   

    const { data: allClasses = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await fetch('https://assignment-12-server-ecru.vercel.app/allclasses')
        return res.json()
    })

    

    const handleApprove =(allClass) =>{
        fetch(`https://assignment-12-server-ecru.vercel.app/allclasses/${allClass?._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if(data.modifiedCount){
                toast('Class Approved successfull')
            }
        })
    }

    const handleDeny =(allClass) =>{
        fetch(`https://assignment-12-server-ecru.vercel.app/allclasses/deny/${allClass?._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if(data.modifiedCount){
                toast('Class Denied successfull')
            }
        })
    }

    return (
        <div className='my-8'>
            <h2 className='text-2xl text-center font-bold mb-8'>All the classes posted by the Instructors</h2>

            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                    <thead >
                        <tr className='font-bold'>
                            <th>No.</th>
                            <th>Class Image</th>
                            <th>Course Name</th>
                            <th>Instructor name</th>
                            <th>Instructor Email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allClasses.map((allClass, index) => <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 bg-slate-300 border-slate-600">
                                                <img className='' src={allClass?.photoUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {allClass.className}
                                </td>
                                <td className='text-center'>{allClass?.userName}</td>
                                <td className='text-center'>{allClass?.userEmail}</td>
                                <td className='text-center'>{allClass?.availableSeats}</td>
                                <td className='text-center'>${allClass?.price}</td>
                                
                                <th>
                                    <p className="btn bg-slate-200 btn-ghost btn-xs cursor-not-allowed">{allClass.status}</p>
                                </th>
                                <td className='flex flex-col gap-2'>
                                    <button onClick={()=>{handleApprove(allClass)}} className='btn btn-sm w-full' disabled={allClass.status == 'approved' || allClass.status == 'denied' && true}>Approve</button>
                                    <button onClick={()=>handleDeny(allClass)} className='btn btn-sm w-full' disabled={allClass.status == 'denied' && true}>Deny</button>
                                    <Link to="/feedback">
                                    <button className='btn btn-sm w-full'>Send Feedback</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageClasses;