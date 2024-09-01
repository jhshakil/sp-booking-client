import { useGetFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { buttonVariants } from "../ui/button";
import { TFacility } from "@/types/facility.types";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import FacilityCard from "./FacilityCard";

const FeaturedFacility = () => {
  const {
    data: facilityData,
    isLoading,
    error,
  } = useGetFacilitiesQuery({ limit: 4 });

  if (isLoading) return <p className="container">Loading ...</p>;

  if (error) return;

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
          <FacilityCard key={`facility-${facility._id}`} facility={facility} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacility;
