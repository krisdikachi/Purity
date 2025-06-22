import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Phone, Mail } from 'lucide-react';

const JoinUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get Connected</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find support, guidance, and community on your journey to purity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join a Group</h3>
            <p className="text-gray-600 mb-6">
              Connect with others in a safe and supportive environment. We offer groups for all ages and stages of life.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700"><strong>Men's & Women's Groups</strong></p>
              <p className="text-gray-700"><strong>Youth & Young Adult Programs</strong></p>
              <p className="text-gray-700"><strong>Online & In-Person Options</strong></p>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Find a Group
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Resources</h3>
            <p className="text-gray-600 mb-6">
              Access a wealth of materials to help you on your path, from articles and talks to guides and workshops.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700"><strong>Talks & Testimonies</strong></p>
              <p className="text-gray-700"><strong>Articles & Blog Posts</strong></p>
              <p className="text-gray-700"><strong>Recommended Reading</strong></p>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Browse Resources
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions?</h3>
          <p className="text-blue-100 mb-6">We'd love to hear from you and help you get connected</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
