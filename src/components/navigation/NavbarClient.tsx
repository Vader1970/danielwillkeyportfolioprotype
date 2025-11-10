"use client";

import { useState, useEffect } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NavLink } from "@/types/navigation";

interface NavbarClientProps {
  links: NavLink[];
}

/**
 * Client-side interactive part of the Navbar
 */
const NavbarClient = ({ links }: NavbarClientProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Start with false to ensure consistent SSR/client initial render
  // This prevents hydration mismatch if page loads with scroll position
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Check initial scroll position after mount
    setScrolled(window.scrollY > 50);

    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    // Add passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 lg:px-16 ${scrolled ? "bg-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
    >
      <div className='container-width'>
        <nav className='flex justify-between items-center'>
          <Link href='#home' className='text-xl md:text-2xl font-bold gradient-text' aria-label='Home'>
            DW
          </Link>

          {/* Desktop navigation */}
          <ul className='hidden md:flex space-x-8'>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className='text-light/80 hover:text-highlight transition-colors duration-300'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className='md:hidden text-light'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile navigation with LazyMotion for better performance */}
        {isOpen && (
          <LazyMotion features={domAnimation}>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden pt-4 pb-6'
            >
              <ul className='flex flex-col space-y-4'>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-light/80 hover:text-highlight block py-2 transition-colors duration-300'
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </LazyMotion>
        )}
      </div>
    </header>
  );
};

export default NavbarClient;
