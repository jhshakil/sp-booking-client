import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { Button } from "../ui/button";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { TFacility } from "@/types/facility.types";

export default function FacilityControl() {
  const [selectedFacility, setSelectedFacility] = useState<TFacility>();
  const {
    data: facilityData,
    isLoading,
    error,
  } = useGetFacilitiesQuery(undefined);

  console.log(facilityData?.data);

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>Something went wrong</p>;

  return (
    <div className="w-full p-8 border border-border rounded-lg">
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
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                  onClick={() => {
                    setSelectedFacility(facility);
                    // setOpenEditDialog(true);
                  }}
                >
                  <Edit className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                  onClick={() => {
                    setSelectedFacility(facility);
                    // setOpenDeleteDialog(true);
                  }}
                >
                  <Trash className="h-6 w-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {selectedfacility && (
        <>
          <facilityUpdateDialog
            facility={selectedfacility}
            open={openEditDialog}
            closeDialog={() => setOpenEditDialog(false)}
            submitData={(data: Tfacility) => updatefacilityData(data)}
          />
          <Deletefacility
            open={openDeleteDialog}
            closeDialog={() => setOpenDeleteDialog(false)}
            submitData={() => deletefacilityData()}
          />
        </>
      )} */}
    </div>
  );
}
