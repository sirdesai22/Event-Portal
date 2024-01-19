import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';

const Login = () => {
    const { user } = useParams();
    
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = `/dashboard/${user.toLowerCase()}`
    }


    return (
        <>
            <Navbar />
            <div className='h-screen flex justify-center items-center'>
                <div className='bg-slate-400 p-8 rounded-lg w-2/5'>
                    <h1 className='text-5xl text-center mb-10 font-semibold text-black'>Login as {user}</h1>
                    <form className='flex flex-col gap-2'>
                        <input className='p-2 text-xl rounded-md' type="text" name="" id="email" placeholder='Enter your email' />
                        <input className='p-2 text-xl rounded-md' type="password" name="" id="password" placeholder='Enter your password' />
                        <button className='p-2 text-xl rounded-md bg-blue-500 text-black font-semibold cursor-pointer' onClick={handleClick}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login