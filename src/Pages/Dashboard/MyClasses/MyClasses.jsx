import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useQuery } from 'react-query';




const MyClasses = () => {

    const {user} = useContext(AuthContext)
    const [myClasses, setMyClasses] = useState([])

    let url = `http://localhost:5000/myclasses?userEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [url])



    return (
        <div>
            <h2>My Classes: {myClasses.length}</h2>

        </div>
    );
};

export default MyClasses;