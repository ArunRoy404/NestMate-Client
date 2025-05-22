import React from 'react';
import { NavLink } from 'react-router';

const NavLoginRegisterBtn = () => {
    return (
        <div className='space-x-4 font-bold'>
            <NavLink to={'/login'}><button className='btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-neutral'>Log IN</button></NavLink>
            <NavLink to={'/register'}><button className='btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-neutral'>Register</button></NavLink>
        </div>
    );
};

export default NavLoginRegisterBtn;