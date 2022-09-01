import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className='bg-gray-500 w-full h-14'>
                <div className='flex justify-between pt-4'>
                    <h1 className='pl-8 text-white text-2xl'>MY WEBSITE</h1>
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