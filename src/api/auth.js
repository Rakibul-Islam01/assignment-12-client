import { json } from "react-router-dom"

// save a user to database
export const saveUser = user => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        role: "student"
    }

    console.log(currentUser)

    fetch(`https://assignment-12-server-ecru.vercel.app/users/${user?.email}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}