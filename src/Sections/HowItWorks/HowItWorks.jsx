import { Fade, Slide } from "react-awesome-reveal";
import howItWorksAnimation from '../../animations/howItWorksAnimation.json'
import Lottie from "lottie-react";
import useThemeContext from "../../CustomContexts/useThemeContext";

const HowItWorks = () => {

    const { isDark } = useThemeContext()

    return (
        <div className={`${isDark ? 'bg-gray-800' : ''} my-10 p-10 rounded-xl shadow-xl mx-4`}>
            <h2 className="text-3xl text-center font-bold mb-10">How NestMate Works</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className=" md:text-left space-y-8 overflow-hidden ">
                    <div>
                        <Slide>
                            <h3 className="text-xl lg:text-3xl  font-semibold mt-4 mb-2">Create Your Profile</h3>
                        </Slide>
                        <p className="text-[12px]  md:text-[14px] lg:text-[18px] font-semibold opacity-70">
                            <Fade delay={1000} cascade damping={0.03}>
                                Add your details and lifestyle preferences so
                            </Fade>
                            <Fade delay={2500} cascade damping={0.03}>
                                we can find the best matches for you.
                            </Fade>
                        </p>
                    </div>
                    <div>
                        <Slide delay={1000}>
                            <h3 className="text-xl lg:text-3xl font-semibold mt-4 mb-2">Browse or Add Listings</h3>
                        </Slide>
                        <p className="text-sm md:text-[14px] lg:text-[18px] font-semibold opacity-70">
                            <Fade delay={2000} cascade damping={0.03}>
                                Search for roommates or post your own listing to
                            </Fade>
                            <Fade delay={3500} cascade damping={0.03}>
                                find someone near you.
                            </Fade>
                        </p>
                    </div>
                    <div>
                        <Slide delay={2000}>
                            <h3 className="text-xl lg:text-3xl font-semibold mt-4 mb-2">Like & Connect</h3>
                        </Slide>
                        <p className="text-sm md:text-[14px] lg:text-[18px] font-semibold opacity-70">
                            <Fade delay={3000} cascade damping={0.03}>
                                Click “Like” to connect and reveal contact info
                            </Fade>
                            <Fade delay={4500} cascade damping={0.03}>
                                to start talking!
                            </Fade>
                        </p>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Lottie animationData={howItWorksAnimation} loop={true} />
                </div>
            </div>
        </div >
    );
};

export default HowItWorks;