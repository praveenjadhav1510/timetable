import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMeatball, faCloud } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('black');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'black';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'black' ? 'lavender' : 'black';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        // set item theme name and in applyTheme function use json for theame colors 
        applyTheme(newTheme);
    };

    const applyTheme = (theme) => {
        const root = document.documentElement;
        if (theme === 'black') {
            root.style.setProperty('--text-color', '#000000');
            root.style.setProperty('--bg-color', '#e7e7e7');
            root.style.setProperty('--bt-color', '#a4a4a4');
            root.style.setProperty('--body-text-color', '#000000');
            root.style.setProperty('--body-back', 'linear-gradient(45deg, #c7c7c7, #6fe1f52c)')
            
        } else {
            root.style.setProperty('--text-color', '#92aaff');
            root.style.setProperty('--bg-color', '#bac3f2');
            root.style.setProperty('--bt-color', '#aabcff');
            root.style.setProperty('--body-text-color', '#ffffff');
            root.style.setProperty('--body-back', 'linear-gradient(45deg, #ccccff, #00d9ff2c)');
        }
    };

    return (
        <div onClick={toggleTheme} className='theme'>
            Switch to {theme === 'black' ? <>cold Theme <FontAwesomeIcon icon={faCloudMeatball} /></>: <>cloudy Theme <FontAwesomeIcon icon={faCloud} /></>}
        </div>
    );
};

export default ThemeSwitcher;
