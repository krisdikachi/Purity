import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpcomingEvents = () => {
  const events = [
    {
      title: "Annual Purity Conference",
      date: "October 28, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "City Convention Center",
      description: "A full day of inspiring speakers, workshops, and networking.",
      attendees: 300
    },
    {
      title: "Healthy Relationships Seminar",
      date: "November 15, 2024", 
      time: "7:00 PM - 9:00 PM",
      location: "Online Webinar",
      description: "Learn practical tools for building strong, healthy, and pure relationships.",
      attendees: 150
    },
    {
      title: "Youth Purity Rally",
      date: "December 22, 2024",
      time: "6:00 PM",
      location: "Community Youth Center",
      description: "An energetic event for teens and young adults focused on making positive choices.",
      attendees: 250
    }
  ];

  return (
    <section id="events" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with our community through meaningful events and activities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
