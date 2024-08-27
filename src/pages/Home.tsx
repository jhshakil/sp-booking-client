import BookingSteps from "@/components/web/BookingSteps";
import FeaturedFacility from "@/components/web/FeaturedFacility";
import Hero from "@/components/web/Hero";
import Testimonial from "@/components/web/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedFacility />
      <BookingSteps />
      <Testimonial />
    </div>
  );
};

export default Home;
