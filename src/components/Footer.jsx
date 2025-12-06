import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FaInstagram, FaThreads, FaXTwitter } from 'react-icons/fa6'

export const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-[#251621] to-[#42233A] text-white p-10 rounded-t-2xl ">
            <div className="footer sm:footer-horizontal w-full">
            <nav>
                <h6 className="footer-title text-white font-bold">About Us</h6>
                <a className="link link-hover">Resources</a>
                <a className="link link-hover">Company</a>
                <a className="link link-hover">Property</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white font-bold">Contact Us</h6>
                <a className="link link-hover">hello abc@gmail.com</a>
                <a className="link link-hover">+012233455667</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white font-bold">Social</h6>
                <div className='flex flex-col gap-5 md:gap-15'>
                    <div className="grid grid-cols-2 md:grid-flow-col gap-3">
                        <button className='btn rounded-full h-8 w-8 bg-transparent border-white text-white'><a className="link link-hover"><FaFacebookF /></a></button>
                        <button className='btn rounded-full h-8 w-8 bg-transparent border-white text-white'><a className="link link-hover"><FaXTwitter /></a></button>
                        <button className='btn rounded-full h-8 w-8 bg-transparent border-white text-white'><a className="link link-hover"><FaInstagram /></a></button>
                        <button className=' text-white'><a className="link link-hover"><FaWhatsapp className='h-8 w-8' /></a></button>
                        <button className='btn rounded-full h-8 w-8 bg-transparent border-white text-white'><a className="link link-hover"><FaThreads /></a></button>
                        <button className='btn rounded-full h-8 w-8 bg-transparent border-white text-white'><a className="link link-hover"><FaTiktok /></a></button>
                    </div>
                    <p>©{new Date().getFullYear()} Havenix. All right reserved.</p>
                </div>
            </nav>
            </div>
            {/* FULL-WIDTH TEXT BELOW */}
            <div className="w-full text-center mt-5 md:mt-10">
                <h1 className="text-4xl sm:text-5xl lg:text-9xl font-bold bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent w-full">
                    WiztectBD
                </h1>
            </div>
        </footer>
    )
}
