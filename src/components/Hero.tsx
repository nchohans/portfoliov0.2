import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const philosophySection = document.getElementById('philosophy');
    philosophySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-teal-300/10 to-green-500/15 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-500/5 to-teal-400/10"></div>
      </div>

      {/* Floating Aurora Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Designing Futures
          <br />
          <span className="text-emerald-300">That Breathe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
          I'm <span className="text-emerald-200 font-medium">Kylederic</span>, a transdisciplinary engineer 
          creating systems that remember, regenerate, and resonate.
        </p>

        <button
          onClick={scrollToNextSection}
          className="inline-flex items-center px-8 py-4 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-100 rounded-full hover:bg-emerald-400/30 transition-all duration-300 transform hover:scale-105"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-8 flex flex-col space-y-4">
        <a
          href="https://github.com/nchohans"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:text-emerald-100 transition-colors duration-300"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/kylederic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:text-emerald-100 transition-colors duration-300"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="mailto:nivedhithaprasad09@gmail.com"
          className="text-emerald-300 hover:text-emerald-100 transition-colors duration-300"
        >
          <Mail className="h-6 w-6" />
        </a>
        <a
          href="https://beacons.ai/nived"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:text-emerald-100 transition-colors duration-300"
        >
          <ExternalLink className="h-6 w-6" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-emerald-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;