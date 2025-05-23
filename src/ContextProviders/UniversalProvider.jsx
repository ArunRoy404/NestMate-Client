import AuthProvider from './AuthProvider';
import DatabaseProvider from './DatabaseProvider';
import ThemeProvider from './ThemeProvider';

const UniversalProvider = ({ children }) => {
    return (
        <AuthProvider>
            <DatabaseProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </DatabaseProvider>
        </AuthProvider>
    );
};

export default UniversalProvider;