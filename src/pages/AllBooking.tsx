import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DeletePopup from "@/components/dialog/DeletePopup";
import {
  useDeleteBookingMutation,
  useGetUserBookingsQuery,
} from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.types";

export default function ALlBooking() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<TBooking>();
  const { data: bookingData, isLoading } = useGetUserBookingsQuery(undefined);

  const [deleteBooking] = useDeleteBookingMutation();

  if (isLoading) return <p>Loading ...</p>;

  const deleteProductData = () => {
    deleteBooking(selectedBooking);
  };

  return (
    <div className="px-2 md:px-8 py-12">
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
              <TableHead className="font-bold">Cancel Booking</TableHead>
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
                    variant="outline"
                    size="icon"
                    className="border-none hover:bg-background relative"
                    onClick={() => {
                      setSelectedBooking(booking);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <Trash className="h-6 w-6" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {selectedBooking && (
          <>
            <DeletePopup
              open={openDeleteDialog}
              closeDialog={() => setOpenDeleteDialog(false)}
              submitData={() => deleteProductData()}
            />
          </>
        )}
      </div>
    </div>
  );
}
