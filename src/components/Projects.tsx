
import React from 'react';
import { ArrowDown, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Keylogger",
      description: "A cybersecurity tool for monitoring keystrokes and system activities.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/Adityadey1/keylogger",
      liveUrl: "https://github.com/Adityadey1/keylogger/blob/main/keylogger.py"
    },
    {
      title: "Friday AI Cybersecurity Assistant",
      description: "An AI-powered cybersecurity assistant for threat detection and analysis.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/Adityadey1/Friday-AI-Cybersecurity-Assistant",
      liveUrl: "https://github.com/Adityadey1/Friday-AI-Cybersecurity-Assistant"
    },
    {
      title: "Security Bot",
      description: "An automated security monitoring and response system.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/Adityadey1/securitybot",
      liveUrl: "https://github.com/Adityadey1/securitybot"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">Browse My Recent</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center gap-2 flex-1"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-bounce">
            <ArrowDown className="h-6 w-6 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
