import { Typewriter } from 'react-simple-typewriter'
import useThemeContext from '../../CustomContexts/useThemeContext';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import locationAnimation from '../../animations/locationAnimation.json'

const TipsSection = () => {

    const { isDark } = useThemeContext()

    return (
        <div className={`${isDark ? 'bg-gray-800' : ''} flex flex-col-reverse md:flex-row items-center justify-center gap-10 my-20 p-10 rounded-xl shadow-xl mx-4`}>
            <div>
                <h2 className="text-2xl font-bold mb-2">Tips to Find the Best Roommate</h2>
                <p className="text-[12px]  md:text-[14px] lg:text-[18px] font-semibold opacity-70">
                    <Typewriter
                        words={[
                            "Know your non-negotiables.",
                            "Communicate clearly from the start.",
                            "Check compatibility before moving in.",
                            "Be honest about your lifestyle.",
                            "Respect others' habits and boundaries."
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={30}
                    />
                </p>

                <Link to={`/listings`} className="mt-5 max-w-max block w-full text-center bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                    Get Started Now
                </Link>
            </div>
            <div className='md:w-100 flex my-5'>
                <Lottie animationData={locationAnimation} loop={true} />
            </div>
        </div>
    );
};

export default TipsSection;