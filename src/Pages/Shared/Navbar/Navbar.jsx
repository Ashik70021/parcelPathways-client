import { Link, NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { IoIosNotifications } from "react-icons/io";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const [userdb, setUserdb] = useState({});
    console.log(userdb)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserdb(data)
        })
        .catch( (error)=>{
            console.log(error)
        })
    },[user?.email])


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }



    let dashboardlink = "/dashboard/userhome"
    if(userdb?.type == 'admin'){
        dashboardlink = '/admindashboard/adminhome'
    }
    else if(userdb?.type == 'Delivery Man'){
        dashboardlink = '/deliverydashboard/deliveryhome'
    }
    console.log(dashboardlink)
    
    


    const navItems = <>
        <li><NavLink to="/"><a>Home</a></NavLink></li>
        <li><NavLink to="/aboutUs"><a>About us</a></NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <a className="text-3xl font-semibold">ParcelPathway</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><IoIosNotifications className="text-2xl mr-2" /></Link>
                <NavLink to={`${dashboardlink}`} className="flex items-center text-2xl mr-4"><MdOutlineDashboardCustomize /></NavLink>
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                    </a>
                                </li>
                                <li><Link to={`${dashboardlink}`}>Dashboard</Link></li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login"><a className="btn">Login</a></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;