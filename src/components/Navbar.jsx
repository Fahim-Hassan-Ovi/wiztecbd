import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
    const { pathname } = useLocation();
    const isNotHome = pathname !== "/";

    return (
        <div className="md:mx-6 md:mt-6 ">
            <div className={`navbar md:px-[106px]`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/'>Buy</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/rent'>Rent</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/sell'>Sell</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/agents'>Agents</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/blogs'>Blogs</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/contact-us'>Contact Us</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/favourite'><div className="flex items-center gap-2">
                                <span>Favourite</span>
                                <FaRegHeart size={20} />
                            </div></NavLink>

                        </ul>
                    </div>
                    <Link to="/">
                        <div className="flex justify-center items-center gap-2">
                            <img className="h-7 w-7" src="/src/assets/logo.png" alt="logo" />
                            <span className={`text-xl font-bold ${isNotHome ? "text-black" : "text-[#810e53]"}`}>
                                WiztecBD
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/'>Buy</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/rent'>Rent</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/sell'>Sell</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/agents'>Agents</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/blogs'>Blogs</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/contact-us'>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-6">
                    <NavLink className={({ isActive }) => `hidden lg:flex font-bold ${isActive ? 'text-[#810e53]' : 'hover:text-fuchsia-900 text-gray-400'}`} to='/favourite'><div className="flex justify-center items-center gap-2">
                        <FaRegHeart size={20} />
                        <span>Favourite</span>
                    </div></NavLink>
                    <Link to="/sign-in">
                        <button className="font-bold text-white bg-[#810e53] hover:text-[#bb3284] btn rounded-full">Login Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;