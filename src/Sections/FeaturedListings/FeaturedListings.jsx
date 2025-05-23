import { useEffect, useState } from "react";
import ListingCard from "../../Components/Listings/ListingCard";
import Loader from "../../Components/Loaders/Loader";


const FeaturedListings = () => {

    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://nest-mate-server.vercel.app/limited-listings')
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
        <section className="mt-20 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold ">Currently Available Roommates</h2>
                <p className="mt-2 opacity-70">See verified listings of roommates looking for a shared space near you.</p>
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-10">
                {
                    listings.map((data, index) => <ListingCard key={index} data={data}></ListingCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedListings;