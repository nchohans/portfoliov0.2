import React, { useState } from 'react';
import { HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';

const LabOfQuestions = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: 'What happens when a cell remembers a sound?',
      context: 'Exploring mechanotransduction in bioprinting',
      connection: 'Links to my bioprinting compatibility research',
      status: 'investigating'
    },
    {
      question: 'Can grief be quantified by body temperature?',
      context: 'Biometric approaches to emotional states',
      connection: 'Inspired by my grandfather\'s passing',
      status: 'open'
    },
    {
      question: 'What is a user interface for a dying forest?',
      context: 'Environmental sensing and communication',
      connection: 'Part of my regenerative systems thinking',
      status: 'prototyping'
    },
    {
      question: 'What if 3D-printed tissue could forget?',
      context: 'Programmable degradation in biomaterials',
      connection: 'Extension of "matter has memory" principle',
      status: 'investigating'
    },
    {
      question: 'How do machines learn to be gentle?',
      context: 'Soft robotics and emotional intelligence',
      connection: 'Influenced by MIT\'s origami robot',
      status: 'open'
    },
    {
      question: 'What does a regenerative algorithm look like?',
      context: 'Code that heals rather than optimizes',
      connection: 'Core to Symmatica methodology',
      status: 'developing'
    },
    {
      question: 'Can architecture remember its inhabitants?',
      context: 'Adaptive spaces and material memory',
      connection: 'Inspired by James Turrell\'s work',
      status: 'open'
    },
    {
      question: 'What if AI could feel homesick?',
      context: 'Emotional architectures in artificial systems',
      connection: 'Questions from watching "Her"',
      status: 'wondering'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'prototyping': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'developing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'wondering': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-2xl mr-4">
              <HelpCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800">
              A Lab of Unasked Questions
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I don't need to answer everything—I need to ask better. These are the questions 
            that keep me awake, that shape my work, that refuse to be solved.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all duration-300 overflow-hidden"
            >
              <div
                onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                className="p-6 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <h3 className="text-lg font-serif text-slate-800 leading-tight">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-sm border rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-sm text-slate-500">
                        {item.context}
                      </span>
                    </div>
                  </div>
                  <ArrowRight 
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                      expandedQuestion === index ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedQuestion === index && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 leading-relaxed mb-3">
                      <strong>Connection:</strong> {item.connection}
                    </p>
                    <div className="flex items-center text-sm text-emerald-600">
                      <span>This question is actively shaping my work</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-12 border-t border-slate-200">
          <blockquote className="text-xl text-slate-700 font-light italic max-w-2xl mx-auto leading-relaxed">
            "The quality of our questions determines the quality of our futures. 
            I collect questions like others collect answers."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default LabOfQuestions;