import React, { useState } from 'react';
import useThemeContext from '../CustomContexts/UseThemeContext';
import useDatabaseContext from '../CustomContexts/UseDatabaseContext';
import { notifySuccess } from '../utilities/notify';
import Loader from '../Components/Loaders/Loader';

const AddFindRoommate = () => {
    const { isDark } = useThemeContext()
    const { user, addListing } = useDatabaseContext()
    const [isLoading, setIsLoading] = useState(false)

    const initialFormData = {
        user_id: "",
        title: "",
        location: "",
        rentAmount: "",
        roomType: "Shared Room",
        lifestylePreferences: {
            pets: false,
            smoking: false,
            nightOwl: false
        },
        interests: [],
        description: "",
        contactInfo: "",
        availability: "Available",
        photoURL: "",
        likeCount: 0
    }

    const [formData, setFormData] = useState(initialFormData);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue = value

        if (name === 'interests') {
            newValue = value.split(',')
        }
        if (type === 'checkbox') {

            setFormData((prev) => ({
                ...prev,
                lifestylePreferences: {
                    ...formData.lifestylePreferences,
                    [name]: checked
                }
            }));
        }

        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        formData.user_id = user.firebase_uid

        addListing(formData)
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notifySuccess('Listing added successfully')
                    setFormData(initialFormData)
                }
                setIsLoading(false)
            })
    };

    return (
        <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded shadow-xl m-2`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Add Your Roommate Listing</h2>
            {
                formData.photoURL
                    ? <img
                        src={formData?.photoURL}
                        className="w-full h-40 md:h-60 object-cover object-center rounded-lg shadow-xl mb-6"
                    />

                    : <div className={`${isDark ? 'bg-gray-700' : 'bg-base-200'} w-full h-40 md:h-60 object-cover object-center rounded-lg shadow-xl mb-6 flex items-center justify-center`}>
                        provide photoURL to load your apartment image
                    </div>
            }

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

                <div className='col-span-2'>
                    <label className="block text-sm font-medium opacity-80">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Downtown LA Roommate Needed"
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className='col-span-2'>
                    <label className="block text-sm font-medium opacity-80">Photo URL</label>
                    <input
                        type="url"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        placeholder="https://example.com/apartment-photo.jpg"
                        className="1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className='col-span-2'>
                    <label className="block text-sm font-medium opacity-80">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Downtown Los Angeles"
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium opacity-80">Rent Amount ($/month)</label>
                    <input
                        type="number"
                        name="rentAmount"
                        value={formData.rentAmount}
                        onChange={handleChange}
                        required
                        min="0"
                        placeholder="e.g. 1100"
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium opacity-80">Room Type</label>
                    <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option className={`${isDark ? 'bg-gray-700' : ''}`}>Shared Room</option>
                        <option className={`${isDark ? 'bg-gray-700' : ''}`}>Private Room</option>
                    </select>
                </div>


                <div className='col-span-2'>
                    <label className="block text-sm font-medium opacity-80">Interests (comma-separated)</label>
                    <input
                        type="text"
                        name="interests"
                        value={formData.interests.join(',')}
                        onChange={handleChange}
                        placeholder="e.g. Parties, Gaming, Fitness"
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>


                <div className="mt-4 row-span-2">
                    <p className="text-sm font-medium opacity-80 mb-2">Lifestyle Preferences</p>
                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="pets"
                                checked={formData.lifestylePreferences.pets}
                                onChange={handleChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className={`ml-2 text-sm ${isDark ? '' : 'text-gray-600'}`}>Pets Allowed</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="smoking"
                                checked={formData.lifestylePreferences.smoking}
                                onChange={handleChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className={`ml-2 text-sm ${isDark ? '' : 'text-gray-600'}`}>Smoking Allowed</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="nightOwl"
                                checked={formData.lifestylePreferences.nightOwl}
                                onChange={handleChange}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className={`ml-2 text-sm ${isDark ? '' : 'text-gray-600'}`}>Night Owl Friendly</span>
                        </label>
                    </div>
                </div>



                <div>
                    <label className="block text-sm font-medium opacity-80">Contact Info</label>
                    <input
                        type="text"
                        name="contactInfo"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        required
                        placeholder="Phone number or other contact method"
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium opacity-80">Availability</label>
                    <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option className={`${isDark ? 'bg-gray-700' : ''}`}>Available</option>
                        <option className={`${isDark ? 'bg-gray-700' : ''}`}>Unavailable</option>
                    </select>
                </div>


                <div className='col-span-2'>
                    <label className="block text-sm font-medium opacity-80">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe the room, apartment, or what kind of roommate you're looking for."
                        className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium opacity-80">User Name</label>
                    <input
                        type="text"
                        name="contactInfo"
                        defaultValue={user ? user.name : ''}
                        required
                        disabled
                        placeholder="Phone number or other contact method"
                        className="disabled:cursor-not-allowed disabled:opacity-40 mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium opacity-80">User Email</label>
                    <input
                        type="text"
                        name="contactInfo"
                        defaultValue={user ? user.email : ''}
                        required
                        disabled
                        placeholder="Phone number or other contact method"
                        className="disabled:cursor-not-allowed disabled:opacity-40 mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>


                <div className="pt-4 col-span-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full disabled:opacity-40 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        {isLoading ? <span className='ml-5'><Loader /></span> : ''}
                        Add Roommate Listing
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFindRoommate;