import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/banner/hero-banner.jpg"
          className="w-full h-[70vh] object-cover"
          alt="hero-banner"
        />
        <div className="absolute bottom-0 w-full">
          <div className="max-w-full md:max-w-[550px] lg:max-w-[800px] mx-auto flex flex-col items-center justify-center h-full relative z-10 text-black bg-white px-4 md:px-8 py-3 md:py-11 rounded-t-xl">
            <h1 className="text-[40px] lg:text-[60px] font-bold text-center leading-snug">
              Find Next Game To Play
            </h1>
            <p className="text-lg lg:text-2xl text-center mt-3">
              Discover amazing places at exclusive deals
            </p>
            <Button className="mt-9 bg-orange-600 text-lg">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
