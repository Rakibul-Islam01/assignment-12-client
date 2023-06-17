import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://assignment-12-server-ecru.vercel.app/classes?status=approved')
        return res.json();
    })


    // console.log(classes)



    return (
        <div className='my-12'>
            <h2 className='font-semibild text-center text-3xl mb-8'>Total Number Of Classes: {classes.length}</h2>
            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
            {
                classes.map((singleClass, index) => <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-8 pt-8">
                  <img src={singleClass.photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-center">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <p> <span>Instructor:</span> {singleClass.userName}</p>
                  <p> <span>Available Seats: </span>{singleClass.availableSeats}</p>
                  <p> <span>Price: </span> ${singleClass.price}</p>
                  <div className="card-actions w-full text-center mx-auto">
                    <button className="btn w-full bg-[#00cecb] hover:bg-[#13b8b5]">Select</button>
                  </div>
                </div>
              </div>)
            }
            </div>

            


        </div>
    );
};

export default Classes;