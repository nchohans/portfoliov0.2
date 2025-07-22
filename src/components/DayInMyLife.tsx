import React from 'react';
import { Clock, Coffee, Book, Lightbulb, Heart, Moon } from 'lucide-react';

const DayInMyLife = () => {
  const moments = [
    {
      time: '6:00am',
      icon: Moon,
      activity: 'Wake up, lie still',
      description: 'Feel my body in time. Listen to the world waking up. No phone, no rush. Just presence.',
      color: 'from-indigo-100 to-purple-100'
    },
    {
      time: '7:15am',
      icon: Book,
      activity: 'Journaling',
      description: 'Writing about biofilm resilience. How do communities of cells decide to stick together? What can they teach us about human collaboration?',
      color: 'from-emerald-100 to-teal-100'
    },
    {
      time: '10:45am',
      icon: Lightbulb,
      activity: 'Break filament mid-print',
      description: 'Rewrite G-code. The machine teaches me patience. Every failure is a conversation about what wants to emerge.',
      color: 'from-amber-100 to-orange-100'
    },
    {
      time: '2:00pm',
      icon: Heart,
      activity: 'Kriya practice',
      description: 'Eyes closed. Breath becomes algorithm. In stillness, the next project floats to the surface.',
      color: 'from-rose-100 to-pink-100'
    },
    {
      time: '6:30pm',
      icon: Coffee,
      activity: 'Tea with questions',
      description: 'Chamomile and contemplation. What if materials could dream? What would they dream about?',
      color: 'from-green-100 to-lime-100'
    },
    {
      time: '9:00pm',
      icon: Book,
      activity: 'Reading Donna Haraway',
      description: 'Light a candle. "Staying with the Trouble." Every page rewrites how I think about technology and care.',
      color: 'from-violet-100 to-purple-100'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            A Day in My Life
            <span className="block text-2xl text-slate-600 font-light mt-2">(Slow Version)</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Most "life" pages are fast. Mine is slow. This is how I move through time, 
            how I let ideas breathe, how I practice being present.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-400"></div>

          <div className="space-y-12">
            {moments.map((moment, index) => {
              const IconComponent = moment.icon;
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-sm"></div>
                  
                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <div className={`bg-gradient-to-br ${moment.color} rounded-2xl p-6 border border-slate-200/50`}>
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-white/50 rounded-lg mr-4">
                          <IconComponent className="h-5 w-5 text-slate-700" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                            {moment.time}
                          </div>
                          <h3 className="text-lg font-serif text-slate-800">
                            {moment.activity}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16 pt-12 border-t border-slate-200">
          <blockquote className="text-xl text-slate-700 font-light italic max-w-2xl mx-auto leading-relaxed mb-6">
            "Time is not a resource to be optimized. It's a medium to be inhabited."
          </blockquote>
          <p className="text-slate-600">
            This rhythm shows my process, my ethos. Not just outputs, but the quality of attention 
            that creates them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayInMyLife;