import { Link } from "react-router";
import useThemeContext from "../../CustomContexts/useThemeContext";

const ListingTableRowBrowse = ({ listing }) => {
    const { isDark } = useThemeContext()
    const lifeStyle = []
    for (const [key, value] of Object.entries(listing.lifestylePreferences)) {
        if (value) {
            lifeStyle.push(key)
        }
        else if (key === 'smoking') {
            lifeStyle.push('no smoking')
        }
    }

    return (
        <tr className={`${isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-[9px] md:text-[12px] border-b border-gray-200`}>
            <th scope="row" className={`px-4 lg:px-6 py-1 lg:py-4 font-medium ${isDark ? 'text-white' : 'text-gray-900 '} whitespace-nowrap lg:text-sm`}>
                <div className=" w-10 md:w-auto line-clamp-2 hyphens-auto">{listing?.title}</div>
            </th>
            <td className="x-4 lg:px-6 py-1 lg:py-4 hidden md:table-cell">
                {listing?.availability}
            </td>
            <td className="px-4 lg:px-6 py-1 lg:py-4">
                <div className="w-10 md:w-auto">{listing?.location}</div>
            </td>
            <td className="px-4 lg:px-6 py-1 lg:py-4">
                {listing?.roomType}
            </td>
            <td className="px-4 lg:px-6 py-1 lg:py-4">
                <div className="w-6 md:w-auto"> ${listing?.rentAmount}</div>
            </td>
            <td className="px-4 lg:px-6 py-1 lg:py-4 hidden lg:table-cell">
                {lifeStyle.join(', ')}

            </td>
            <td className="px-4 lg:px-6 py-1 lg:py-4 hidden lg:table-cell">
                {
                    listing?.interests.length < 1
                        ? 'none'
                        : listing?.interests.join(', ')
                }
            </td>
            <td className="flex items-center justify-center mt-3 2xl:mt-auto px-4 lg:px-6 py-1 lg:py-4">
                <Link to={`/listings/${listing._id}`} className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">See More</Link>
            </td>
        </tr>
    );
};

export default ListingTableRowBrowse;