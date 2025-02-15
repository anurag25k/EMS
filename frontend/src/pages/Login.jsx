import axios from 'axios'
import React from 'react'
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", { email, password })
            console.log(response);
            if (response.data.success) {
                alert("Successfully login")
            }

        } catch (error) {
            console.log(error);


        }
    }
    return (
        <div className="flex flex-col items-center h-screen justify-center
        bg-gradient-to-b from-teal-600 from-50% to-grey-100 to-50% space-y-6">
            <h1 className='font-extrabold text-3xl text-white'>Workforce Control System</h1>
            <div className='border shadow p-6 w-80 bg-white'>
                <h2 className='text-2xl font-2xl font-bold ml-2="ml-2"'>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-grey-700'>Email</label>
                        <input type="email" placeholder='enter your email' className='w-full px-3 border' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-grey-700'>Password</label>
                        <input type="password" placeholder='*********' className='w-full px-3 border' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label className='inline-flex items-center'>
                            <input className='form-checkbox' type='checkbox' />
                            <span ml-2 text-gray-700 >Remember me</span>
                        </label>
                        <a href='#' className='text-teal-600'>Forgot Password?</a>
                    </div>
                    <div className='mb-4'>                    <button type='submit' className='w-full bg-teal-600 py-2 '>Login</button></div>

                </form>
            </div>
        </div>
    )
}

export default Login