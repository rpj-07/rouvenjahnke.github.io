import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Rouven Jahnke</h2>
            <p className="mb-4">
              Mathematics Researcher and PhD Candidate.
              <br />
              Exploring the beauty and complexity of mathematical structures.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary transition">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary transition">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary transition">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light hover:text-secondary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light hover:text-secondary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-light hover:text-secondary transition">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-light hover:text-secondary transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-light hover:text-secondary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="mb-2">
              Email: hello@rouvenjahnke.com
            </p>
            <p>
              Mathematics Department
              <br />
              University Name
              <br />
              City, Country
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
          <p>© {currentYear} Rouven Jahnke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}