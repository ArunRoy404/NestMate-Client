import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <Navbar />
            <main className="min-h-[calc(100vh-300px-76px)] py-15">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;