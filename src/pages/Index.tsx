
import React, { useState, useEffect } from 'react';
import { ArrowDown, Moon, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex space-x-8">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
