import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <>
        <h1 className='m-6 p-6 bg-black text-white rounded text-xl'>User: {userid}</h1>
        </>
    )
}

export default User
