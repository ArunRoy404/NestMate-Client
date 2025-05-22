import ThemeProvider from './ThemeProvider';

const UniversalProvider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default UniversalProvider;