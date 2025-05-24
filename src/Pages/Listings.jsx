import { useEffect, useState } from 'react';
import Loader from '../Components/Loaders/Loader';
import ListingCard from '../Components/Listings/ListingCard';
import { Typewriter } from 'react-simple-typewriter';
import ListingTableBrowse from '../Components/Listings/ListingTableBrowse';


const Listings = () => {
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://nest-mate-server.vercel.app/listings')
            .then(res => res.json())
            .then(data => {
                setListings(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <div className="w-full h-80 flex items-center justify-center">
                <Loader />
            </div>
        )
    }
    return (
        <div className="py-10 px-4">
            <div className="text-center mb-15">
                <h2 className="text-2xl md:text-4xl font-bold ">Find Your Perfect Roommate Match</h2>
                <p className="mt-2 opacity-70 text-sm md:text-xl">
                    <Typewriter
                        words={["Discover compatible roommates near you.", "Live better with the right roommate.", "Find someone who matches your vibe."]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={30}
                    />
                </p>
            </div>
            <ListingTableBrowse
                listings={listings}
                isLoading={isLoading}
            />
        </div>
    );
};

export default Listings;