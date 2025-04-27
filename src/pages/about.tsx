import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <div className="bg-light">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">About Me</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mathematics researcher with a passion for exploring complex theoretical frameworks and their applications.
            </p>
          </div>

          {/* Biography Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                RJ
              </div>
            </div>

            <div className="prose">
              <h2 className="heading-md mb-6">Biography</h2>
              <p className="mb-4">
                I am a PhD candidate in Mathematics at [University Name], where my research focuses on the intersection of abstract algebra, mathematical analysis, and their applications to theoretical physics.
              </p>
              <p className="mb-4">
                My academic journey began with a bachelor's degree in Mathematics from [University Name], followed by a master's degree where I specialized in functional analysis and algebraic topology.
              </p>
              <p className="mb-4">
                My doctoral research explores novel mathematical frameworks for understanding quantum systems, particularly through the lens of group theory and operator algebras.
              </p>
              <p>
                Beyond research, I am passionate about mathematics education and making complex mathematical concepts accessible to students at all levels.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="mb-20">
            <h2 className="heading-md text-center mb-10">Research Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-4">Mathematical Analysis</div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Functional Analysis</li>
                  <li>Operator Theory</li>
                  <li>Dynamical Systems</li>
                  <li>Differential Equations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-4">Abstract Algebra</div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Group Theory</li>
                  <li>Representation Theory</li>
                  <li>Algebraic Structures</li>
                  <li>Category Theory</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-4">Applications</div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Quantum Mechanics</li>
                  <li>Mathematical Physics</li>
                  <li>Quantum Computing</li>
                  <li>Theoretical Computer Science</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="heading-md text-center mb-10">Education</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">PhD in Mathematics</h3>
                  <div className="text-gray-600">Expected 2026</div>
                </div>
                <div className="text-primary mb-4">University Name</div>
                <p className="text-gray-700">
                  Dissertation: "Title of Your PhD Research" (in progress)
                </p>
                <p className="text-gray-700">
                  Advisor: Prof. [Advisor Name]
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">M.Sc. in Mathematics</h3>
                  <div className="text-gray-600">2021</div>
                </div>
                <div className="text-primary mb-4">University Name</div>
                <p className="text-gray-700">
                  Thesis: "Title of Your Master's Thesis"
                </p>
                <p className="text-gray-700">
                  Concentration: Mathematical Analysis and Algebra
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">B.Sc. in Mathematics</h3>
                  <div className="text-gray-600">2019</div>
                </div>
                <div className="text-primary mb-4">University Name</div>
                <p className="text-gray-700">
                  Minor: Theoretical Physics
                </p>
                <p className="text-gray-700">
                  Graduated with honors (summa cum laude)
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="heading-md mb-6">Let's Connect</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              I'm always interested in new research collaborations, speaking opportunities, or discussions about mathematics.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}