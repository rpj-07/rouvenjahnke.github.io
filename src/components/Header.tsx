import { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-primary font-serif font-bold text-2xl">
              Rouven Jahnke
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-dark hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="text-dark hover:text-primary font-medium">
              About
            </Link>
            <Link href="/research" className="text-dark hover:text-primary font-medium">
              Research
            </Link>
            <Link href="/publications" className="text-dark hover:text-primary font-medium">
              Publications
            </Link>
            <Link href="/blog" className="text-dark hover:text-primary font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary font-medium">
              Contact
            </Link>
          </nav>

          {/* Social links */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
              <FaGithub className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link href="/" className="block text-dark hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-dark hover:text-primary font-medium">
              About
            </Link>
            <Link href="/research" className="block text-dark hover:text-primary font-medium">
              Research
            </Link>
            <Link href="/publications" className="block text-dark hover:text-primary font-medium">
              Publications
            </Link>
            <Link href="/blog" className="block text-dark hover:text-primary font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block text-dark hover:text-primary font-medium">
              Contact
            </Link>
            <div className="flex space-x-5 pt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}