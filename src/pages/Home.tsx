import BookingSteps from "@/components/web/BookingSteps";
// import FeaturedBrand from "@/components/web/FeaturedBrand";
import FeaturedFacility from "@/components/web/FeaturedFacility";
import Hero from "@/components/web/Hero";
import Testimonial from "@/components/web/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedFacility />
      {/* <FeaturedBrand /> */}
      <BookingSteps />
      <Testimonial />
    </div>
  );
};

export default Home;
