import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import MovingCards from "@/components/ui/MovingCards";
import WhyChoseUs from "@/components/ui/WhyChoseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white[0.02]">
      <Hero/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <MovingCards/>
    </main>
  );
}
