import { Button } from "../ui/button";

const facilityData = [
  {
    title: "Badminton",
    description:
      "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams",
    image: "/images/facility/badminton.jpg",
  },
  {
    title: "Table Tennis",
    description:
      "Table tennis is a racket sport derived from tennis but distinguished by its playing surface being atop a stationary table",
    image: "/images/facility/table-tannis.jpg",
  },
  {
    title: "Basketball",
    description:
      "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court",
    image: "/images/facility/busketball.jpg",
  },
  {
    title: "Pool",
    description:
      "Pool is the name given to a series of cue sports played on a billiard table. The table has six pockets along the rails",
    image: "/images/facility/pool.jpg",
  },
];

const FeaturedFacility = () => {
  return (
    <section className="container py-11">
      <div className="flex justify-between items-end gap-5">
        <h2 className="text-[35px] md:text-[45px] font-medium leading-tight underline">
          Featured Facility
        </h2>
        <Button>See More</Button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facilityData?.map((facility, i) => (
          <div
            key={`facility-${i}`}
            className="border border-border rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <img
                src={facility.image}
                alt="facility image"
                className="aspect-video object-cover"
              />
              <div className="my-5 px-5">
                <h3 className="text-[30px] font-medium">{facility.title}</h3>
                <p className="text-sm">{facility.description}</p>
              </div>
            </div>
            <div className="mb-4 px-5 flex justify-between items-center">
              <Button variant="outline">See Details</Button>
              <Button>Book Now</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacility;
