
import React from 'react';
import { Linkedin, Mail, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4 font-mono animate-fade-in">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4 animate-fade-in-delay-1">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full animate-fade-in-delay-2"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-glow animate-slide-left group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient font-mono">Email</h3>
                <a 
                  href="mailto:adityadey222@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors duration-300 text-lg font-semibold hover:underline"
                >
                  adityadey222@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-glow animate-slide-right group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient font-mono">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/aditya-dey-5962a82a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300 text-lg font-semibold hover:underline"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-delay-3">
            <div className="glass p-8 rounded-2xl">
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about 
                cybersecurity, AI, or technology in general. Feel free to reach out!
              </p>
              <div className="mt-6">
                <Send className="h-6 w-6 text-primary mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
