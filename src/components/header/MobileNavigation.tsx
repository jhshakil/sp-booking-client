import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const MobileNavigation = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full h-full">
          <DrawerHeader className="flex justify-end">
            <DrawerClose asChild>
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex flex-col gap-8">
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-2xl")}
                    asChild
                  >
                    <Link to="/">Home</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-2xl")}
                    asChild
                  >
                    <Link to="/facility">Facility</Link>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-2xl")}
                    asChild
                  >
                    <Link to="/about">About Us</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-2xl")}
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigation;
