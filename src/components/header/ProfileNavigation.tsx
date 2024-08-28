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
import { logout, TUser } from "@/redux/features/auth/authSlice";

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
            <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileNavigation;
