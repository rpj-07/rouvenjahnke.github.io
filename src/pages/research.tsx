import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Research() {
  return (
    <Layout>
      <div className="bg-light">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Research</h1>
            <p className="text-xl max-w-3xl mx-auto">
              My research focuses on exploring mathematical structures and their applications in theoretical physics.
            </p>
          </div>

          {/* Research Areas */}
          <div id="analysis" className="mb-24">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="heading-md">Mathematical Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="prose">
                <p className="mb-4">
                  My work in mathematical analysis focuses on functional analysis, operator theory, and their applications to quantum mechanics. I am particularly interested in the study of unbounded operators on Hilbert spaces and their relation to quantum observables.
                </p>
                <p className="mb-4">
                  Recent projects in this area include:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Novel approaches to spectral theory in non-commutative settings</li>
                  <li>Trace-class operators and their applications to quantum statistical mechanics</li>
                  <li>Fredholm theory and its extensions to non-linear operators</li>
                </ul>
                <p>
                  This research has implications for both pure mathematics and theoretical physics, providing new tools for understanding quantum systems and their mathematical foundations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Key Publications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold">Novel Approaches to Functional Analysis in Hilbert Spaces</h4>
                    <p className="text-gray-600 mb-2">Journal of Mathematical Analysis (2023)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/functional-analysis" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Spectral Properties of Non-Self-Adjoint Operators</h4>
                    <p className="text-gray-600 mb-2">Functional Analysis Quarterly (2022)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/spectral-properties" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="algebra" className="mb-24">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="heading-md">Abstract Algebra</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="prose">
                <p className="mb-4">
                  My research in abstract algebra focuses on group theory, representation theory, and their applications to quantum physics and quantum computing. I am particularly interested in the algebraic structures that underlie quantum algorithms and quantum error correction.
                </p>
                <p className="mb-4">
                  Recent projects in this area include:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Group-theoretic approaches to quantum error correction codes</li>
                  <li>Representation theory and its applications to quantum information theory</li>
                  <li>Algebraic structures in topological quantum computing</li>
                </ul>
                <p>
                  This research bridges pure mathematics and quantum information science, providing new perspectives on quantum computational models.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Key Publications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold">Group Theoretic Foundations of Quantum Algorithms</h4>
                    <p className="text-gray-600 mb-2">Theoretical Mathematics Quarterly (2022)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/quantum-algorithms" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Algebraic Structures in Quantum Error Correction</h4>
                    <p className="text-gray-600 mb-2">Journal of Algebra and Computation (2021)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/error-correction" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="physics" className="mb-24">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="heading-md">Mathematical Physics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="prose">
                <p className="mb-4">
                  In mathematical physics, my research focuses on the mathematical foundations of quantum theory, quantum field theory, and related areas. I am particularly interested in rigorous approaches to quantum mechanics using functional analysis and operator algebras.
                </p>
                <p className="mb-4">
                  Recent projects in this area include:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Operator algebraic approach to quantum statistical mechanics</li>
                  <li>Mathematical foundations of quantum measurement theory</li>
                  <li>Geometric methods in quantum physics</li>
                </ul>
                <p>
                  This research seeks to provide rigorous mathematical foundations for physical theories, bridging the gap between mathematics and theoretical physics.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Key Publications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold">Operator Algebraic Approach to Quantum Statistical Mechanics</h4>
                    <p className="text-gray-600 mb-2">Journal of Mathematical Physics (2022)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/statistical-mechanics" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Geometric Methods in Quantum Theory</h4>
                    <p className="text-gray-600 mb-2">Annals of Physics (2021)</p>
                    <div className="flex space-x-4">
                      <Link href="/publications/geometric-methods" className="text-primary font-medium inline-flex items-center hover:underline">
                        Read paper <FaArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                        Download PDF <FaDownload className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Methodology */}
          <div className="mb-24">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="heading-md">Research Methodology</h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <p className="mb-4">
                  My research approach combines rigorous mathematical analysis with an eye toward applications in theoretical physics and quantum information science. I employ a variety of techniques from functional analysis, abstract algebra, and differential geometry to address fundamental questions in these areas.
                </p>
                <p className="mb-4">
                  My methodology typically involves:
                </p>
                <ol className="list-decimal list-inside mb-4">
                  <li className="mb-2">Identifying fundamental mathematical structures underlying physical or computational phenomena</li>
                  <li className="mb-2">Developing rigorous mathematical frameworks to analyze these structures</li>
                  <li className="mb-2">Deriving theoretical results with potential applications in physics or computer science</li>
                  <li className="mb-2">Collaborating with physicists and computer scientists to explore the implications of these results</li>
                </ol>
                <p>
                  This interdisciplinary approach allows me to contribute both to pure mathematics and to the mathematical foundations of physics and quantum computing.
                </p>
              </div>
            </div>
          </div>

          {/* Collaborations */}
          <div className="mb-16">
            <div className="border-l-4 border-primary pl-6 mb-8">
              <h2 className="heading-md">Research Collaborations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3">Quantum Information Theory Group</h3>
                <p className="text-gray-600 mb-4">University Name</p>
                <p className="text-sm">
                  Collaboration on algebraic approaches to quantum error correction and quantum algorithms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3">Mathematical Physics Laboratory</h3>
                <p className="text-gray-600 mb-4">Research Institute Name</p>
                <p className="text-sm">
                  Joint research on operator algebraic approaches to quantum statistical mechanics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3">Theoretical Computer Science Group</h3>
                <p className="text-gray-600 mb-4">University Name</p>
                <p className="text-sm">
                  Interdisciplinary work on mathematical foundations of quantum computing.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-lg mb-6">
              I'm always open to new research collaborations and discussions about mathematics.
            </p>
            <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-opacity-90 transition">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}