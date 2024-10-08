import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { TUser } from "@/types/user.types";

type Props = {
  user: TUser;
};

const ProfileNavigation = ({ user }: Props) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="uppercase">{user.role}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={`/${user.role}/profile`}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`/${user.role}/all-booking`}>Bookings</Link>
          </DropdownMenuItem>
          {user.role === "admin" ? (
            <>
              <DropdownMenuItem asChild>
                <Link to={`/${user.role}/facility`}>Facility</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/${user.role}/user`}>User</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/${user.role}/create-admin`}>Create Admin</Link>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem asChild>
              <Link to={`/${user.role}/create-booking`}>Create Booking</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileNavigation;
