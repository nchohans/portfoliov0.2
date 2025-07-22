import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-teal-100/30 rounded-3xl border border-emerald-100/50"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8">
              About
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
              <p>
                I am a transdisciplinary engineer blending systems thinking with emotional resonance.
              </p>
              
              <p>
                I design experiences, technologies, and frameworks that honor complexity, ecology, and memory.
                My practice draws from engineering, fine arts, computational biology, materials science, and philosophy.
              </p>
              
              <p className="text-emerald-700 font-medium">
                Currently building "Symmatica"—a field of regenerative design and system storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;