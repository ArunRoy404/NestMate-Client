import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const useThemeContext = () => {
    return useContext(ThemeContext)
};

export default useThemeContext;