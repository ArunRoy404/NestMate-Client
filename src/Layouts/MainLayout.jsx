import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto min-h-[calc(100vh-300px-76px)] py-15">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;