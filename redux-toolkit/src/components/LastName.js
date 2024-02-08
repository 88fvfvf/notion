import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
    const selector = useSelector((state) => state.user.lastName)
    return <div className='font-bold'>{selector}</div>
}

export default LastName
