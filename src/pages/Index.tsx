
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
    <div className="min-h-screen bg-background bg-mesh relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow"></div>
      </div>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="pt-16 relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-background/80 backdrop-blur-sm border-t border-border/50 text-foreground py-8 relative z-10">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex space-x-8">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors duration-300">About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors duration-300">Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors duration-300">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors duration-300">Contact</button></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
