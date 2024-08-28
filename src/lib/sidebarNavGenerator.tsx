import { TSidebarItem, TUserPath } from "@/types/user.types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        path: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
