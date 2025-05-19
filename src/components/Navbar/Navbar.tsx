import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../Header/ThemeToggle';
import type { Theme } from '../../types/theme';

interface NavbarProps {
    theme: Theme;
    toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('nav')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const navItems = [
        { href: '/#skills', label: 'Skills' },
        { href: '/#studies', label: 'Studies' },
        { href: '/#experiences', label: 'Experiences' },
        { href: '/#langages', label: 'Languages' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                       ${isScrolled || isOpen ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo or Name */}
                    <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                        Portfolio
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                                         transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out
                               ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-2 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-gray-600 dark:text-gray-300
                                         hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg
                                         hover:text-blue-600 dark:hover:text-blue-400
                                         transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}