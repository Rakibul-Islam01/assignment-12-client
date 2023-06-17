import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';

const PopularClasses = () => {
    const {user} = useContext(AuthContext)

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes?status=approved')
        return res.json();
    })


    return (
        <div className='my-12 font-bold uppercase'>
            <h2 className='text-2xl'>Most Popular Classes</h2>
            <hr className='w-3/12 mx-auto mt-2' />
            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
            {
                classes.slice(0, 6).map((singleClass, index) => <div key={index} className="card xs:p-2 w-full bg-base-100 shadow-xl">
                <figure className="px-8 pt-8">
                  <img src={singleClass.photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body xs:p-2 items-start text-center">
                  <h2 className="card-title font-normal">{singleClass.className}</h2>
                  <p className='font-normal text-start'> <span>Instructor:</span> {singleClass.userName}</p>
                  <p className='font-normal'> <span>Available Seats: </span>{singleClass.availableSeats}</p>
                  <p> <span>Price: </span> ${singleClass.price}</p>
                  <div className="card-actions w-full text-center mx-auto">
                    <button onClick={()=>selectClass()} className="btn w-full bg-[#00cecb] hover:bg-[#13b8b5]">Select</button>
                  </div>
                </div>
              </div>)
            }
            </div>



        </div>
    );
};

export default PopularClasses;