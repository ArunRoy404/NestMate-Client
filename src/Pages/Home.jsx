import FeaturedListings from "../Sections/FeaturedListings/FeaturedListings";
import HowItWorks from "../Sections/HowItWorks/HowItWorks"
import Slider from "../Sections/Slider/Slider";
import TipsSection from "../Sections/TipsSection/TipsSection";

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedListings />
            <HowItWorks />
            <TipsSection/>
        </>
    );
};

export default Home;