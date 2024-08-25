import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[70vh] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#0000006e]"
        style={{ backgroundImage: "url(/images/banner/hero-banner.jpg)" }}
      >
        <div className="container flex flex-col items-center justify-center h-full relative z-10 text-white ">
          <h1 className="text-[60px] font-bold">Find Next Game To Play</h1>
          <p className="text-2xl">Discover amazing places at exclusive deals</p>
          <Button className="mt-9 bg-orange-600">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
