import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';

const UniversalProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AuthProvider>
    );
};

export default UniversalProvider;