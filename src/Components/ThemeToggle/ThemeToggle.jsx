import { useEffect, useState } from "react";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const handleToggle = () => {
        setIsDark(!isDark)
    }

    return (
        <div>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleToggle} checked={isDark} />
                <SunIcon />
                <MoonIcon />
            </label>
        </div>
    );
};

export default ThemeToggle;