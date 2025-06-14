
import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-slate-600 text-lg mb-4 animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-4 animate-fade-in-delay-1">
              Aditya Dey
            </h1>
            <p className="text-2xl lg:text-3xl text-blue-600 mb-8 animate-fade-in-delay-2">
              Computer Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-delay-3">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/assets/resume-example.pdf')}
                className="bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 hover:text-slate-900"
              >
                Download CV
              </Button>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contact Info
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-delay-4">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/aditya-dey-5962a82a8/', '_blank')}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </button>
              <button
                onClick={() => window.open('https://github.com/Adityadey1', '_blank')}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Aditya Dey profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
