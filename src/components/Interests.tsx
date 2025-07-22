import React from 'react';
import { 
  Atom, 
  Leaf, 
  Brain, 
  Palette, 
  Heart, 
  Building, 
  Camera, 
  Code, 
  Zap, 
  Recycle,
  Bot,
  BookOpen
} from 'lucide-react';

const Interests = () => {
  const interests = [
    { name: 'Bioprinting & synthetic biology', icon: Atom },
    { name: 'Materials science', icon: Zap },
    { name: 'Ecological systems', icon: Leaf },
    { name: 'Philosophy of design', icon: Brain },
    { name: 'Human-centered technology', icon: Heart },
    { name: 'Architecture & space', icon: Building },
    { name: 'Wildlife research', icon: Leaf },
    { name: 'Animations & film', icon: Camera },
    { name: 'Poetics in code', icon: Code },
    { name: 'Ethical AI', icon: Brain },
    { name: 'Regenerative systems', icon: Recycle },
    { name: 'Robotics and soft machines', icon: Bot },
    { name: 'Storytelling as structure', icon: BookOpen },
    { name: 'Ancient knowledge & futures', icon: BookOpen }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-16">
          Things That Move Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-2xl border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-200/50 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 font-medium leading-snug flex-1">
                    {interest.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;