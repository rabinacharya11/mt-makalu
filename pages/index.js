import EventsAndNotice from "../components/home/EventsAndNotice";
import HeroSection from "../components/home/HeroSection";
import Notice from "../components/home/Notice";
import SectionHeader from "../components/home/SectionHeader";
import MessageSection from "../components/home/MessageSection";
import WhyUs from "../components/home/WhyUs";
import StudentSection from "../components/home/StudentSection";

import EmailSubscription from "../components/EmailSubscription";

function Home() {
  return (
    <div>
      <HeroSection />
      <Notice />
      <EventsAndNotice />
      <SectionHeader title="Why Mount Makalu?" />
      {/* <MessageSection /> */}
      <WhyUs/>
      <SectionHeader title="Message From Us" />
      <div className='mx-10'>

      <MessageSection />
      </div>
      
      <SectionHeader title="What Students Say"/>
      <StudentSection/>
  
      <SectionHeader title="Subscribe Email Updates" subtitle="We will send you email notification whenever we have any notices or news to share with you."/>
     
     <EmailSubscription/>
    </div>
  );
}

export default Home;
