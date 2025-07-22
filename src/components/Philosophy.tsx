import React from 'react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-emerald-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Background Decorative Elements */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-teal-50/30 to-green-100/40 rounded-3xl"></div>
          <div className="absolute top-4 left-4 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-teal-200/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 p-12 md:p-16">
            <div className="space-y-8 text-center">
              <blockquote className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed italic">
                "To be transdisciplinary is to be fluent in the spaces between disciplines. 
                My work blends engineering with memory, code with ecology, and design with human emotion."
              </blockquote>
              
              <div className="space-y-4 text-lg md:text-xl text-slate-700 font-light">
                <p className="leading-relaxed">
                  I see the world as symbiotic, alive, and entangled.
                </p>
                <p className="leading-relaxed">
                  I design with questions, not just answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;