import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteFacilityMutation,
  useGetFacilitiesQuery,
} from "@/redux/features/facility/facilityApi";
import { Trash } from "lucide-react";
import { TFacility } from "@/types/facility.types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DeletePopup from "@/components/dialog/DeletePopup";
import CreateFacility from "@/components/dialog/CreateFacility";
import UpdateFacility from "@/components/dialog/UpdateFacility";

export default function FacilityControl() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<TFacility>();
  const { data: facilityData, isLoading } = useGetFacilitiesQuery(undefined);

  const [deleteFacility] = useDeleteFacilityMutation();

  if (isLoading) return <p>Loading ...</p>;

  const deleteProductData = () => {
    deleteFacility(selectedFacility);
  };

  return (
    <div className="px-2 md:px-8 py-12">
      <div className="flex justify-between border-b border-border pb-4">
        <h2 className="text-3xl font-bold">Facility List</h2>
        <CreateFacility />
      </div>
      <div className="w-full">
        <Table>
          <TableCaption>A list of your facility.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Description</TableHead>
              <TableHead className="font-bold">Image</TableHead>
              <TableHead className="font-bold">Price Per Hour</TableHead>
              <TableHead className="font-bold">Location</TableHead>
              <TableHead className="font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {facilityData?.data?.map((facility: TFacility) => (
              <TableRow key={facility._id}>
                <TableCell className="font-medium">{facility.name}</TableCell>
                <TableCell>
                  <p className="max-w-[300px] line-clamp-3 overflow-hidden">
                    {facility.description}
                  </p>
                </TableCell>
                <TableCell>
                  <img
                    width={50}
                    height={50}
                    src={facility.image}
                    alt="facility image"
                  />
                </TableCell>
                <TableCell>{facility.pricePerHour}</TableCell>
                <TableCell>{facility.location}</TableCell>
                <TableCell>
                  <UpdateFacility facility={facility} />
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-none hover:bg-background relative"
                    onClick={() => {
                      setSelectedFacility(facility);
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
        {selectedFacility && (
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
