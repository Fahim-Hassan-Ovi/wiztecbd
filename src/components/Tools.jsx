import React, { useEffect } from 'react'
import { FaArrowRight, FaNetworkWired } from 'react-icons/fa'
import { SiGoogleanalytics } from "react-icons/si";
import { MdLibraryBooks, MdPayment } from "react-icons/md";
import { SlEnvolopeLetter } from 'react-icons/sl';
import { RiContactsBookLine } from 'react-icons/ri';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsBuildings } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Tools = () => {
    useEffect(() => {
         AOS.init({
                    duration: 2000, 
                    once: true, 
                });
    }, []);
    return (
        <div className='bg-[#FDF6E8]'>
            <div className='flex flex-col justify-center items-center gap-4 py-10'>
                <button className='btn bg-transparent bg-linear-to-r from-[#cfc9bb] to-[#fdf8ee] rounded-full'>ESSENTIAL TOOLS</button>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl md:text-6xl text-black font-bold'>Essential Tools</h1>
                    <h1 className='text-3xl md:text-6xl text-black font-bold'>Zero Distraction</h1>
                </div>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <p className='text-gray-700 text-xl'>Creative diverse products on the platform and leverage our</p>
                    <p className='text-gray-700 text-xl'>powerful tools to drive sales within and beyond GrowHubs</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Payments</h1>
                            <MdPayment className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Responsibility sourced and eco-friendly fabrics for a better tomorrow.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Analytics</h1>
                            <SiGoogleanalytics className='w-12 h-10' />
                        </div>
                        <h5 className='text-gray-500'>Understand your growth with smart, built-in analytics.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Newsletters</h1>
                            <SlEnvolopeLetter className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Build Your audiencs with engaging, branded newsletter.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Pages</h1>
                            <MdLibraryBooks className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Showcase your expertise with a personal profile that sells for you.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Contact</h1>
                            <RiContactsBookLine className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Organize your contacts and turn them into your most valuable asset.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Emails</h1>
                            <HiOutlineMailOpen className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Showcase your expertise with a personal profile that sells for you.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 bg-white rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold text-gray-600'>Co-sell network</h1>
                            <FaNetworkWired className='w-12 h-12' />
                        </div>
                        <h5 className='text-gray-500'>Collaborate with others to sell more without ad spend or extra effort.</h5>
                        <div className='flex items-center gap-2 text-yellow-600 hover:cursor-pointer'>
                            <h4>Learn more</h4>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col gap-7 p-5 rounded-2xl md:col-span-2 bg-linear-to-r from-[#2e3631] to-[#915a12]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold bg-linear-to-r from-yellow-700 via-yellow-300 to-yellow-700 bg-clip-text text-transparent'>Enterprise plan</h1>
                            <BsBuildings className='w-12 h-12' />
                        </div>
                        <h5 className='text-white'>Full white platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability</h5>
                        <div className='flex items-center gap-2  hover:cursor-pointer'>
                            <h4 className='bg-linear-to-r from-yellow-700 via-yellow-300 to-yellow-700 bg-clip-text text-transparent'>Learn more</h4>
                            <FaArrowRight className='text-yellow-600' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}    
