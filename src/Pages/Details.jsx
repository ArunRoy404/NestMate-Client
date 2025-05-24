import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaBed, FaHeart, FaRegHeart } from "react-icons/fa6";
import Loader from '../Components/Loaders/Loader';
import useDatabaseContext from '../CustomContexts/UseDatabaseContext';

const Details = () => {
    const [listing, setListing] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [postOwner, setPostOwner] = useState(null)
    const [isPostOwnerLoading, setIsPostOwnerLoading] = useState(false)
    const [liked, setLiked] = useState(false);
    const [isLikeLoading, setIsLikeLoading] = useState(false)

    const { id } = useParams()
    const { updateListing, user } = useDatabaseContext()

    const isOwnPost = user?._id == postOwner?._id


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://nest-mate-server.vercel.app/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setListing(data)
                setIsLoading(false)
            })
    }, [id])

    useEffect(() => {
        if (listing && !postOwner) {
            setIsPostOwnerLoading(true)
            fetch(`https://nest-mate-server.vercel.app/users/${listing?.user_id}`)
                .then(res => res.json())
                .then(data => {
                    setPostOwner(data[0])
                    setIsPostOwnerLoading(false)
                })
        }
    }, [listing])

    const postOwnerInfo = (
        <div className='flex items-center gap-4'>
            <div className='border-r-2  pr-2'><img className="w-10 rounded-full" src={postOwner?.photoURL} /></div>
            <p className='font-bold'>{postOwner?.name}</p>
        </div>
    )

    const handleLike = () => {
        setIsLikeLoading(true)
        const { _id, ...newData } = listing
        newData.likeCount = listing.likeCount + 1

        updateListing(listing._id, newData)
            .then(res => res.json())
            .then(() => {
                fetch(`https://nest-mate-server.vercel.app/listings/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        setListing(data)
                        setIsLikeLoading(false)
                    })
            })

        // Call API to update likeCount here
        setLiked(true);

    };

    if (isLoading) {
        return (
            <div className="w-full h-80 flex items-center justify-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6">
            {/* go back link  */}
            <Link to="/listings" className="text-violet-500 hover:underline mb-4 block flex items-center gap-2"><FaArrowLeft /> Back to Listings</Link>

            {/* title  */}
            <h1 className="text-3xl font-bold  mb-1">{listing?.title}</h1>

            {/* like Count  */}
            <p className="text-sm opacity-70 mb-1 text-end">
                {listing?.likeCount} people interested in this post
            </p>

            {/* apartment image */}
            <img
                src={listing?.photoURL}
                alt="Listing"
                className="w-full h-100 object-cover object-center rounded-lg shadow-xl mb-6"
            />

            <div className='flex gap-10'>
                {/* availability  */}
                <div className="flex-1 bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5">
                    {
                        listing?.availability === 'Available'
                            ? <p className='bg-green-100 px-5 py-1 max-w-max rounded-md text-green-800 font-semibold'>Available</p>
                            : <p className='bg-red-100 px-5 py-1 max-w-max rounded-md text-red-800 font-semibold'>Unavailable</p>
                    }
                    {/* location  */}
                    <h1 className='flex items-center gap-2 mt-2'><CiLocationOn /> {listing?.location}</h1>
                    {/* roomType  */}
                    <div className='mt-3 flex item-center justify-between'>
                        <p className="text-md font-medium flex items-center gap-2">
                            <FaBed /> {listing?.roomType}
                        </p>
                        {/* rent amount  */}
                        <p className="text-2xl font-bold ">
                            ${listing?.rentAmount} / month
                        </p>
                    </div>
                </div>

                {/* post owner info  */}
                <div className="w-70 bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5 space-y-5">
                    <h1 className='font-semibold'>Post Owner</h1>
                    {
                        isPostOwnerLoading
                            ? <Loader />
                            : postOwnerInfo
                    }
                </div>
            </div>

            {/* like this post  */}
            <div className="bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5">
                <div className='flex items-center justify-between'>
                    <div>
                        <button
                            onClick={handleLike}
                            className={`cursor-pointer max-w-max p-2 mb-1 rounded-full bg-violet-300 hover:bg-violet-500 text-primary active:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed`}
                            disabled={isLikeLoading || isOwnPost}
                        >
                            {
                                isLikeLoading
                                    ? <span className="loading loading-spinner loading-xs w-7"></span>
                                    : <FaRegHeart size={20} />
                            }

                        </button>
                        {
                            isOwnPost
                                ? <h1 className='font-semibold opacity-80 text-red-600'>Can not like own post.</h1>
                                : <h1 className='font-semibold opacity-80'>Like this post to get contact info</h1>
                        }

                        <p className="text-sm opacity-70">
                            {listing?.likeCount} people interested in this post
                        </p>
                    </div>

                    {liked && (
                        <div className="bg-slate-800 border-white/60 text-white p-4 border rounded-xl">
                            <strong>Contact Info:</strong> {listing?.contactInfo}
                        </div>
                    )}
                </div>
            </div>

            {/* about post  */}
            <div className="bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5">
                <h2 className="text-xl font-semibold mb-2">About This Post</h2>
                <p className="opacity-70">{listing?.description}</p>
            </div>

            {/* lifestyle preferences  */}
            <div className="bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5">
                <h2 className="text-xl font-semibold mb-2">Lifestyle Preferences</h2>
                <div className="flex flex-wrap gap-2">
                    {listing?.lifestylePreferences?.pets && <span className="badge bg-green-100 text-green-800 px-3 py-1 rounded">🐾 Pets Allowed</span>}
                    {listing?.lifestylePreferences?.smoking ? (
                        <span className="badge bg-red-100 text-red-800 px-3 py-1 rounded">🚬 Smoking Allowed</span>
                    ) : (
                        <span className="badge bg-blue-100 text-blue-800 px-3 py-1 rounded">🚭 No Smoking</span>
                    )}
                    {listing?.lifestylePreferences?.nightOwl && <span className="badge bg-purple-100 text-purple-800 px-3 py-1 rounded">🕶️ Night Owl Friendly</span>}
                </div>
            </div>

            {/* interests  */}
            <div className="bg-accent border-1 rounded-xl border-black/40 mb-6 shadow-xl p-5">
                <h2 className="text-xl font-semibold mb-2">Interests</h2>
                <ul className="flex flex-wrap gap-2 list-disc">
                    {
                        listing?.interests.length < 1
                            ? <p className="badge bg-red-100 text-red-800 px-3 py-1 rounded">none</p>
                            : ''
                    }
                    {listing?.interests?.map((interest, index) => (
                        <li key={index} className="badge bg-green-100 text-green-800 px-3 py-1 rounded">{interest}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 text-sm">
                Posted by: <strong>{postOwner?.name}</strong>
            </div>
        </div>
    );
};

export default Details;



