import { TFacility } from "@/types/facility.types";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Props = {
  facility: TFacility;
};

const FacilityCard = ({ facility }: Props) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden flex flex-col justify-between pb-4">
      <div>
        <img
          src={facility.image ?? "/images/facility/fallback.png"}
          alt="facility image"
          className="aspect-video object-cover"
        />
        <div className="my-5 px-5">
          <h3 className="text-[30px] font-medium">{facility.name}</h3>
          <p className="text-sm line-clamp-5 overflow-hidden">
            {facility.description}
          </p>
        </div>
      </div>
      <div className="px-5">
        <div className="my-2">
          <p className="text-lg font-medium">
            Price: {facility.pricePerHour}$/hour
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            to={`/facility/${facility._id}`}
          >
            See Details
          </Link>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
