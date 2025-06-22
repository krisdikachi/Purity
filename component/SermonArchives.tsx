import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, User, ArrowRight } from 'lucide-react';

const SermonArchives = () => {
  const recentResources = [
    {
      title: "The Purity Principle",
      speaker: "Dr. Evelyn Reed",
      date: "October 15, 2024",
      duration: "45 min talk",
      series: "Foundations of Purity",
      thumbnail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&h=225"
    },
    {
      title: "Navigating Modern Dating",
      speaker: "Mark Chen", 
      date: "October 8, 2024",
      duration: "38 min talk",
      series: "Healthy Relationships",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&h=225"
    },
    {
      title: "Healing and Wholeness",
      speaker: "Dr. Sarah Johnson",
      date: "October 1, 2024", 
      duration: "52 min talk",
      series: "Restoration Journey",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=225"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Catch up on recent talks and explore our resource library
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {recentResources.map((sermon, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    <Play className="mr-2 h-5 w-5" />
                    Watch
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{sermon.series}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sermon.title}</h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8">
            View All Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SermonArchives;
