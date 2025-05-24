import useThemeContext from "../../CustomContexts/useThemeContext";
import ListingTableRow from "./ListingTableRow";

const ListingsTable = ({ listings }) => {

    const { isDark } = useThemeContext()

    return (
        <div className="relative overflow-x-auto box-shadow shadow-sm sm:rounded-lg">
            <table className={`w-full text-sm text-left rtl:text-right ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <thead className={`text-xs text-gray-700  ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-400 '}`}>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Availability
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Room Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rent Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            LifeStyle
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Interests
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listings.map(listing => <ListingTableRow key={listing._id} listing={listing} />)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default ListingsTable;