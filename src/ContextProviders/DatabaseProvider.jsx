import DatabaseContext from '../Contexts/DatabaseContext/DatabaseContext';

const DatabaseProvider = ({ children }) => {

    const user = {
        name: 'arun'
    }
    return (
        <DatabaseContext value={user}>
            {children}
        </DatabaseContext>
    )
};

export default DatabaseProvider;