import { Menu, Routes } from "@/constants";
import { NavItem } from "./NavItem";

export default function NavHeader() {
  const items = [
    {
      key: 1,
      href: Routes.COURSE,
      name: Menu.COURSE,
    },
    {
      key: 2,
      href: Routes.PROGRAM,
      name: Menu.PROGRAM,
    },
    {
      key: 3,
      href: Routes.ABOUT,
      name: Menu.ABOUT,
    },
    {
      key: 4,
      href: Routes.TOOLS,
      name: Menu.TOOLS,
    },
    {
      key: 5,
      href: Routes.PRICING,
      name: Menu.PRICING,
    },
  ];
  const lengthNav = items.length;

  return (
    <nav className="bg-black border border-black h-fit w-fit rounded-full flex items-center">
      {items.map((item, index) => {
        return (
          <div key={item.key}>
            <NavItem item={item} index={index} lengthNav={lengthNav} />
          </div>
        );
      })}
    </nav>
  );
}
