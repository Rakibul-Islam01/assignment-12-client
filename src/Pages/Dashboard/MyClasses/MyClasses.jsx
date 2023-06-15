import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useQuery } from 'react-query';




const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [myClasses, setMyClasses] = useState([])

    let url = `http://localhost:5000/myclasses?userEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyClasses(data)
            })
    }, [url])



    return (
        <div>
            <h2 className='text-2xl text-center font-bold mb-8'>My Classes: {myClasses.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Name</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th className='text-center'>Status</th>
                            <th>Total Enrolled</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myClasses.map((myClass, index) => <tr key={myClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 bg-slate-300 border-slate-600">
                                                <img className='' src={myClass?.photoUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {myClass.className}
                                </td>
                                <td className='text-center'>{myClass?.availableSeats}</td>
                                <td className='text-center'>${myClass?.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{myClass.status}</button>
                                </th>
                                <td></td>
                                <td><button className='btn '>Update</button></td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyClasses;