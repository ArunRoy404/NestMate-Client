import useThemeContext from "../../CustomContexts/useThemeContext";
import Loader from "../Loaders/Loader";

import ListingTableRowBrowse from "./ListingTableRowBrowse";

const ListingTableBrowse = ({ listings, isLoading }) => {

    const { isDark } = useThemeContext()

    const showLoader = (
        <tr>
            <td colSpan={8} className="w-full h-80 ">
                <div className="flex items-center justify-center">
                    <Loader />
                </div>
            </td>
        </tr>
    )

    const tableData = (
        listings.map(listing => <ListingTableRowBrowse key={listing._id} listing={listing} />)
    )

    return (
        <div className="w-[95%] md:w-full mx-auto relative overflow-x-auto box-shadow shadow-sm sm:rounded-lg">
            <table className={`w-full text-sm text-left rtl:text-right ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <thead className={`text-xs text-gray-700  ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-400 '}`}>
                    <tr>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4">
                            <p className=" w-10 md:w-auto">Title</p>
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4 hidden md:table-cell">
                            Availability
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4">
                            <p className="w-10 md:w-auto">Location</p>
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4">
                            <p className="w-5 md:w-auto">Room Type</p>
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4">
                            <p className="w-6 md:w-auto">Rent Amount</p>
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4 hidden lg:table-cell">
                            LifeStyle
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4 hidden lg:table-cell">
                            Interests
                        </th>
                        <th scope="col" className="px-4 lg:px-6 py-1 lg:py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        isLoading
                            ? showLoader
                            : tableData
                    }



                </tbody>
            </table>
        </div>

    );
};

export default ListingTableBrowse;