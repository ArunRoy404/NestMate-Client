import { useContext } from "react";
import DatabaseContext from "../Contexts/DatabaseContext/DatabaseContext";


const useDatabaseContext = () => {
    const useDatabaseContext = useContext(DatabaseContext)
    return useDatabaseContext
};

export default useDatabaseContext;