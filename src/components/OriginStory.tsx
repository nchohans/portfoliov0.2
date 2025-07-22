import React from 'react';
import { Heart, Wrench, Lightbulb } from 'lucide-react';

const OriginStory = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-16">
          How I Became a Builder
        </h2>

        <div className="space-y-16">
          {/* Grandfather's Story */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
            <div className="pl-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-800">The Reason</h3>
              </div>
              <div className="prose prose-lg text-slate-700 leading-relaxed">
                <p>
                  My grandfather was a man who fixed things with his hands. Radios that had given up. 
                  Clocks that had forgotten time. Bicycles that had lost their way.
                </p>
                <p>
                  He never called himself an engineer, but he understood something I'm still learning: 
                  that every broken thing carries the memory of wholeness. That repair is a form of love.
                </p>
                <p>
                  When he passed, I inherited his toolbox. Inside, wrapped in cloth, was a note: 
                  <em>"Fix what matters. Build what heals."</em>
                </p>
                <p className="text-emerald-700 font-medium">
                  This machine—this life I'm building—is yours, Thatha.
                </p>
              </div>
            </div>
          </div>

          {/* Engineering Evolution */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-green-500 rounded-full"></div>
            <div className="pl-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-100 rounded-xl mr-4">
                  <Wrench className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-800">The Evolution</h3>
              </div>
              <div className="prose prose-lg text-slate-700 leading-relaxed">
                <p>
                  I started as many engineers do—believing in optimization, efficiency, the clean line 
                  from problem to solution. I built things that worked, but they didn't breathe.
                </p>
                <p>
                  Then I encountered a bioprinter that failed beautifully. The cells it was meant to 
                  organize instead created their own patterns—chaotic, alive, unpredictable. 
                  I realized I had been designing for machines, not for life.
                </p>
                <p>
                  That failure taught me to design with uncertainty. To build systems that could 
                  surprise me. To engineer not just function, but feeling.
                </p>
              </div>
            </div>
          </div>

          {/* Birth of Symmatica */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
            <div className="pl-12">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-800">The Birth</h3>
              </div>
              <div className="prose prose-lg text-slate-700 leading-relaxed">
                <p>
                  Symmatica was born in a moment of grief. I was designing a memorial—something to 
                  hold memory in physical form. I realized that everything I had been building was 
                  trying to do the same thing: create technology that could remember, feel, and heal.
                </p>
                <p>
                  The word came to me like a gift: <em>Symmatica</em>—from symbiosis and mathematics. 
                  The math of living together. The equations of care.
                </p>
                <p>
                  It's not just a methodology. It's a way of being in relationship with the world. 
                  Every project becomes a conversation between human intention and more-than-human wisdom.
                </p>
                <blockquote className="border-l-4 border-emerald-400 pl-6 italic text-emerald-700">
                  "We are not building the future. We are midwifing it into being."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;