import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    // const {user} = useContext(AuthContext)
    // console.log(user)

    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await fetch(`http://localhost:5000/instructor?role=instructor`)
        return res.json()
    })

    return (
        <div className='my-12'>
            <h2 className='text-center text-3xl font-semibold mb-7'>Total Number Instructors: {instructors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className='font-bold text-lg'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            instructors.map((instructor, index) => <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <div className="flex justify-center items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className='text-center' src={instructor?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                            </tr>)
                        }
            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;