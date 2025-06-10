import { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        document.documentElement.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button className='colorToggler' onClick={toggleTheme}>
                {isDarkMode ? <MdOutlineLightMode style={{backgroundColor:"#180824"}}/> : <MdDarkMode style={{backgroundColor:"white"}}/>}
            </button>
        </div>
    );
};

export default ThemeToggle;
