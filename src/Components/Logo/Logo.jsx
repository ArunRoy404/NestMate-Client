import NestDark from '../../assets/NEST_dark.png'
import NestLight from '../../assets/NEST_light.png'
import useThemeContext from '../../CustomContexts/useThemeContext';

const Logo = ({ logo }) => {
    const { isDark } = useThemeContext()

    let defaultLogo
    if (logo === 'light') {
        defaultLogo = NestLight
    }

    return (
        <div className='flex items-center justify-center max-w-max'>
            <img className='w-15' src={defaultLogo ? defaultLogo : isDark ?NestLight :NestDark} alt="" />
            <h1 className='text-2xl font-bold'>Nest<span className='font-normal'>Mate</span></h1>
        </div>
    );
};

export default Logo;