import React from 'react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
        <img src="/src/public/images/arrow.png" alt="scroll top" 
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-grey-700 dark:bg-white text-black p-2 rounded-full shadow-lg hover:bg-blue-400 dark:hover:bg-blue-200 transition-colors w-10"
        
        />)
        
    );
};

export default ScrollToTopButton;