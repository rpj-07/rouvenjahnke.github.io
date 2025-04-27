import Layout from '@/components/Layout';
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-light">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Contact</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch for research collaborations, speaking inquiries, or academic discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <FaEnvelope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-700">hello@rouvenjahnke.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office Address</h3>
                      <p className="text-gray-700">
                        Mathematics Department<br />
                        University Name<br />
                        Building Name, Office 123<br />
                        City, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-[#1DA1F2] bg-opacity-10 p-3 rounded-full mr-4">
                      <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Twitter</h3>
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        @yourusername
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#0077B5] bg-opacity-10 p-3 rounded-full mr-4">
                      <FaLinkedinIn className="h-6 w-6 text-[#0077B5]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#333333] bg-opacity-10 p-3 rounded-full mr-4">
                      <FaGithub className="h-6 w-6 text-[#333333]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">GitHub</h3>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Speaking Inquiry">Speaking Inquiry</option>
                      <option value="Academic Question">Academic Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">During Academic Term</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>14:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wednesday</span>
                    <span>10:00 - 12:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span>By appointment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">During Academic Breaks</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Tuesday</span>
                    <span>14:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday</span>
                    <span>By appointment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-gray-700">
              <p>Note: Office hours are subject to change. Please email me to confirm before visiting.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Are you available for research collaborations?</h3>
                <p className="text-gray-700">
                  Yes, I'm always interested in collaborative research projects, especially those at the intersection of mathematics, physics, and theoretical computer science. Please reach out with your proposal.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Do you supervise graduate students?</h3>
                <p className="text-gray-700">
                  I do work with graduate students whose research interests align with mine. If you're interested in working with me, please email me your CV and a brief research proposal.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Can you give a talk at our conference/seminar?</h3>
                <p className="text-gray-700">
                  I'm open to speaking engagements on topics related to my research. Please contact me with details about your event, including the date, location, audience, and topic of interest.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">How quickly do you respond to emails?</h3>
                <p className="text-gray-700">
                  I try to respond to all emails within 2-3 business days. During busy academic periods, my response time may be slightly longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}