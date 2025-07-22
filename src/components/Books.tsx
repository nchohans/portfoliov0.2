import React from 'react';
import { Book } from 'lucide-react';

const Books = () => {
  const books = [
    {
      title: 'Braiding Sweetgrass',
      author: 'Robin Wall Kimmerer',
      color: 'from-green-100 to-emerald-100'
    },
    {
      title: 'The Timeless Way of Building',
      author: 'Christopher Alexander',
      color: 'from-teal-100 to-cyan-100'
    },
    {
      title: 'How Forests Think',
      author: 'Eduardo Kohn',
      color: 'from-emerald-100 to-green-100'
    },
    {
      title: 'The Spell of the Sensuous',
      author: 'David Abram',
      color: 'from-sage-100 to-emerald-100'
    },
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      color: 'from-teal-100 to-green-100'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-16">
          Books I'm Currently Enjoying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                  <Book className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-serif text-slate-800 font-semibold leading-tight mb-2">
                    {book.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    by {book.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;