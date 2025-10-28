import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We champion a life of sexual integrity and wholeness."
    },
    {
      icon: Users,
      title: "Support",
      description: "We provide a compassionate and non-judgmental support system."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We are committed to personal and spiritual growth in a positive community."
    }
  ];

  return (
    <section id="mission" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/ROYAL PURITAN FOUNDATION 02.png"
                alt="Group of diverse people in a supportive discussion"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#1c0f57] mb-6">Our Mission</h2>
            <p className="text-xl text-[#1c0f57] leading-relaxed mb-6">
              At Purity Foundation, we are passionate about empowering individuals to live lives of sexual integrity and purpose. We believe everyone deserves to experience freedom and fulfillment.
            </p>
            <p className="text-lg text-[#1c0f57] leading-relaxed mb-8">
              Our mission is to provide education, support, and a strong community for those seeking to navigate <span className='text-[#f8BD57] font-extrabold'> the complexities of modern relationships and sexuality with a commitment to purity.</span>
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-[#f8BD57]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Mission;
