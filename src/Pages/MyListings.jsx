import { useEffect, useState } from 'react';
import useDatabaseContext from '../CustomContexts/UseDatabaseContext';
import ListingsTable from '../Components/Listings/ListingsTable';
import { notifySuccess } from '../utilities/notify';

const MyListings = () => {
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { user, deleteListing } = useDatabaseContext()

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

    const handleDeleteListing = (id) => {
        deleteListing(id)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setListings(listings.filter(listing => listing._id !== id))
                    notifySuccess('Listing Deleted Successfully')

                }
            })
    }

    return (
        <div className='py-10'>
            <div className="text-center mb-15">
                <h2 className="text-4xl font-bold ">View & Manage Your Roommate Listings</h2>
                <p className="mt-2 opacity-70 text-xl">
                    Update, delete, or view details of your listings.
                </p>
            </div>
            <ListingsTable
                listings={listings}
                setListings={setListings}
                isLoading={isLoading}
                handleDeleteListing={handleDeleteListing}
            />
        </div>
    );
};

export default MyListings;