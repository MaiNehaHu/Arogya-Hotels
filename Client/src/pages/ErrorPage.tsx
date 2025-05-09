// import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="p-4 rounded-2xl text-center">
                <h1 className="text-lg mb-4">404 Page Not Found</h1>

                <Link to="/">
                    <button className='bg-gray-300 px-6 py-2 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white transition-colors'>Let's Get Back to Save Page</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage