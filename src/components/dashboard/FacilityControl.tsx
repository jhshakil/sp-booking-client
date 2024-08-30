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
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { TFacility } from "@/types/facility.types";
import { CreateFacility } from "../dialog/CreateFacility";
import { UpdateFacility } from "../dialog/UpdateFacility";
import { useState } from "react";
import DeletePopup from "../dialog/DeletePopup";

export default function FacilityControl() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<TFacility>();
  const {
    data: facilityData,
    isLoading,
    error,
  } = useGetFacilitiesQuery(undefined);

  const [deleteFacility] = useDeleteFacilityMutation();

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>Something went wrong</p>;

  const deleteProductData = () => {
    deleteFacility(selectedFacility);
  };

  return (
    <div className="px-8 py-12">
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
                <TableCell>{facility.description}</TableCell>
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
