import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Navigation from "./Navigation";
import ProfileNavigation from "./ProfileNavigation";
import MobileNavigation from "./MobileNavigation";
import { useAppSelector } from "@/redux/hooks";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/lib/verifyToken";

const Header = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  return (
    <div className="container px-3 py-4 flex justify-between items-center gap-6 lg:gap-11">
      {/* logo  */}
      <div>
        <img src="/images/logo/logo.png" width={55} alt="logo" />
      </div>
      {/* nav  */}
      <div className="hidden md:block flex-1">
        <Navigation />
      </div>
      {/* action button  */}
      <div className="flex gap-4 items-center">
        {user?.email ? (
          <div className="flex items-center gap-4">
            <ProfileNavigation />
            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className={cn(buttonVariants())}>
              Login
            </Link>
            <Link
              to="/registration"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hidden lg:block"
              )}
            >
              Registration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
