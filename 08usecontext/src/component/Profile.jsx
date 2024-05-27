import React from 'react'
import { useContext } from 'react'
import UseContent from '../context/UseContent'

function Profile() {

    const {user} = useContext(UseContent)
    if(!user) return <h4>Please login</h4>
    return <h4>Welcome {user}</h4>
}

export default Profile
