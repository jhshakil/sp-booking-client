"use client";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { TUserData } from "@/types/user.types";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";

type Props = {
  user: TUserData;
};

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  role: z.string(),
  address: z.string(),
});

export function ProfileForm({ user }: Props) {
  const [updateUser] = useUpdateUserMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: user.name ?? "",
      email: user.email ?? "",
      phone: user.phone ?? "",
      role: user.role ?? "user",
      address: user.address ?? "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await updateUser(data).unwrap();
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[50vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your name"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your Phone number"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Type</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please enter your address"
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="!mt-6">
              Update Profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
