import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Instagram, MessageCircle, MailCheck } from 'lucide-react';


const Hero = () => {
  return (
    <section id="home" className="RoyalPuritanHero">
      <div className="RoyalPuritanLeftHero">
        <h1 className="text-4xl font-bold mb-4 mono-cursive">
          Empowering Youth Through <span className="text-[#F8BD57]">Sexual Purity</span>
        </h1>
        <p className="text-lg mb-6 leading-relaxed max-w-xl">
          Guiding young hearts toward a Christ-centered journey of purity through
          faith-based education and mentorship. Join us in raising a generation that
          lives unashamedly for Jesus.
        </p>
        <div className="social-icons-bottom-left w-56 flex justify-between items-center mt-8 border-l-4 border-[#AA06BF] pl-4 py-2">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="mr-4 text-[#AA06BF] hover:text-[#F8BD57] transition-colors duration-300">
            <Facebook size={32} />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="mr-4 text-[#AA06BF] hover:text-[#F8BD57] transition-colors duration-300">
            <Instagram size={32} />
          </a>

          <a href="https://mail.google.com/mail/u/0/?fs=1&to=youremail@gmail.com&su=Subject&body=Body" target="_blank" rel="noopener noreferrer" className="text-[#AA06BF] hover:text-[#F8BD57] transition-colors duration-300">
            <MailCheck size={32} />
          </a>

          <a href="https://messagingplatform.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-[#AA06BF] hover:text-[#F8BD57] transition-colors duration-300 ml-2">
            <MessageCircle size={32} />
          </a>

        </div>
        <Button className=" heroBtn bg-[#e8e7e5] hover:bg-[#f8bd57] text-[#1c0f57] w-48 transition-all duration-300">
          Start Your Journey <ArrowRight className="ml-2" />
        </Button>

      </div>
      <div className="RoyalPuritanRightHero"></div>

    </section>

  );
};

export default Hero;








