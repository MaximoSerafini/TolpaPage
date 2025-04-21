import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StarlinkSection } from './components/StarlinkSection';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ContactButton } from './components/ContactButton';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'TOLPA Fiber | Conectividad sin límites';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Services />
      <StarlinkSection />
      <About />
      <Footer />
      <ContactButton />
    </div>
  );
}

export default App;