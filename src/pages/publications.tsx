import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaDownload, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

// Sample publication data
const publications = [
  {
    id: 'functional-analysis',
    title: 'Novel Approaches to Functional Analysis in Hilbert Spaces',
    journal: 'Journal of Mathematical Analysis',
    year: 2023,
    coauthors: ['J. Smith', 'K. Johnson'],
    abstract: 'This paper introduces new methodologies for analyzing functions in infinite-dimensional Hilbert spaces, with applications to quantum mechanics. We develop a novel framework for understanding the spectral properties of unbounded operators and explore their connections to quantum observables.',
    keywords: ['functional analysis', 'hilbert spaces', 'spectral theory', 'quantum mechanics'],
    category: 'analysis',
    doi: '10.1234/jma.2023.1234',
    link: '/publications/functional-analysis'
  },
  {
    id: 'quantum-algorithms',
    title: 'Group Theoretic Foundations of Quantum Algorithms',
    journal: 'Theoretical Mathematics Quarterly',
    year: 2022,
    coauthors: ['L. Chen'],
    abstract: 'This research explores the algebraic structures underlying quantum computational models and their efficiency implications. We establish a comprehensive group-theoretic framework for analyzing quantum algorithms and demonstrate how symmetry considerations can lead to algorithmic speedups.',
    keywords: ['group theory', 'quantum computing', 'algorithms', 'computational complexity'],
    category: 'algebra',
    doi: '10.5678/tmq.2022.5678',
    link: '/publications/quantum-algorithms'
  },
  {
    id: 'spectral-properties',
    title: 'Spectral Properties of Non-Self-Adjoint Operators',
    journal: 'Functional Analysis Quarterly',
    year: 2022,
    coauthors: [],
    abstract: 'We investigate the spectral properties of non-self-adjoint operators arising in dissipative quantum systems. The paper develops new mathematical tools for analyzing the complex spectra of these operators and their physical interpretations.',
    keywords: ['spectral theory', 'non-self-adjoint operators', 'quantum dissipation'],
    category: 'analysis',
    doi: '10.9012/faq.2022.9012',
    link: '/publications/spectral-properties'
  },
  {
    id: 'error-correction',
    title: 'Algebraic Structures in Quantum Error Correction',
    journal: 'Journal of Algebra and Computation',
    year: 2021,
    coauthors: ['M. Williams', 'S. Garcia'],
    abstract: 'This paper explores the algebraic foundations of quantum error correction codes. We develop a new framework based on group theory and representation theory to design and analyze quantum error-correcting codes with improved performance.',
    keywords: ['quantum error correction', 'group theory', 'representation theory'],
    category: 'algebra',
    doi: '10.3456/jac.2021.3456',
    link: '/publications/error-correction'
  },
  {
    id: 'statistical-mechanics',
    title: 'Operator Algebraic Approach to Quantum Statistical Mechanics',
    journal: 'Journal of Mathematical Physics',
    year: 2022,
    coauthors: ['A. Patel'],
    abstract: 'We develop a rigorous operator-algebraic framework for quantum statistical mechanics. The paper establishes connections between C*-algebraic techniques and the thermodynamic properties of quantum systems.',
    keywords: ['operator algebras', 'statistical mechanics', 'quantum physics', 'thermodynamics'],
    category: 'physics',
    doi: '10.7890/jmp.2022.7890',
    link: '/publications/statistical-mechanics'
  },
  {
    id: 'geometric-methods',
    title: 'Geometric Methods in Quantum Theory',
    journal: 'Annals of Physics',
    year: 2021,
    coauthors: [],
    abstract: 'This paper explores differential geometric approaches to quantum theory. We develop a geometric framework for understanding quantum states and observables, with applications to quantum information theory and quantum foundation questions.',
    keywords: ['differential geometry', 'quantum theory', 'symplectic geometry'],
    category: 'physics',
    doi: '10.2345/ap.2021.2345',
    link: '/publications/geometric-methods'
  }
];

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.coauthors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || pub.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-light">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Publications</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A collection of my research papers in mathematical analysis, abstract algebra, and mathematical physics.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search publications by title, keywords, or abstract..."
                      className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <select
                    className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="analysis">Mathematical Analysis</option>
                    <option value="algebra">Abstract Algebra</option>
                    <option value="physics">Mathematical Physics</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-8 mb-16">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4 flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-2">{pub.title}</h2>
                      <div className="text-gray-600 mb-1">
                        {pub.journal} • {pub.year}
                      </div>
                      <div className="text-gray-600 mb-3">
                        {pub.coauthors.length > 0 
                          ? `With: ${pub.coauthors.join(', ')}` 
                          : 'Single Author'}
                      </div>
                    </div>
                    <div className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {pub.category === 'analysis' && 'Mathematical Analysis'}
                      {pub.category === 'algebra' && 'Abstract Algebra'}
                      {pub.category === 'physics' && 'Mathematical Physics'}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href={pub.link} className="text-primary font-medium inline-flex items-center hover:underline">
                      Read full paper <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                    </Link>
                    <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                      Download PDF <FaDownload className="ml-1 h-3 w-3" />
                    </a>
                    <a 
                      href={`https://doi.org/${pub.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      DOI: {pub.doi} <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">No publications found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find publications.
                </p>
              </div>
            )}
          </div>

          {/* Citation Information */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6">Citation Information</h2>
            <p className="text-gray-700 mb-6">
              If you use or reference my work in your research, please use one of the following citation formats:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-2">AMS Format</h3>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  Jahnke, R. Novel Approaches to Functional Analysis in Hilbert Spaces. <i>Journal of Mathematical Analysis</i>, Vol. X, No. Y (2023), pp. ZZZ-ZZZ.
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">BibTeX Format</h3>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  @article&#123;jahnke2023novel,<br/>
                  &nbsp;&nbsp;title=&#123;Novel Approaches to Functional Analysis in Hilbert Spaces&#125;,<br/>
                  &nbsp;&nbsp;author=&#123;Jahnke, Rouven&#125;,<br/>
                  &nbsp;&nbsp;journal=&#123;Journal of Mathematical Analysis&#125;,<br/>
                  &nbsp;&nbsp;volume=&#123;X&#125;,<br/>
                  &nbsp;&nbsp;number=&#123;Y&#125;,<br/>
                  &nbsp;&nbsp;pages=&#123;ZZZ--ZZZ&#125;,<br/>
                  &nbsp;&nbsp;year=&#123;2023&#125;,<br/>
                  &nbsp;&nbsp;publisher=&#123;Publisher Name&#125;<br/>
                  &#125;
                </div>
              </div>
            </div>
          </div>

          {/* Pre-prints and Upcoming Work */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Pre-prints and Upcoming Work</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Topological Methods in Quantum Field Theory</h3>
                <p className="text-gray-600 mb-2">Pre-print, Expected publication: 2024</p>
                <p className="text-gray-700 mb-4">
                  This paper explores the application of topological methods to problems in quantum field theory, focusing on topological invariants and their physical interpretations.
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                  View pre-print <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Category-Theoretic Foundations of Quantum Information</h3>
                <p className="text-gray-600 mb-2">Work in progress</p>
                <p className="text-gray-700">
                  This ongoing research project aims to develop a comprehensive category-theoretic framework for quantum information theory, emphasizing compositional structures and their operational interpretations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}