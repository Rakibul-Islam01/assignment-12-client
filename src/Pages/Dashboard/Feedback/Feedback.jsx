import React from 'react';
import { useForm } from 'react-hook-form';

const Feedback = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='my-10'>
            <h2 className='text-xl font-semibold mb-6'>Feedback Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-3/4 mx-auto'>
                <div>
                    <textarea className='w-full border-gray-500 border-2  p-4 rounded' {...register('message')} id="" cols="30" rows="10" placeholder='Type your Feedback...'></textarea>
                </div>

                <div className='text-center md:text-end'>
                    <button className='btn w-32 bg-slate-300 text-start mt-4' type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;