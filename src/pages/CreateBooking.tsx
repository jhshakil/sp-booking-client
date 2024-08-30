import CheckBookingSlot from "@/components/dashboard/CheckBookingSlot";
import { Badge } from "@/components/ui/badge";
import { TSlot } from "@/types/booking.types";
import { useState } from "react";

const CreateBooking = () => {
  const [availableSlot, setAvailableSlot] = useState<TSlot[]>();
  return (
    <section>
      <div className="px-4 py-7 bg-secondary rounded-md">
        <h2 className="text-center text-[60px] font-medium">Create Booking</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 my-6">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-medium">Check Available Slot</h3>
          <div className="mt-6">
            <CheckBookingSlot slotResult={setAvailableSlot} />
          </div>
          <div className="mt-6 flex gap-4">
            {availableSlot?.map((item, i) => (
              <Badge key={`availableSlot_badge-${i}`}>
                {item.startTime} - {item.endTime}
              </Badge>
            ))}
          </div>
        </div>
        <div className="p-4 border border-border rounded-lg">create</div>
      </div>
    </section>
  );
};

export default CreateBooking;
