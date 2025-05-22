import { useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
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
