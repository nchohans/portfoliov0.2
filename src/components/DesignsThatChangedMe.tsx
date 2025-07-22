import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const DesignsThatChangedMe = () => {
  const influences = [
    {
      title: 'MIT Origami Robot',
      creator: 'MIT CSAIL',
      impact: 'Taught me how softness can become strength.',
      description: 'A robot that folds itself and dissolves in water. It showed me that the most powerful technologies might be the most temporary ones.',
      link: 'https://www.csail.mit.edu/',
      color: 'from-rose-100 to-pink-100'
    },
    {
      title: 'Saima\'s Design Philosophy',
      creator: 'Saima Sahu',
      impact: 'Made me fall in love with designing.',
      description: 'I hated design until I saw how Saima approached it—not as decoration, but as empathy made visible. She taught me that design is care.',
      link: 'https://www.instagram.com/saimasahu_/',
      color: 'from-emerald-100 to-teal-100'
    },
    {
      title: 'James Turrell\'s Skyspaces',
      creator: 'James Turrell',
      impact: 'Light is not seen. It\'s felt.',
      description: 'Spaces that frame the sky, making the infinite intimate. They taught me that the most profound interfaces are the ones that disappear.',
      link: 'https://jamesturrell.com/',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      title: 'Aguahoja Pavilion',
      creator: 'Neri Oxman',
      impact: 'Matter can be programmed to live and die.',
      description: 'A structure grown from shrimp shells and tree branches. It showed me that the future of materials is not permanence, but transformation.',
      link: 'https://www.media.mit.edu/',
      color: 'from-green-100 to-emerald-100'
    },
    {
      title: 'GPT-2 Release Strategy',
      creator: 'OpenAI',
      impact: 'Made me rethink responsible release.',
      description: 'They held back a technology because it was too powerful. It taught me that sometimes the most ethical thing to do is to not build.',
      link: 'https://openai.com/',
      color: 'from-purple-100 to-indigo-100'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            Designs That Changed Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Not my designs—but others' works that shaped my soul. These are the moments when 
            I realized what design could be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {influences.map((influence, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${influence.color} p-8 border border-slate-200/50 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-slate-800 font-semibold mb-2">
                      {influence.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      by {influence.creator}
                    </p>
                  </div>
                  <a
                    href={influence.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <blockquote className="text-emerald-700 font-medium italic mb-4 text-lg">
                  "{influence.impact}"
                </blockquote>

                <p className="text-slate-700 leading-relaxed">
                  {influence.description}
                </p>

                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-12 border-t border-slate-200">
          <p className="text-lg text-slate-600 font-light italic max-w-2xl mx-auto leading-relaxed">
            These works taught me that design is not about making things beautiful. 
            It's about making beauty possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignsThatChangedMe;