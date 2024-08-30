import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useDropzone } from "react-dropzone";
import { Edit, UploadCloud } from "lucide-react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageUploadDB } from "@/lib/firebaseConfig";
import { v4 } from "uuid";
import { useUpdateFacilityMutation } from "@/redux/features/facility/facilityApi";
import { useState } from "react";
import { TFacility } from "@/types/facility.types";

type Props = {
  facility: TFacility;
};

const FormSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.coerce.number(),
  location: z.string(),
  image: z.string().optional(),
});

export default function UpdateFacility({ facility }: Props) {
  const [open, setOpen] = useState(false);

  const [updateFacility] = useUpdateFacilityMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: facility.name ?? "",
      description: facility.description ?? "",
      pricePerHour: facility.pricePerHour ?? 0,
      location: facility.location ?? "",
      image: facility.image ?? "",
    },
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data._id = facility._id;
    if (acceptedFiles[0]) {
      const imgRef = ref(imageUploadDB, `/files/${v4()}`);
      await uploadBytes(imgRef, acceptedFiles[0]).then(async (imgData) => {
        await getDownloadURL(imgData.ref).then((val) => (data.image = val));
      });
    }
    const res = await updateFacility(data);

    if (res?.data) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button
          variant="outline"
          size="icon"
          className="border-none hover:bg-background relative"
        >
          <Edit className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Facility</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Facility Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Facility Description"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pricePerHour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Price/Hour</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Facility Price" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Facility Location" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <p className="text-sm font-semibold">Facility Image</p>
                <label
                  {...getRootProps()}
                  className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 mt-2"
                >
                  <div className=" text-center">
                    <div className=" border p-2 rounded-md max-w-min mx-auto">
                      <UploadCloud size={20} />
                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold">Drag files</span>
                    </p>
                    {acceptedFiles[0]?.name ? (
                      <p className="text-xs text-gray-500">
                        {acceptedFiles[0].name}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500">
                        Click to upload files &#40;files should be under 10 MB
                        &#41;
                      </p>
                    )}
                  </div>
                </label>

                <Input
                  {...getInputProps()}
                  id="dropzone-file"
                  accept="image/png, image/jpeg"
                  type="file"
                  className="hidden"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit">Update</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
