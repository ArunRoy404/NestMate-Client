import React from 'react';
import { NavLink } from 'react-router';

const NavLoginRegisterBtn = () => {
    return (
        <div className='space-x-4 font-bold'>
            <NavLink to={'/login'}><button className='btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-black'>Log IN</button></NavLink>
            <NavLink to={'/register'}><button className='btn  shadow-none rounded-4xl border-2 border-black'>Register</button></NavLink>
        </div>
    );
};

export default NavLoginRegisterBtn;