import React from 'react';
import { Clock, MapPin, Users, BookOpen } from 'lucide-react';

const ServiceTimes = () => {
  const programs = [
    {
      title: "Weekly Support Group",
      time: "Tuesdays 7:00 PM",
      location: "Online via Zoom",
      description: "A safe space for open discussion, accountability, and mutual support.",
      icon: Users
    },
    {
      title: "Foundations Workshop", 
      time: "First Saturday of Month",
      location: "Community Hall",
      description: "An interactive workshop covering the core principles of living a pure life.",
      icon: BookOpen
    },
    {
      title: "One-on-One Mentoring",
      time: "By Appointment", 
      location: "Flexible",
      description: "Personalized guidance and support from a trained mentor.",
      icon: Clock
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right support and resources for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <program.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">{program.time}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{program.location}</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
