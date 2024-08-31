import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGetFacilityQuery } from "@/redux/features/facility/facilityApi";
import { Link, useParams } from "react-router-dom";

const FacilityDetails = () => {
  const { id: facilityId } = useParams();
  const {
    data: facilityData,
    isLoading,
    error,
  } = useGetFacilityQuery({
    _id: facilityId,
  });

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p className="container">No Data found</p>;

  const { name, image, description, location, pricePerHour } =
    facilityData.data;

  return (
    <section className="container my-11">
      <div>
        <h1 className="text-[60px] text-center font-medium">{name}</h1>
      </div>
      <div className="mt-4 grid grid-cols-2">
        <div>
          <img className="aspect-video" src={image} alt="Facility Image" />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-xl font-medium">Description:</h3>
            <p className="mt-2">{description}</p>
          </div>
          <p>
            <span className="text-lg font-medium">Location:</span> {location}
          </p>
          <p className="text-lg font-medium">Price: {pricePerHour}$/hour</p>
          <div>
            <Link
              to={`/user/create-booking?facility=${facilityId}`}
              className={cn(buttonVariants())}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityDetails;
