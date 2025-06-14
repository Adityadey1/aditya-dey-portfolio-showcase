
import React from 'react';
import { ArrowDown, Github, Linkedin, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-muted-foreground text-lg mb-4 animate-fade-in font-mono">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6 animate-fade-in-delay-1">
              Aditya Dey
            </h1>
            <p className="text-2xl lg:text-3xl text-primary mb-8 animate-fade-in-delay-2 font-semibold">
              Computer Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-delay-3">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/assets/resume-example.pdf')}
                className="hover-glow glass border-2 font-semibold group"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold hover-glow group"
              >
                <Mail className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                Contact Info
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-delay-4">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/aditya-dey-5962a82a8/', '_blank')}
                className="p-4 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-glow group"
              >
                <Linkedin className="h-6 w-6 text-blue-600 group-hover:animate-pulse" />
              </button>
              <button
                onClick={() => window.open('https://github.com/Adityadey1', '_blank')}
                className="p-4 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-glow group"
              >
                <Github className="h-6 w-6 text-foreground group-hover:animate-pulse" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-float hover:animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Aditya Dey profile picture"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></div>
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-pink-400 rounded-full animate-sparkle animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-5 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-2000"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-glow group"
          >
            <ArrowDown className="h-6 w-6 text-primary group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
