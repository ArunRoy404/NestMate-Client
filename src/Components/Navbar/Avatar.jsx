import { Link } from "react-router";
import useDatabaseContext from "../../CustomContexts/UseDatabaseContext";

const Avatar = () => {

    const { user, logOutUser } = useDatabaseContext()

    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="font-bold text-sm menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                <li>
                    <Link className="justify-between">
                        {user?.name}
                    </Link>
                </li>
                <li><a onClick={() => logOutUser()} >Logout</a></li>
            </ul>
        </div>
    );
};

export default Avatar;