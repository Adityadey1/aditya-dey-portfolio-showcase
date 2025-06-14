
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Contact Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Email</h3>
                <a 
                  href="mailto:adityadey222@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                >
                  adityadey222@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/aditya-dey-5962a82a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about 
              cybersecurity, AI, or technology in general. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
