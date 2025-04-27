import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaArrowLeft, FaCalendar, FaTag, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Sample blog post data (simplified version of what would be in a database or CMS)
const blogPosts = [
  {
    id: 'spectral-theory-introduction',
    title: 'A Gentle Introduction to Spectral Theory',
    date: 'March 15, 2023',
    content: `
      <h2>Introduction to Spectral Theory</h2>
      
      <p>Spectral theory is a rich and deep area of mathematics that studies the properties of linear operators through their spectra. The spectrum of an operator is a generalization of the set of eigenvalues of a matrix. In this post, I'll introduce some key concepts of spectral theory in a way that should be accessible to those with a basic understanding of linear algebra and calculus.</p>
      
      <h3>What is Spectral Theory?</h3>
      
      <p>At its core, spectral theory is about decomposing complex objects into simpler components, much like how we can break down a musical sound into its constituent pure tones or frequencies (hence the name "spectral").</p>
      
      <p>In linear algebra, when we have a matrix A, we're often interested in finding its eigenvalues and eigenvectors. Recall that an eigenvalue λ and eigenvector v satisfy Av = λv. The set of all eigenvalues is called the spectrum of the matrix.</p>
      
      <p>Spectral theory extends this concept to more general operators, especially those acting on infinite-dimensional spaces. The applications span across mathematics, physics, and engineering.</p>

      <h3>The Spectral Theorem</h3>

      <p>The pinnacle of spectral theory for many applications is the spectral theorem. In its simplest form for finite-dimensional spaces, it states that any normal matrix (a matrix A such that AA* = A*A, where A* is the conjugate transpose) can be diagonalized by a unitary matrix.</p>

      <p>In the infinite-dimensional case, this generalizes to the statement that self-adjoint operators on Hilbert spaces can be "diagonalized" in a suitable sense using projection-valued measures.</p>

      <h3>Applications in Quantum Mechanics</h3>

      <p>Spectral theory forms the mathematical backbone of quantum mechanics. Observables in quantum mechanics are represented by self-adjoint operators, and the possible outcomes of measurements correspond to the spectrum of these operators.</p>

      <p>For example, the energy levels of a quantum system are the eigenvalues of the Hamiltonian operator. The famous Schrödinger equation is essentially a spectral problem.</p>

      <h3>Conclusion</h3>

      <p>Spectral theory provides a powerful framework for understanding complex linear systems by breaking them down into simpler components. Whether you're interested in pure mathematics, quantum physics, or signal processing, understanding spectral theory opens up new ways of thinking about your problems.</p>

      <p>In future posts, I'll delve deeper into specific aspects of spectral theory and its applications.</p>
    `,
    category: 'Mathematical Analysis',
    tags: ['spectral theory', 'functional analysis', 'tutorial'],
    author: 'Rouven Jahnke',
    authorBio: 'PhD Candidate in Mathematics, specializing in functional analysis and operator theory.',
    relatedPosts: ['hilbert-spaces-explained', 'quantum-measurement-paradoxes']
  },
  {
    id: 'hilbert-spaces-explained',
    title: 'Hilbert Spaces Explained: From Basics to Applications',
    date: 'December 12, 2022',
    content: `
      <h2>Understanding Hilbert Spaces</h2>
      
      <p>Hilbert spaces are one of the most important types of vector spaces in mathematics, especially in functional analysis and quantum mechanics. Named after the German mathematician David Hilbert, these spaces generalize the notion of Euclidean space to potentially infinite dimensions.</p>
      
      <h3>Definition and Basic Properties</h3>
      
      <p>A Hilbert space H is a complete inner product space. This means:</p>
      <ul>
        <li>It's a vector space with an inner product &lt;·,·&gt; that defines notions of length and angle</li>
        <li>It's complete with respect to the norm induced by this inner product, meaning that all Cauchy sequences converge</li>
      </ul>
      
      <p>The simplest example of a Hilbert space is the Euclidean space ℝⁿ with the standard dot product. But the real power of Hilbert spaces emerges when we consider infinite-dimensional examples.</p>

      <h3>The Space L²</h3>

      <p>Perhaps the most important example of an infinite-dimensional Hilbert space is L²(a,b), the space of square-integrable functions on an interval [a,b]. The inner product here is defined as:</p>

      <p>&lt;f,g&gt; = ∫ₐᵇ f(x)g̅(x) dx</p>

      <p>where g̅ is the complex conjugate of g.</p>

      <h3>Orthogonality and Bases</h3>

      <p>Just as in Euclidean space, the concept of orthogonality is crucial in Hilbert spaces. Two vectors u and v are orthogonal if &lt;u,v&gt; = 0.</p>

      <p>A key feature of Hilbert spaces is that they admit orthonormal bases, which are sets of orthonormal vectors such that any vector in the space can be expressed as a (potentially infinite) linear combination of these basis vectors.</p>

      <h3>Applications in Quantum Mechanics</h3>

      <p>In quantum mechanics, the state of a quantum system is represented as a vector in a Hilbert space. The inner product provides probabilities: if |ψ⟩ is the state vector and |φ⟩ is an eigenvector of an observable, then |&lt;φ|ψ&gt;|² gives the probability of measuring the corresponding eigenvalue.</p>

      <h3>Conclusion</h3>

      <p>Hilbert spaces provide a rich mathematical framework that bridges linear algebra, analysis, and geometry. Their applications extend from pure mathematics to quantum physics and signal processing.</p>

      <p>In future posts, I'll explore specific aspects of Hilbert spaces, including the spectral theory of operators acting on these spaces.</p>
    `,
    category: 'Mathematical Analysis',
    tags: ['hilbert spaces', 'functional analysis', 'tutorial'],
    author: 'Rouven Jahnke',
    authorBio: 'PhD Candidate in Mathematics, specializing in functional analysis and operator theory.',
    relatedPosts: ['spectral-theory-introduction', 'quantum-measurement-paradoxes']
  }
];

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the post with the matching ID
  const post = blogPosts.find(post => post.id === id);
  
  // If the post doesn't exist or the page is still loading
  if (!post) {
    return (
      <Layout>
        <div className="section-container">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">
              {!id ? 'Loading...' : 'Post not found'}
            </h1>
            {id && (
              <Link href="/blog" className="text-primary hover:underline">
                Return to blog
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <article className="bg-light">
        <div className="section-container">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
              <FaArrowLeft className="mr-2" /> Back to all articles
            </Link>
          </div>
          
          {/* Article header */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="mb-4">
              <span className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-6">
              <span className="flex items-center mr-6 mb-2">
                <FaCalendar className="mr-2" />
                {post.date}
              </span>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full">
                    <FaTag className="mr-1" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  RJ
                </div>
              </div>
              <div>
                <div className="font-bold">{post.author}</div>
                <div className="text-sm text-gray-600">{post.authorBio}</div>
              </div>
            </div>
          </div>
          
          {/* Article content */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          
          {/* Social sharing */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/intent/tweet?url=https://rouvenjahnke.com/blog/${post.id}&text=${post.title}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rouvenjahnke.com/blog/${post.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-opacity-90 transition"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {post.relatedPosts.map(relatedId => {
                  const relatedPost = blogPosts.find(p => p.id === relatedId);
                  if (!relatedPost) return null;
                  
                  return (
                    <div key={relatedId} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{relatedPost.date}</div>
                        <h3 className="text-xl font-bold mb-3">
                          <Link href={`/blog/${relatedPost.id}`} className="text-primary hover:underline">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {relatedPost.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="inline-flex items-center text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                              <FaTag className="mr-1" /> {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={`/blog/${relatedPost.id}`} className="text-primary font-medium hover:underline">
                          Read article →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Newsletter signup */}
          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
              <p className="mb-6">
                Get notified when I publish new articles and research updates. No spam, unsubscribe anytime.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}