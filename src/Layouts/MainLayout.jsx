import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-300px-76px)] py-15">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;