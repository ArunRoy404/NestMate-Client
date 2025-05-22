import NestDark from '../../assets/NEST_dark.png'
import NestLight from '../../assets/NEST_light.png'
import useThemeContext from '../../CustomContexts/useThemeContext';

const Logo = () => {
    const { isDark } = useThemeContext()
    return (
        <div className='flex items-center justify-center'>
            <img className='w-15' src={isDark ?NestLight :NestDark} alt="" />
            <h1 className='text-2xl font-bold'>Nest<span className='font-normal'>Mate</span></h1>
        </div>
    );
};

export default Logo;