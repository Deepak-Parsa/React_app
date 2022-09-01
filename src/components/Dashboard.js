import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className='bg-gray-500 w-full h-14'>
                <div className='flex justify-between pt-4'>
                    <h1 className='pl-8 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-200 ' style={{ fontFamily: "Audiowide" }}>MY WEBSITE</h1>
                    <ul className='flex '>
                        <li className='mx-4 text-white cursor-pointer'>Home</li>
                        <li className='mx-4 text-white cursor-pointer'>About</li>
                        <li className='mx-4 text-white cursor-pointer'>Contact</li>
                        <li className='mx-4 text-white cursor-pointer'>Sign In</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Dashboard