import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
    // const [allClasses, setAllClasses] = useState([])

    // let url = 'http://localhost:5000/allclasses'

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setAllClasses(data)
    //         })
    // }, [url])

    const { data: allClasses = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await fetch('http://localhost:5000/allclasses')
        return res.json()
    })

    const handleApprove =(allClass) =>{
        fetch(`http://localhost:5000/allclasses/${allClass?._id}`, {
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

    return (
        <div>
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
                                    <button className="btn bg-slate-200 btn-ghost btn-xs">{allClass.status}</button>
                                </th>
                                <td className='flex flex-col gap-2'>
                                    <button onClick={()=>{handleApprove(allClass)}} className='btn btn-sm w-full'>Approve</button>
                                    <button className='btn btn-sm w-full'>Deny</button>
                                    <button className='btn btn-sm w-full'>Send Feedback</button>
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