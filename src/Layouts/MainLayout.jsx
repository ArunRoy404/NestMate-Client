import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <Toaster t
                containerStyle={{ zIndex: 999999 }}
                position="top-center"
                reverseOrder={false}></Toaster>
            <Navbar />
            <main className="container mx-auto min-h-[calc(100vh-324px-76px)] md:py-15">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;