import React, { useState } from 'react'
import egypt from '../assets/egypt.jpg'
import google from '../assets/google.webp'
import apple from '../assets/apple.png'
import phone from '../assets/phone.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const Signin = () => {

    const [showForm, setShowForm] = useState(false); // for email/phone form
    const [showPassword, setShowPassword] = useState(false); // for eye toggle

    return (
        <div className='grid md:grid-cols-2 gap-10 p-10'>

            {/* LEFT SIDE */}
            <div className='p-5 flex flex-col gap-5 justify-center items-center'>

                {/* LOGO */}
                <div className="flex justify-center items-center gap-2">
                    <img className="h-7 w-7" src="/src/assets/logo.png" alt="logo" />
                    <span className="text-xl font-bold text-[#810e53]">WiztecBD</span>
                </div>

                <h3 className='text-3xl font-bold'>Create New Account</h3>
                <h3 className='text-xl'>Let's login to grab amazing deal</h3>

                {/* GOOGLE */}
                <button className='btn w-full lg:w-2/3 bg-transparent p-5'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={google} className='w-6 h-6' alt="" />
                        <span className='text-base md:text-xl text-gray-500'>
                            Continue with Google
                        </span>
                    </div>
                </button>

                {/* APPLE */}
                <button className='btn w-full lg:w-2/3 bg-transparent p-5'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={apple} className='w-6 h-6' alt="" />
                        <span className='text-base md:text-xl text-gray-500'>
                            Continue with Apple
                        </span>
                    </div>
                </button>

                {/* EMAIL/PHONE → SHOW FORM */}
                {!showForm && (
                    <button
                        className='btn w-full lg:w-2/3 bg-transparent p-5'
                        onClick={() => setShowForm(true)}
                    >
                        <div className='flex justify-center items-center gap-2'>
                            <img src={phone} className='w-6 h-6' alt="" />
                            <span className='text-base md:text-xl text-gray-500'>
                                Continue with Email/Phone
                            </span>
                        </div>
                    </button>
                )}

                {/* Email & Password FORM */}
                {showForm && (
                    <fieldset className="fieldset bg-transparent w-full lg:w-2/3">

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                        />

                        <label className="label">Password</label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* REMEMBER ME + FORGOT PASSWORD */}
                        <div className="flex justify-between items-center mt-2 text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-sm" />
                                Remember me
                            </label>

                            <button className="text-black hover:underline">
                                <u>Forgot Password?</u>
                            </button>
                        </div>

                        {/* LOGIN BUTTON */}
                        <button className="btn btn-neutral bg-[#991665] hover:bg-[#dda2c5] mt-4">
                            Login
                        </button>
                    </fieldset>
                )}

                <h3 className='text-xl'>
                    Don't have an account? <span className='text-[#991665]'>Sign Up</span>
                </h3>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className='relative rounded-[120px_0px_120px_40px] overflow-hidden'>
                <img className='w-full h-full object-cover rounded-2xl' src={egypt} alt="" />
                <h3 className='absolute top-4 right-8 text-white text-sm font-medium w-1/2'>
                    Browse thousands of properties to buy, sell or rent with trusted agents
                </h3>
            </div>
        </div>
    )
}
