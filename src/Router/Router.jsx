import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Listings from '../Pages/Listings';
import Details from '../Pages/Details';
import AddFindRoommate from '../Pages/AddFindRoommate';
import MyListings from '../Pages/MyListings';
import UpdateListing from '../Pages/UpdateListing';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

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
                element: <PrivateRoute><AddFindRoommate></AddFindRoommate></PrivateRoute>
            },
            {
                path: '/listings',
                Component: Listings,
            },
            {
                path: '/listings/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/my-listings',
                element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
            }, {
                path: '/listings/update/:id',
                element: <PrivateRoute><UpdateListing></UpdateListing></PrivateRoute>
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router