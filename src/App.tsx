import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Interests from './components/Interests';
import Projects from './components/Projects';
import BlogFeed from './components/BlogFeed';
import Books from './components/Books';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Nivedhitha Prasad - Transdisciplinary Engineer';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Philosophy />
      <Interests />
      <Projects />
      <BlogFeed />
      <Books />
      <About />
      <Manifesto />
      <Contact />
    </div>
  );
}

export default App;