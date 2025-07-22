import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { easeOut, motion } from 'framer-motion'; // ✅ Add this
import './Navbar.css';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ms', label: 'Malay' },
  { code: 'id', label: 'Indonesia' },
  { code: 'th', label: 'Thailand' },
  { code: 'km', label: 'Khmer' },
];

interface NavbarProps {
  onLanguageChange?: (code: string) => void;
}

const navbarVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3, //
      duration: 0.8,
      ease: easeOut
    }
  }
};

export default function Navbar({ onLanguageChange }: NavbarProps) {
  const [selectedLang, setSelectedLang] = useState(languages[0].code);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLangSelect = (code: string) => {
    setSelectedLang(code);
    setDropdownOpen(false);
    if (onLanguageChange) onLanguageChange(code);
  };

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-left">
        <Link
          to="/"
          className="navbar-brand text-slate-300 hover:text-orange-500 transition-colors duration-200"
        >
          <span className="block md:hidden">YDMDI</span>
          <span className="hidden md:block">The Malay Islamic World Secretariat</span>
        </Link>
      </div>
      <div className="navbar-right">
        <div className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <span className="dropdown-selected-label">
              {languages.find(l => l.code === selectedLang)?.label}
            </span>
            <span className={`dropdown-arrow${dropdownOpen ? ' open' : ''}`}>▼</span>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {languages.map(lang => (
                <li key={lang.code}>
                  <button
                    className={`dropdown-item${selectedLang === lang.code ? ' selected' : ''}`}
                    onClick={() => handleLangSelect(lang.code)}
                  >
                    <span className="dropdown-lang-label">{lang.label}</span>
                    {selectedLang === lang.code && (
                      <span className="dropdown-check">✔</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
