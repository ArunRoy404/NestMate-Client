import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Listings from '../Pages/Listings';
import Details from '../Pages/Details';
import ErrorPage from '../Pages/ErrorPage';
import AddFindRoommate from '../Pages/AddFindRoommate';
import MyListings from '../Pages/MyListings';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/add-find-roommate',
                Component: AddFindRoommate
            },
            {
                path: '/listings',
                Component: Listings
            },
            {
                path: '/listings/:id',
                Component: Details
            },
            {
                path: '/my-listings',
                Component: MyListings
            }            
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router