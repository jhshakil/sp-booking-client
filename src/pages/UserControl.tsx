import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUsersQuery } from "@/redux/features/user/userApi";
import { TUserData } from "@/types/user.types";

export default function UserControl() {
  const { data: usersData, isLoading, error } = useGetUsersQuery(undefined);

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>Something went wrong</p>;

  return (
    <div className="px-2 md:px-8 py-12">
      <div className="flex justify-between border-b border-border pb-4">
        <h2 className="text-3xl font-bold">User List</h2>
      </div>
      <div className="w-full">
        <Table>
          <TableCaption>A list of your user.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Email</TableHead>
              <TableHead className="font-bold">Phone</TableHead>
              <TableHead className="font-bold">Role</TableHead>
              <TableHead className="font-bold">Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData?.data?.map((user: TUserData) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
