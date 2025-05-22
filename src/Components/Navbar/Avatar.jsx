import { Link } from "react-router";

const Avatar = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="font-bold text-sm menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                    <Link className="justify-between">
                        View Profile
                    </Link>
                </li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    );
};

export default Avatar;