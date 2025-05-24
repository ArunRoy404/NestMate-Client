import { NavLink } from "react-router";

const NavLinksList = () => {
    return (
        <>
            <NavLink to={'/'} className='border-none font-medium text-lg ' >Home</NavLink>
            <NavLink to={'/add-find-roommate'} className='border-none font-medium text-lg '>Add to Find Roommate</NavLink>
            <NavLink to={'/listings'} className='border-none font-medium text-lg '>Browse Listings</NavLink>
            <NavLink to={'/my-listings'} className='border-none font-medium text-lg '>My Listings</NavLink>
        </>
    );
};

export default NavLinksList;