"use client";

import React from 'react';
import { GraduationCap, Calendar, MapPin, Book, Award, Users, Download, Eye, X } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [showPDFPreview, setShowPDFPreview] = React.useState(false);
  const [previewPDF, setPreviewPDF] = React.useState<string>('');

  const handlePreview = (pdfPath: string) => {
    setPreviewPDF(pdfPath);
    setShowPDFPreview(true);
  };

  const handleDownload = (pdfPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      degree: 'Bachelor of Arts, Interdisciplinary Studies',
      school: 'Columbia College Chicago',
      period: '2020 - 2024',
      location: 'Chicago, IL',
      status: 'Completed',
      color: 'from-purple-500 to-purple-600',
      description: 'Concentrated in Deaf Studies & Arts in Healthcare, building foundational knowledge in accessibility, cultural competency, and creative intervention.',
      highlights: [
        'Deaf Studies and ASL Proficiency',
        'Arts in Healthcare Applications',
        'Interdisciplinary Research Methods',
        'Community Engagement and Social Justice'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Software Engineering',
      issuer: 'Coding Temple',
      date: '2024',
      status: 'Completed',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/143670905',
      certificateUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/143670905',
      description: 'Comprehensive software engineering program covering full-stack development, algorithms, and industry best practices.',
      skills: [
        'Full-Stack Development',
        'React & Node.js',
        'Database Design',
        'API Development',
        'Testing & Deployment'
      ]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Maintained strong academic performance while balancing multiple volunteer commitments'
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Active volunteer facilitator since 2022, supporting diverse populations through creative programming'
    },
    {
      icon: Book,
      title: 'Research Focus',
      description: 'Developing expertise in accessibility, arts-based wellness, and neurodivergent-affirming practices'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building expertise through interdisciplinary study in arts, health, and accessibility
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                        {edu.status === 'Current' && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xl text-purple-400 font-semibold mb-4">{edu.school}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>
                    </div>
                    
                    <div className="lg:ml-6 flex flex-col lg:items-end">
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Highlights */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Areas of Study</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Badge */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden bg-white p-2">
                      <img
                        src={cert.badgeUrl}
                        alt={`${cert.title} Badge`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full">
                      {cert.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{cert.title}</h4>
                        <p className="text-xl text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                        <div className="flex items-center text-gray-400 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{cert.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h5 className="text-lg font-bold text-white mb-3">Key Skills Acquired</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <div className="flex gap-4">
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Academic & Professional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* PDF Preview Modal */}
        {showPDFPreview && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-6xl max-h-[95vh] overflow-hidden w-full flex flex-col border border-gray-700">
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">Resume Preview</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDownload(previewPDF, 'Aaliyah_Johnson_Resume.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button 
                    onClick={() => setShowPDFPreview(false)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-6 overflow-auto">
                <iframe
                  src={previewPDF}
                  className="w-full h-[80vh] border border-gray-700 rounded-lg"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;