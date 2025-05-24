import { useEffect, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext/ThemeContext";
import { getTheme, setTheme } from "../utilities/localStoreTheme";


const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)


    useEffect(() => {
        const theme = getTheme()
        if (theme === 'dark') {
            setIsDark(true)
        }
    }, [])

    useEffect(() => {
        if (isDark) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [isDark])

    const handleToggle = () => {
        setIsDark(!isDark)
    }

    const themeData = {
        isDark,
        setIsDark,
        handleToggle
    }

    return (
        <ThemeContext value={themeData}>
            {children}
        </ThemeContext>
    );
};
export default ThemeProvider;
