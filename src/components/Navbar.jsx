import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("user Nav:")
            })
            .catch(err => {
                console.log('err', err.message)
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100 px-0 mx-0">
                <div className="flex-1">
                    <h2 className=" text-2xl">React Auth and context</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/signup'}>SignUp</NavLink></li>
                        <li><NavLink to={'/login'}>login</NavLink></li>
                        {
                            user && <li><NavLink to={'/dashbord'}>Dashbord</NavLink></li>
                        }
                    </ul>
                </div>
                { user?.email ?
                    <div className='flex justify-center items-center'>

                        <h3 className='font-sans text-xs'>{user?.email}</h3>
                        <button onClick={handleSignOut} className='btn btn-ghost'>LogOut</button>
                    </div>
                    :
                    <></>

                }
            </div>
        </div>
    );
};

export default Navbar;