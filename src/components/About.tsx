
import aboutpic from '../assets/about-pic.png'
import { ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">Get To Know More</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutpic}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-slate-600 text-sm">
                    3 months<br />
                    Frontend Development<br />
                    <span className="font-medium">IBM (Intern)</span>
                  </p>
                  <p className="text-slate-600 text-sm mt-2">
                    5 months<br />
                    Associate AI Engineer<br />
                    <span className="font-medium">Demaze Technologies (Intern)</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-slate-600 text-sm">
                    BE in Computer Engineering<br />
                    <span className="font-medium">LD College of Engineering</span><br />
                    (2021-2025)
                  </p>
                  <p className="text-slate-600 text-sm mt-2">
                    Higher Secondary Education<br />
                    <span className="font-medium">Omargani MES College</span><br />
                    (2018-2020)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-blue-600">Aditya Dey</span>.
                I'm currently a final-year Computer Engineering student at LD College of Engineering.
                With a strong passion for <span className="font-semibold">cybersecurity and ethical hacking</span>,
                I love exploring the intricacies of secure systems and staying updated with the latest
                advancements in technology. My goal is to contribute to a safer digital world while
                constantly challenging myself to grow and innovate in this field.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-bounce">
            <ArrowDown className="h-6 w-6 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
