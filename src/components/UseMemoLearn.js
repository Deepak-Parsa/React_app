import React, { useState, useMemo } from 'react'
import axios from 'axios'
const UseMemoLearn = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [api, setApi] = useState([])
    console.log(api)

    useMemo(async () => {
        try {
            // console.log("hii memo")
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            // console.log(res)
            setApi(res.data)
        } catch (err) {
            console.log(err)
        }

    }, [])
    return (
        <>

            <div className='ml-8 flex'>
                <div className='bg-yellow-200 p-4 rounded mt-4'>
                    <p className='text-yellow-700'>{count1}</p>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded'
                        onClick={() => {
                            setCount1(count1 + 1)
                            // console.log("count1 clicked")
                        }}
                    >clickMe</button>
                </div>
                <div className='ml-4 bg-gray-600 p-4 rounded mt-4'>
                    <p className='text-red-600'>{count2}</p>
                    <button className='bg-green-500 text-white px-2 py-1 rounded'
                        onClick={() => {
                            setCount2(count2 + 1)
                            // console.log("count 2 clicked")
                        }}
                    >clickMe</button>
                </div>
            </div>
        </>
    )
}

export default UseMemoLearn