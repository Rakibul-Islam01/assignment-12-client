import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const {data: classes= [], refetch} = useQuery(['classes'], async ()=> {
        const res = await fetch('http://localhost:5000/classes?status=approved')
        return res.json();
    })


    console.log(classes)
    


    return (
        <div>
            <h2>All Classes: {classes.length}</h2>
        </div>
    );
};

export default Classes;