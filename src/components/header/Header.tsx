import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Navigation from "./Navigation";
import ProfileNavigation from "./ProfileNavigation";

const Header = () => {
  return (
    <div className="container px-3 py-4 flex justify-between items-center gap-11">
      {/* logo  */}
      <div>
        <img src="/images/logo/logo.png" width={55} alt="logo" />
      </div>
      {/* nav  */}
      <div className="flex-1">
        <Navigation />
      </div>
      {/* action button  */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Login
          </Link>
          <Link to="/registration" className={cn(buttonVariants())}>
            Registration
          </Link>
        </div>
        <div>
          <ProfileNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
