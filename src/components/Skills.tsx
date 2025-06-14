
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "Basic" },
        { name: "CSS", level: "Basic" },
        { name: "JavaScript", level: "Basic" },
        { name: "Tailwind CSS", level: "Basic" },
      ]
    },
    {
      title: "CyberSecurity",
      skills: [
        { name: "Penetration Testing", level: "Basic" },
        { name: "Network Security", level: "Intermediate" },
        { name: "Kali Linux", level: "Intermediate" },
        { name: "Threat Intelligence", level: "Intermediate" },
      ]
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      skills: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Hugging Face", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Intermediate" },
        { name: "Langchain", level: "Intermediate" },
        { name: "Keras", level: "Intermediate" },
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "NumPy", level: "Basic" },
        { name: "Pandas", level: "Basic" },
        { name: "Matplotlib", level: "Basic" },
        { name: "Seaborn", level: "Basic" },
        { name: "Python", level: "Advanced" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Basic':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">Explore My</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Skills</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-800">{skill.name}</h4>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
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

export default Skills;
