import { Assets, MenuFooter } from "@/constants";
import Image from "next/image";

export default function Footer() {
  const iconsSocial = Object.values(Assets.FOOTER);
  const menuFooter = Object.values(MenuFooter);

  return (
    <div className="bg-black pt-6 pb-10 rounded-t-[40px] flex flex-col items-center px-3">
      <Image
        src={Assets.COMMON.logo_white}
        width={52}
        height={52}
        alt="logo footer"
      />
      <div className="w-full flex justify-between my-7">
        {iconsSocial.map((item) => {
          return (
            <>
              <div>
                <Image src={item} width={60} height={60} alt="logo footer" />
              </div>
            </>
          );
        })}
      </div>
      <b className="text-white font-serif text-lg mb-7">
        © Matte Engine, all rights reserved.
      </b>
      <hr className="bg-white w-full" />
      <div className="">
        {menuFooter.map((item) => {
          <b className="font-serif">{item.CHILDREN}</b>;
        })}
      </div>
    </div>
  );
}
