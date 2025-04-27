import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaTag, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

// Sample blog post data
const blogPosts = [
  {
    id: 'spectral-theory-introduction',
    title: 'A Gentle Introduction to Spectral Theory',
    date: 'March 15, 2023',
    excerpt: 'Spectral theory is a beautiful area of mathematics that connects functional analysis, operator theory, and quantum mechanics. In this post, I will introduce some key concepts and intuitions.',
    category: 'Mathematical Analysis',
    tags: ['spectral theory', 'functional analysis', 'tutorial'],
    readTime: '8 min read',
    image: '/blog-placeholder.jpg'
  },
  {
    id: 'group-theory-quantum-computing',
    title: 'Group Theory and Its Applications in Quantum Computing',
    date: 'February 8, 2023',
    excerpt: 'Group theory provides a powerful framework for understanding quantum algorithms. This post explores how algebraic structures underlie quantum computational advantages.',
    category: 'Abstract Algebra',
    tags: ['group theory', 'quantum computing', 'algorithms'],
    readTime: '12 min read',
    image: '/blog-placeholder.jpg'
  },
  {
    id: 'mathematical-research-workflow',
    title: 'My Mathematical Research Workflow: Tools and Techniques',
    date: 'January 22, 2023',
    excerpt: 'In this post, I share my personal approach to mathematical research, including software tools, note-taking systems, and strategies for tackling difficult problems.',
    category: 'Research Methods',
    tags: ['research', 'productivity', 'tools'],
    readTime: '10 min read',
    image: '/blog-placeholder.jpg'
  },
  {
    id: 'hilbert-spaces-explained',
    title: 'Hilbert Spaces Explained: From Basics to Applications',
    date: 'December 12, 2022',
    excerpt: 'Hilbert spaces are fundamental to many areas of mathematics and physics. This post provides an accessible introduction to these infinite-dimensional vector spaces.',
    category: 'Mathematical Analysis',
    tags: ['hilbert spaces', 'functional analysis', 'tutorial'],
    readTime: '15 min read',
    image: '/blog-placeholder.jpg'
  },
  {
    id: 'category-theory-introduction',
    title: 'Why Category Theory Matters for Mathematicians',
    date: 'November 5, 2022',
    excerpt: 'Category theory has revolutionized how mathematicians think about structures and relationships. This post explains why this abstract framework is so powerful.',
    category: 'Abstract Algebra',
    tags: ['category theory', 'foundations', 'mathematical thinking'],
    readTime: '11 min read',
    image: '/blog-placeholder.jpg'
  },
  {
    id: 'quantum-measurement-paradoxes',
    title: 'Quantum Measurement Paradoxes: A Mathematical Perspective',
    date: 'October 18, 2022',
    excerpt: 'Quantum measurement continues to puzzle physicists and philosophers. This post examines these paradoxes from a rigorous mathematical viewpoint.',
    category: 'Mathematical Physics',
    tags: ['quantum mechanics', 'measurement theory', 'foundations'],
    readTime: '14 min read',
    image: '/blog-placeholder.jpg'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = ['all', 'Mathematical Analysis', 'Abstract Algebra', 'Mathematical Physics', 'Research Methods'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-light">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on mathematics, research, and academia.
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
                      placeholder="Search articles by title or content..."
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
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                      {post.category === 'Mathematical Analysis' && 'MA'}
                      {post.category === 'Abstract Algebra' && 'AA'}
                      {post.category === 'Mathematical Physics' && 'MP'}
                      {post.category === 'Research Methods' && 'RM'}
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {post.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">
                      <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                          <FaTag className="mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="text-primary font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center mb-16">
              <h2 className="text-xl font-bold mb-2">No articles found</h2>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find blog posts.
              </p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-primary text-white rounded-lg shadow-md overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="mb-6">
                  Stay updated with my latest research, blog posts, and mathematical insights. I send updates monthly, no spam.
                </p>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-secondary"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  ∑ ∫ ∞ ∂
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                href="/blog?category=Mathematical+Analysis" 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  setCategoryFilter('Mathematical Analysis');
                }}
              >
                <div className="text-3xl mb-3">∫</div>
                <h3 className="font-bold">Mathematical Analysis</h3>
                <p className="text-sm text-gray-600">{blogPosts.filter(post => post.category === 'Mathematical Analysis').length} articles</p>
              </Link>
              
              <Link 
                href="/blog?category=Abstract+Algebra" 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  setCategoryFilter('Abstract Algebra');
                }}
              >
                <div className="text-3xl mb-3">⊕</div>
                <h3 className="font-bold">Abstract Algebra</h3>
                <p className="text-sm text-gray-600">{blogPosts.filter(post => post.category === 'Abstract Algebra').length} articles</p>
              </Link>
              
              <Link 
                href="/blog?category=Mathematical+Physics" 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  setCategoryFilter('Mathematical Physics');
                }}
              >
                <div className="text-3xl mb-3">Ψ</div>
                <h3 className="font-bold">Mathematical Physics</h3>
                <p className="text-sm text-gray-600">{blogPosts.filter(post => post.category === 'Mathematical Physics').length} articles</p>
              </Link>
              
              <Link 
                href="/blog?category=Research+Methods" 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  setCategoryFilter('Research Methods');
                }}
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold">Research Methods</h3>
                <p className="text-sm text-gray-600">{blogPosts.filter(post => post.category === 'Research Methods').length} articles</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}