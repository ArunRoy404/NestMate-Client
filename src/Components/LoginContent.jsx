import { Typewriter } from 'react-simple-typewriter'

const LoginContent = () => {
    const subtitles = [
        "Your next home starts here.",
        "Find your perfect roommate today.",
        "Match. Move in. Make memories.",
        "Finding homes, one roommate at a time."
    ]

    return (
        <div className='hidden md:block w-full'>
            <h1 className='text-6xl font-normal mb-3' >
                <span className='font-bold'>Nest</span>Mate
            </h1>
            <h2 className='md:text-3xl font-bold opacity-70'>
                <Typewriter
                    words={subtitles}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
        </div>
    );
};

export default LoginContent;