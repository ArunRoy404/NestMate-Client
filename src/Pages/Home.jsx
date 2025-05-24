import FeaturedListings from "../Sections/FeaturedListings/FeaturedListings";
import HowItWorks from "../Sections/HowItWorks/HowItWorks"
import Slider from "../Sections/Slider/Slider";

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedListings />
            <HowItWorks />
        </>
    );
};

export default Home;