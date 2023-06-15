import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddAClass = () => {

    const {user} = useContext(AuthContext)
    // console.log(user)

    const handleAddClass = event =>{
        event.preventDefault()

        const form = event.target;

        const className = form.className.value;
        const photoUrl = form.photoUrl.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;

        const status = 'pending'
        console.log(status)
   
    }


    return (
        <div>
            <h2 className='text-2xl uppercase font-bold text-center mb-5'>Add a class</h2>
            <form onSubmit={handleAddClass} className='border-gray-800 bg-gray-100 p-3 md:p-8'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name:</span>
                        </label>
                        <input type="text" placeholder="class name" name='className' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image Url:</span>
                        </label>
                        <input type="text" placeholder="paste the url here" name='photoUrl' className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Name:</span>
                        </label>
                        <input value={user?.displayName} name='userName' type="text"  className="input input-bordered w-full max-w-xs" readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Email:</span>
                        </label>
                        <input value={user?.email} type="text" placeholder="instructor email" name='userEmail' className="input input-bordered w-full max-w-xs" readOnly/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats:</span>
                        </label>
                        <input type="text" placeholder="Type number" name='availableSeats' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input type="text" placeholder="$" name='price' className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <input className='btn bg-gray-300 w-full mt-8' type="submit" value="ADD CLASS" />
            </form>
        </div>
    );
};

export default AddAClass;