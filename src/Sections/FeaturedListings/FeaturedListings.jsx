import ListingCard from "../../Components/Listings/ListingCard";
import listingsData from "../../utilities/DummyListingsData";

const FeaturedListings = () => {

    return (
        <section className="mt-20 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold ">Currently Available Roommates</h2>
                <p className="mt-2 opacity-70">See verified listings of roommates looking for a shared space near you.</p>
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-10">
                {
                    listingsData.slice(0, 6).map((data, index) => <ListingCard key={index} data={data}></ListingCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedListings;