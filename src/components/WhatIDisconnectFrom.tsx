import React from 'react';
import { X, Smartphone, Zap, Clock } from 'lucide-react';

const WhatIDisconnectFrom = () => {
  const disconnections = [
    {
      title: 'Social Media',
      icon: Smartphone,
      reason: 'The attention economy commodifies presence.',
      alternative: 'I choose slow, intentional communication. Letters. Long conversations. Presence over performance.',
      color: 'from-red-100 to-rose-100'
    },
    {
      title: 'Mainstream Tech',
      icon: Zap,
      reason: 'Move fast and break things breaks more than things.',
      alternative: 'I build slowly, with care. Every line of code is a commitment to the future.',
      color: 'from-orange-100 to-amber-100'
    },
    {
      title: 'Toxic Productivity',
      icon: Clock,
      reason: 'Optimization culture optimizes away the soul.',
      alternative: 'I work in seasons. Rest is not the absence of work—it\'s a different kind of intelligence.',
      color: 'from-yellow-100 to-lime-100'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-slate-100 rounded-2xl mr-4">
              <X className="h-8 w-8 text-slate-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800">
              What I Disconnect From
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sometimes the most radical act is to step away. These are the systems I've chosen 
            to disconnect from, and what I've chosen instead.
          </p>
        </div>

        <div className="space-y-8">
          {disconnections.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} p-8 border border-slate-200/50`}
              >
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-white/50 rounded-xl">
                        <IconComponent className="h-8 w-8 text-slate-700" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-slate-800 mb-3">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">
                            Why I Stepped Away
                          </h4>
                          <p className="text-slate-700 leading-relaxed">
                            {item.reason}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">
                            What I Choose Instead
                          </h4>
                          <p className="text-slate-700 leading-relaxed">
                            {item.alternative}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute top-4 right-4 opacity-10">
                  <X className="h-16 w-16 text-slate-600" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 pt-12 border-t border-slate-200">
          <blockquote className="text-xl text-slate-700 font-light italic max-w-2xl mx-auto leading-relaxed">
            "Every 'no' creates space for a deeper 'yes.' Disconnection is not withdrawal—it's 
            choosing what deserves our full presence."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhatIDisconnectFrom;