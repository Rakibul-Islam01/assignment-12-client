import { useQuery } from '@tanstack/react-query';
import React from 'react';

const PopularInstructor = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes?status=approved')
        return res.json();
    })

    console.log(classes)



    return (
        <div className='my-14 mt-20'>
            <h2 className='font-bold text-2xl uppercase'>Our Popular Instructors</h2>
            <hr className='w-3/12 mx-auto mt-2 mb-8' />

            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
                {
                    
                    classes.slice(0, 6).map((instructor, index) => <div key={index} className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={instructor.photoUrl} alt="Shoes" /></figure>
                        <div className="card-body text-white opacity-100 flex flex-col items-center justify-center">
                            <h2 className="card-title text-center mx-auto">Instructor: {instructor.userName}</h2>
                            <h2>Email: {instructor.userEmail}</h2>
                            <p>Course: {instructor.className}</p>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default PopularInstructor;