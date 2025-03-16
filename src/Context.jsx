import { createContext, useState, useEffect } from "react";

// Create the context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('darkTheme');
        localStorage.theme = 'darkTheme';
    } else {
        document.body.classList.remove('darkTheme');
        localStorage.theme = '';
    }
    }, [isDarkMode])

    return (
        <Context.Provider
            value={{isDarkMode, setIsDarkMode}}
        >            
            {children}
        </Context.Provider>
    );
};