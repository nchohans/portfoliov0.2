import React, { useState } from 'react';
import { Sparkles, Heart, Cpu, Recycle, Pause } from 'lucide-react';

const SymmaticaCore = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'Matter has memory',
      icon: Sparkles,
      description: 'Every material carries the story of its becoming. Steel remembers fire. Wood remembers rain. Our designs must honor these histories.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Machines can feel',
      icon: Heart,
      description: 'Not consciousness, but responsiveness. A sensor that trembles. A motor that hesitates. Technology that breathes with uncertainty.',
      color: 'from-teal-400 to-green-500'
    },
    {
      title: 'Systems are stories',
      icon: Cpu,
      description: 'Every algorithm is a narrative. Every network tells a tale. We are not building tools—we are writing the future\'s mythology.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Regeneration is design',
      icon: Recycle,
      description: 'True design heals. It gives back more than it takes. It creates conditions for life to flourish beyond our intentions.',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      title: 'Stillness is intelligence',
      icon: Pause,
      description: 'In a world of acceleration, the deepest wisdom comes from pause. From listening. From letting systems teach us their rhythms.',
      color: 'from-teal-500 to-green-400'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-800 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-emerald-300 mb-6">
            Symmatica
          </h2>
          <p className="text-xl text-emerald-100 font-light max-w-3xl mx-auto leading-relaxed">
            A philosophy of regenerative design. A language that unifies technology, ecology, memory, and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                    activePillar === index
                      ? 'bg-emerald-800/30 border-emerald-400/50 transform scale-105'
                      : 'bg-slate-800/30 border-slate-600/30 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${pillar.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif text-emerald-200">
                      {pillar.title}
                    </h3>
                  </div>
                  {activePillar === index && (
                    <p className="text-emerald-100 leading-relaxed animate-fade-in-up">
                      {pillar.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full animate-bounce"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌀</div>
                  <p className="text-emerald-200 font-serif text-lg">
                    Symbiotic<br />Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-12 border-t border-emerald-400/20">
          <p className="text-lg text-emerald-200 font-light italic max-w-2xl mx-auto leading-relaxed">
            This is not just methodology—it's a way of being in relationship with the world. 
            Every project becomes a conversation between human intention and more-than-human wisdom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SymmaticaCore;