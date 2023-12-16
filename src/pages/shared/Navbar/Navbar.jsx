import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle  } from 'react-icons/bs';
import { AuthContext } from '../../../components/hooks/AuthProvider';

const Navbar = () => {
    const { user,  } = useContext(AuthContext)
    const route = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/colleges"}>Collages</Link></li>
        <li><Link to={"/admission"}>Admission</Link></li>
        <li><Link to={`/myCollege/${user?.email}`}>My Collage</Link></li>
    </>
    return (
        <div className=' mb-5'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col gap-1 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {route}
                        </ul>
                    </div>
                    <a className=" text-xl">MindMeld Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5 px-1">
                    {route}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <Link to={`/myProfile/${user.email}`} ></Link> : <Link to="/login">
                        <BsPersonCircle className='text-2xl'></BsPersonCircle></Link>
                    }
                    {user && <><Link to={`/myProfile/${user.email}`}><div className=" flex gap-4 items-center"><div className=""><p className='text-md font-semibold'>{user.displayName}  </p></div><div className="avatar">
  <div className="w-10 rounded-full">
    <img src={user.photoURL} />
  </div>
</div></div> </Link></>}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;