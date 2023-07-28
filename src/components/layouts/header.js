import { Assets } from "@/constants";
import Image from "next/image";

const NavItem = (items) => {
  const { index, length, nameNav } = items;

  const navStart = index === 0;
  const navEnd = index === length;

  return (
    <>
      {navStart && <div>start</div>}
      <div>{nameNav}</div>
      {navEnd && <div>end</div>}
    </>
  );
};

export default function Header() {
  return (
    <div className="p-4 lg:px-5 pt-2.5">
      <button className="border border-black p-2.5 rounded-full bg-green lg:hidden">
        <Image
          src={Assets.COMMON.menu}
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </button>
      <div className="flex justify-between">
        <Image
          src={Assets.COMMON.logo}
          width={44}
          height={44}
          alt="Picture of the author"
        />
        <nav className="bg-black rounded-full border border-black">haha</nav>
        <button className="border border-black p-2.5 rounded-full bg-green">
          <Image
            src={Assets.COMMON.login}
            width={24}
            height={24}
            alt="Picture of the author"
          />
        </button>
      </div>
    </div>
  );
}
