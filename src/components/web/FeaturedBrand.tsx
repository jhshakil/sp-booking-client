import Marquee from "react-fast-marquee";

const BrandImage = [
  "/images/brand/prothom-alo.png",
  "/images/brand/espn.png",
  "/images/brand/golfdigest.png",
  "/images/brand/cnbc.png",
  "/images/brand/forbes.png",
  "/images/brand/the-new-york-times.png",
];

const FeaturedBrand = () => {
  return (
    <section className="container py-11">
      <h2 className="text-[35px] md:text-[45px] font-medium leading-tight text-center underline">
        We are featured in
      </h2>
      <div>
        <Marquee>
          {BrandImage?.map((item, i) => (
            <img
              key={`brand_image-${i}`}
              src={item}
              width={100}
              height={60}
              alt="brand logo"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FeaturedBrand;
