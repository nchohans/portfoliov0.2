import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const FilmAsResearch = () => {
  const [activeFilm, setActiveFilm] = useState(0);

  const films = [
    {
      title: 'Annihilation',
      lesson: 'Biology is unknowable. That\'s okay.',
      research: 'Taught me to design for mystery. Some systems should remain opaque. The shimmer in the film mirrors the uncertainty I try to build into my bioprinting work.',
      color: 'from-green-900/20 to-emerald-800/20',
      gradient: 'from-green-400/10 to-emerald-500/10'
    },
    {
      title: 'Gautham Menon\'s VTV',
      lesson: 'Emotion has physics.',
      research: 'The way love moves through time in this film—accelerating, decelerating, looping back. It taught me that user interfaces should have emotional physics, not just functional ones.',
      color: 'from-rose-900/20 to-pink-800/20',
      gradient: 'from-rose-400/10 to-pink-500/10'
    },
    {
      title: 'Arrival',
      lesson: 'Time loops. So do relationships.',
      research: 'Non-linear time as a design principle. The heptapods\' circular language inspired my approach to regenerative systems—where end states feed back into beginnings.',
      color: 'from-blue-900/20 to-cyan-800/20',
      gradient: 'from-blue-400/10 to-cyan-500/10'
    },
    {
      title: 'Her',
      lesson: 'Intimacy scales infinitely.',
      research: 'How do we design AI that can love many without loving less? The film\'s exploration of distributed intimacy influences my thinking on ethical AI relationships.',
      color: 'from-orange-900/20 to-amber-800/20',
      gradient: 'from-orange-400/10 to-amber-500/10'
    },
    {
      title: 'Blade Runner 2049',
      lesson: 'Memory makes us human.',
      research: 'The question of implanted memories resonates with my materials work. If matter has memory, what happens when we give it false memories? What are the ethics of designed nostalgia?',
      color: 'from-purple-900/20 to-indigo-800/20',
      gradient: 'from-purple-400/10 to-indigo-500/10'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Film Ambiance */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${films[activeFilm].gradient} transition-all duration-1000`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Film as Research
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I treat films as study, not escape. These stories changed how I build and feel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Film List */}
          <div className="space-y-4">
            {films.map((film, index) => (
              <div
                key={index}
                onClick={() => setActiveFilm(index)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                  activeFilm === index
                    ? 'bg-white/10 border-white/30 transform scale-105'
                    : 'bg-slate-800/30 border-slate-600/30 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif text-white">
                    {film.title}
                  </h3>
                  <div className="text-white/60">
                    {activeFilm === index ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </div>
                </div>
                <blockquote className="text-emerald-300 italic mb-3">
                  "{film.lesson}"
                </blockquote>
                {activeFilm === index && (
                  <p className="text-slate-300 leading-relaxed animate-fade-in-up">
                    {film.research}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${films[activeFilm].color} transition-all duration-1000`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {films[activeFilm].title}
                  </h3>
                  <p className="text-emerald-300 italic">
                    "{films[activeFilm].lesson}"
                  </p>
                </div>
              </div>
              
              {/* Ambient Animation */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce"></div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-600/50">
              <h4 className="text-lg font-serif text-white mb-3">Research Notes:</h4>
              <p className="text-slate-300 leading-relaxed">
                {films[activeFilm].research}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-12 border-t border-slate-600">
          <p className="text-lg text-slate-400 font-light italic max-w-2xl mx-auto leading-relaxed">
            Cinema teaches us to see time differently. Every frame is a prototype for how reality could unfold.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilmAsResearch;