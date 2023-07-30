"use client";

import { Assets } from "@/constants";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const NavItem = ({ item, index, lengthNav }) => {
  const { href, name } = item;
  const navStart = index === 0;
  const navEnd = index === lengthNav - 1;

  const pathname = usePathname();

  const active = useMemo(() => {
    if (pathname === href) return true;
    return false;
  }, [pathname, href]);

  return (
    <div className="text-lg leading-[24px] flex">
      <div className="flex">
        {!navStart && (
          <Image
            src={active ? Assets.NAV.active_left : Assets.NAV.left}
            width={21}
            height={42}
            alt="nav left"
          />
        )}
        <Link href={href}>
          <div
            className={cn("bg-white py-[9px] cursor-pointer", {
              "rounded-l-full pl-[22px]": navStart,
              "rounded-r-full pr-[22px]": navEnd,
              "bg-green": active,
            })}
          >
            {name}
          </div>
        </Link>

        {!navEnd && (
          <Image
            src={active ? Assets.NAV.active_right : Assets.NAV.right}
            width={21}
            height={42}
            alt="nav left"
          />
        )}
      </div>
    </div>
  );
};
