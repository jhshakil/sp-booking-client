import Marquee from "react-fast-marquee";

const BrandImage = [
  "/images/brand/1.png",
  "/images/brand/2.png",
  "/images/brand/3.png",
  "/images/brand/4.png",
  "/images/brand/5.png",
  "/images/brand/6.png",
  "/images/brand/1.png",
  "/images/brand/2.png",
  "/images/brand/3.png",
  "/images/brand/4.png",
  "/images/brand/5.png",
  "/images/brand/6.png",
];

const FeaturedBrand = () => {
  return (
    <section className="container py-11">
      <h2 className="text-[35px] md:text-[45px] font-medium leading-tight text-center underline">
        We are featured in
      </h2>
      <div className="mt-6">
        <Marquee className="[&>div>div]:gap-[40px] md:[&>div>div]:gap-[130px]">
          {BrandImage?.map((item, i) => (
            <img
              key={`brand_image-${i}`}
              src={item}
              width={150}
              alt="brand logo"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FeaturedBrand;
