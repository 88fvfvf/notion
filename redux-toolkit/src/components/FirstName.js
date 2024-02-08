import React from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {
    const selector = useSelector((state) => state.user.firstName)
    return <div className='font-bold'>{selector}</div>
}

export default FirstName
