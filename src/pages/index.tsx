import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                Exploring Mathematical Structures and Abstractions
              </h1>
              <p className="text-xl mb-8">
                PhD Candidate in Mathematics, passionate about theoretical research and its applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/research" className="bg-white text-primary px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-opacity-90 transition">
                  View Research <FaArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
                {/* Replace with your own image */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  RJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Research Interests</h2>
          <p className="text-xl max-w-3xl mx-auto">
            My work focuses on theoretical mathematics with applications in various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
            <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Mathematical Analysis</h3>
            <p className="text-gray-600 mb-4">
              Investigating properties of functions, limits, continuity, and related concepts in modern analysis.
            </p>
            <Link href="/research#analysis" className="text-primary font-medium inline-flex items-center hover:underline">
              Learn more <FaArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
            <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Abstract Algebra</h3>
            <p className="text-gray-600 mb-4">
              Exploring algebraic structures, group theory, and their applications in modern mathematics.
            </p>
            <Link href="/research#algebra" className="text-primary font-medium inline-flex items-center hover:underline">
              Learn more <FaArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
            <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Mathematical Physics</h3>
            <p className="text-gray-600 mb-4">
              Applying mathematical methods to solve problems in theoretical physics and quantum mechanics.
            </p>
            <Link href="/research#physics" className="text-primary font-medium inline-flex items-center hover:underline">
              Learn more <FaArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Recent Publications</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A selection of my recent academic papers and research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Journal of Mathematical Analysis • 2023</div>
                <h3 className="text-xl font-bold mb-3">Novel Approaches to Functional Analysis in Hilbert Spaces</h3>
                <p className="text-gray-600 mb-4">
                  This paper introduces new methodologies for analyzing functions in infinite-dimensional Hilbert spaces, with applications to quantum mechanics.
                </p>
                <Link href="/publications/functional-analysis" className="text-primary font-medium inline-flex items-center hover:underline">
                  Read publication <FaArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Theoretical Mathematics Quarterly • 2022</div>
                <h3 className="text-xl font-bold mb-3">Group Theoretic Foundations of Quantum Algorithms</h3>
                <p className="text-gray-600 mb-4">
                  This research explores the algebraic structures underlying quantum computational models and their efficiency implications.
                </p>
                <Link href="/publications/quantum-algorithms" className="text-primary font-medium inline-flex items-center hover:underline">
                  Read publication <FaArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/publications" className="btn-primary">
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8">
            I'm always open to interesting research collaborations and academic opportunities.
          </p>
          <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium inline-flex items-center hover:bg-opacity-90 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}