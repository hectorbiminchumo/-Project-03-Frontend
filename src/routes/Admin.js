import React, {useContext, useEffect, useState} from 'react'

import {Navigate} from 'react-router-dom'

import UserContext from '../context/User/UserContext'


export default function AadminRoute({ component: Component, ...props }) {
    const userCtx = useContext(UserContext)
    
    const { currentUser, verifyingToken } = userCtx
console.log(userCtx);
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        await verifyingToken()
        setLoading(false)

    }, [currentUser.admin])

    console.log(currentUser.admin);
    return (
		<>
			{
				currentUser.admin 
			}
		</>
    )
    
}