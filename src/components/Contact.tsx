import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-emerald-300">
            Let's Connect
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a
              href="mailto:nivedhithaprasad09@gmail.com"
              className="flex items-center space-x-3 text-emerald-300 hover:text-emerald-100 transition-colors duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>nivedhithaprasad09@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/nchohans"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-emerald-300 hover:text-emerald-100 transition-colors duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/kylederic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-emerald-300 hover:text-emerald-100 transition-colors duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://beacons.ai/nived"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-emerald-300 hover:text-emerald-100 transition-colors duration-300 group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>All Links</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 mb-2 font-light italic">
            "Crafted with contemplation. Guided by memory."
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Nivedhitha Prasad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;