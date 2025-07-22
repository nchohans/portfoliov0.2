import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Bruxism Severity Tracker',
      description: 'Patent filed. A wearable system that detects and evaluates night teeth grinding.',
      status: 'Completed',
      category: 'Health Tech',
      tags: ['Wearables', 'Health', 'Patent'],
    },
    {
      title: 'Bioprinting Compatibility Model',
      description: 'A computational tool to predict scaffold-cell interaction.',
      status: 'Completed',
      category: 'BioTech',
      tags: ['Bioprinting', 'AI', 'Research'],
    },
    {
      title: 'Mini Tag Game',
      description: 'Game mechanic design and implementation.',
      status: 'Completed',
      category: 'Game Dev',
      tags: ['Game Design', 'Interactive'],
    },
    {
      title: 'Carbon Credit Price Predictor',
      description: 'AI model for dynamic environmental economics.',
      status: 'Completed',
      category: 'Environmental',
      tags: ['AI', 'Environment', 'Economics'],
    },
    {
      title: 'Makerspace: Navi Mumbai',
      description: "Building the city's first student-led fabrication space.",
      status: 'Ongoing',
      category: 'Community',
      tags: ['Community', 'Education', 'Fabrication'],
    },
  ];

  const filters = ['All', 'Completed', 'Ongoing', 'Concept'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Ongoing': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Concept': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-12">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                filter === filterOption
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif text-slate-800 font-semibold leading-tight flex-1">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 text-sm border rounded-full ml-4 ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-lg border border-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center text-emerald-600 hover:text-emerald-800 transition-colors duration-200">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </button>
                <button className="flex items-center text-slate-500 hover:text-slate-700 transition-colors duration-200">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;