import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaHeart, FaRegHeart } from "react-icons/fa";
import LifeStyle from './LifeStyle';

const ListingCard = ({ data }) => {
    return (
        <div className="bg-primary shadow-xl rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="p-7">

                {/* image  */}
                <img className='h-50 w-full object-center object-cover rounded-xl mb-4' src={data.photoURL} alt="" />

                {/* Title */}
                <h3 className="text-xl font-semibold">{data.title}</h3>

                {/* Location */}
                <p className="text-sm mb-3 flex items-center gap-2">
                    <CiLocationOn /> {data.location}
                </p>

                {/* Room Type */}
                <p className="text-md font-medium mb-1 flex items-center gap-2">
                    <FaBed /> {data.roomType}
                </p>

                {/* Lifestyle Preferences with Tooltip */}
                <div className="mb-3">
                    <LifeStyle lifestylePreferences={data.lifestylePreferences} />
                </div>


                <div className='flex items-center justify-between mb-1'>
                    {/* Like Count */}
                    <p className="text-sm flex items-center gap-2">
                        <FaHeart /> {data.likeCount} people interested
                    </p>

                    {/* Rent Amount */}
                    <p className="text-xl font-bold ">
                        ${data.rentAmount} / month
                    </p>
                </div>

                {/* See Details Button */}
                <Link to={`/listings/${data._id}`} className="block w-full text-center bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;

