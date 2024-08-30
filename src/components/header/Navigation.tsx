import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-md")}
            asChild
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-md")}
            asChild
          >
            <Link to="/facility">Facility</Link>
          </NavigationMenuLink>

          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-md")}
            asChild
          >
            <Link to="/about">About Us</Link>
          </NavigationMenuLink>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-md")}
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
