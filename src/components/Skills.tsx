
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
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Basic':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4 font-mono animate-fade-in">Explore My</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4 animate-fade-in-delay-1">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-fade-in-delay-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-glow animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gradient font-mono group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-all duration-300 hover:scale-105 group/skill">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/skill:animate-pulse">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 font-mono">{skill.name}</h4>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${getLevelColor(skill.level)}`}>
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
          <button className="p-3 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover-glow group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDown className="h-6 w-6 text-primary group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
