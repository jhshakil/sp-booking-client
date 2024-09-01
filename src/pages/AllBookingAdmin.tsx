import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  useConfirmBookingMutation,
  useGetAdminBookingsQuery,
} from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.types";
import { toast } from "sonner";

export default function ALlBookingAdmin() {
  const { data: bookingData, isLoading } = useGetAdminBookingsQuery(undefined);

  const [confirmBooking] = useConfirmBookingMutation();

  if (isLoading) return <p>Loading ...</p>;

  const confirm = async (data: TBooking) => {
    const res = await confirmBooking(data);
    if (res?.data?.success) {
      toast("Confirm Successfully");
    }
  };

  return (
    <div className="px-8 py-12">
      <div className="flex justify-between border-b border-border pb-4">
        <h2 className="text-3xl font-bold">Booking List</h2>
        <div></div>
      </div>
      <div className="w-full">
        <Table>
          <TableCaption>A list of your booking.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Date</TableHead>
              <TableHead className="font-bold">Start Time - End Time</TableHead>
              <TableHead className="font-bold">payableAmount</TableHead>
              <TableHead className="font-bold">Facility Name</TableHead>
              <TableHead className="font-bold">Booking Status</TableHead>
              <TableHead className="font-bold">Payment Status</TableHead>
              <TableHead className="font-bold">Confirm Booking</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingData?.data?.map((booking: TBooking) => (
              <TableRow key={booking._id}>
                <TableCell className="font-medium">{booking.date}</TableCell>
                <TableCell>
                  <p className="max-w-[300px] line-clamp-3 overflow-hidden">
                    {booking.startTime} - {booking.endTime}
                  </p>
                </TableCell>

                <TableCell>{booking.payableAmount}</TableCell>
                <TableCell>{booking.facility?.name}</TableCell>
                <TableCell>{booking.isBooked}</TableCell>
                <TableCell>{booking.isPayment ? "Paid" : "Unpaid"}</TableCell>
                <TableCell>
                  <Button
                    disabled={booking.isBooked === "confirmed"}
                    onClick={() => confirm(booking)}
                  >
                    Confirm
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
