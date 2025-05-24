import useAuthContext from "../../CustomContexts/UseAuthContext";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Avatar from "./Avatar";
import NavDropDown from "./NavDropDown";
import NavLinksList from "./NavLinksList";
import NavLoginRegisterBtn from "./NavLoginRegisterBtn";

const Navbar = () => {

    const { loggedUser } = useAuthContext()

    return (
        <nav className="sticky top-0 z-100">
            <div className="bg-accent shadow-lg">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <Logo />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-10">
                            <NavLinksList />
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <ThemeToggle />
                        {
                            loggedUser
                                ? <Avatar />
                                : <NavLoginRegisterBtn />
                        }
                        <NavDropDown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  