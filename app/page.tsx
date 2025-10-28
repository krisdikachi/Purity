import Header from '../component/header';
import Hero from '../component/hero';
import ServiceTimes from '../component/ServiceTimes';
import UpcomingEvents from '../component/UpcomingEvents';
import Mission from '../component/Mission';
import JoinUs from '../component/JoinUs';
import SermonArchives from '../component/SermonArchives';
import Footer from '@/component/footer';

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
            <Mission />
      <ServiceTimes />
      <UpcomingEvents />
      <JoinUs />
      <SermonArchives />
      <Footer />

      
    </div>
  );
}
