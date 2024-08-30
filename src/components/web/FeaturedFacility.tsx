import { useGetFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { Button, buttonVariants } from "../ui/button";
import { TFacility } from "@/types/facility.types";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const FeaturedFacility = () => {
  const { data: facilityData, isLoading } = useGetFacilitiesQuery(undefined);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <section className="container py-11">
      <div className="flex justify-between items-end gap-5">
        <h2 className="text-[35px] md:text-[45px] font-medium leading-tight underline">
          Featured Facility
        </h2>
        <Link to="/facility" className={cn(buttonVariants())}>
          See More
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facilityData?.data?.map((facility: TFacility) => (
          <div
            key={`facility-${facility._id}`}
            className="border border-border rounded-lg overflow-hidden flex flex-col justify-between pb-4"
          >
            <div>
              <img
                src={facility.image ?? "/images/facility/fallback.png"}
                alt="facility image"
                className="aspect-video object-cover"
              />
              <div className="my-5 px-5">
                <h3 className="text-[30px] font-medium">{facility.name}</h3>
                <p className="text-sm">{facility.description}</p>
              </div>
            </div>
            <div className="px-5">
              <div className="my-2">
                <p className="text-lg font-medium">
                  Price: {facility.pricePerHour}$/hour
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline">See Details</Button>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacility;
