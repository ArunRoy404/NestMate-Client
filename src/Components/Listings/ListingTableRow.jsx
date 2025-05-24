import useThemeContext from "../../CustomContexts/useThemeContext";

const ListingTableRow = ({ listing, handleDeleteListing }) => {
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
        <tr className={`${isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} border-b border-gray-200`}>
            <th scope="row" className={`px-6 py-4 font-medium ${isDark ? 'text-white' : 'text-gray-900 '} whitespace-nowrap`}>
                {listing?.title}
            </th>
            <td className="px-6 py-4">
                {listing?.availability}
            </td>
            <td className="px-6 py-4">
                {listing?.location}
            </td>
            <td className="px-6 py-4">
                {listing?.roomType}
            </td>
            <td className="px-6 py-4">
                ${listing?.rentAmount}
            </td>
            <td className="px-6 py-4">
                {lifeStyle.join(', ')}

            </td>
            <td className="px-6 py-4">
                {
                    listing?.interests.length < 1
                        ? 'none'
                        : listing?.interests.join(', ')
                }
            </td>
            <td className="flex items-center px-6 py-4">
                <button className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</button>
                <button onClick={() => handleDeleteListing(listing._id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Delete</button>
            </td>
        </tr>
    );
};

export default ListingTableRow;