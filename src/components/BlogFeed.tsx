import React from 'react';
import { ExternalLink } from 'lucide-react';

const BlogFeed = () => {
  // Placeholder for blog posts - in a real implementation, this would fetch from the streams.place API
  const posts = [
    { title: 'On Symbiotic Design', date: '2025-01-10', excerpt: 'Exploring the intersection of technology and nature...' },
    { title: 'Memory in Materials', date: '2025-01-08', excerpt: 'How materials remember and what we can learn from them...' },
    { title: 'Regenerative Systems Thinking', date: '2025-01-05', excerpt: 'Building systems that heal themselves and grow...' },
  ];

  return (
    <section className="py-24 px-6 bg-emerald-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-serif text-slate-800">Recent Streams</h2>
          <a
            href="https://streams.place/kyledmakes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
          >
            View All
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-serif text-slate-800 group-hover:text-emerald-700 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-sm text-slate-400 ml-4 whitespace-nowrap">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;