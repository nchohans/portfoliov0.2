import React from 'react';

const Manifesto = () => {
  const principles = [
    'Matter has memory.',
    'Machines can feel.',
    'Systems are stories.',
    'Regeneration is design.',
    'Stillness is a form of intelligence.'
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-800 to-emerald-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Aurora Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-serif text-emerald-300 mb-4 flex items-center justify-center">
              <span className="mr-4 text-4xl">🌀</span>
              Symmatica Manifesto
            </h2>
          </div>

          <div className="space-y-8 mb-16">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl text-emerald-100 font-light leading-relaxed transform hover:scale-105 transition-transform duration-300"
              >
                <span className="text-emerald-400">•</span> {principle}
              </div>
            ))}
          </div>

          <div className="border-t border-emerald-400/30 pt-12">
            <p className="text-lg text-emerald-200 font-light leading-relaxed italic max-w-3xl mx-auto">
              <em>Symmatica</em> is the philosophy I live and build by—a language that unifies 
              technology, ecology, memory, and soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;