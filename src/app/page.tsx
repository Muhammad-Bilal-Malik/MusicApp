import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import MovingCards from "@/components/ui/MovingCards";
import WhyChoseUs from "@/components/ui/WhyChoseUs";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white[0.02]">
      <Hero/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <MovingCards/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
