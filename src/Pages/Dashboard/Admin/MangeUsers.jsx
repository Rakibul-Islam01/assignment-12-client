import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MangeUsers = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-12-server-ecru.vercel.app/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`https://assignment-12-server-ecru.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    toast(`${user.name} is admin now`)
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`https://assignment-12-server-ecru.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    toast(`${user.name} is instructor now`)
                }
            })
    }


    return (

        <div className='w-full my-8'>
            <h2 className='font-bold text-xl mb-10'>The Total Number Of Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead >
                        <tr>

                            <th>#</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex justify-center items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <th>
                                    <div className='flex flex-col gap-2'>
                                        <button onClick={() => { handleMakeAdmin(user) }} className="btn btn-ghost bg-slate-200 btn-xs" disabled={user?.role == 'admin' && true}>Make Admin</button>

                                        <button onClick={() => { handleMakeInstructor(user) }} className="btn bg-slate-200 btn-ghost btn-xs" disabled={user?.role == 'instructor' && true}>Make Instructor</button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MangeUsers;