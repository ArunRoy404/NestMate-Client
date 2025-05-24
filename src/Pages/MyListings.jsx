import { useEffect, useState } from 'react';
import Loader from '../Components/Loaders/Loader';
import useDatabaseContext from '../CustomContexts/UseDatabaseContext';
import ListingsTable from '../Components/Listings/ListingsTable';

const MyListings = () => {
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useDatabaseContext()


    useEffect(() => {
        if (user.firebase_uid) {
            setIsLoading(true)
            fetch(`https://nest-mate-server.vercel.app/users/${user.firebase_uid}/listings`)
                .then(res => res.json())
                .then(data => {
                    setListings(data)
                    setIsLoading(false)
                })
        }
    }, [user])

    if (isLoading) {
        return (
            <div className="w-full h-80 flex items-center justify-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className='py-10'>
            <div className="text-center mb-15">
                <h2 className="text-4xl font-bold ">View & Manage Your Roommate Listings</h2>
                <p className="mt-2 opacity-70 text-xl">
                    Update, delete, or view details of your listings.
                </p>
            </div>
            <ListingsTable listings={listings} />
        </div>
    );
};

export default MyListings;