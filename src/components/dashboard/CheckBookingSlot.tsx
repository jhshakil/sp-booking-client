import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn, Tomorrow } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useCheckAvailabilityMutation } from "@/redux/features/booking/bookingApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/facility.types";
import { TSlot } from "@/types/booking.types";

type Props = {
  slotResult: (data: TSlot[]) => void;
  facilityParam?: string;
};

const FormSchema = z.object({
  facility: z.string(),
  date: z.date({
    errorMap: () => ({
      message: "Please Select Date",
    }),
  }),
});

const CheckBookingSlot = ({ slotResult, facilityParam }: Props) => {
  const { data: facilityData, isLoading } = useGetFacilitiesQuery(undefined);
  const [checkAvailability] = useCheckAvailabilityMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      facility: facilityParam ?? "",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      date: Tomorrow(),
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = {
      date: format(data.date, "yyyy-MM-dd"),
      facility: data.facility,
    };
    const result = await checkAvailability(formData);
    if (result?.data?.data) slotResult(result.data.data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="gap-6 grid grid-cols-2">
          <FormField
            control={form.control}
            name="facility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facility</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          isLoading ? "Loading.." : "Select a Facility"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {facilityData?.data && facilityData?.data.length ? (
                      facilityData.data.map((facility: TFacility) => (
                        <SelectItem value={facility._id} key={facility._id}>
                          {facility.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="none">No Facility Found</SelectItem>
                    )}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="leading-snug	">Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      defaultMonth={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date > new Date("2030-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckBookingSlot;
