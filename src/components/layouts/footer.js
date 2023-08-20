import { Assets, MenuFooter } from "@/constants";
import Image from "next/image";

export default function Footer() {
  const iconsSocial = Object.values(Assets.FOOTER);
  const menuFooter = Object.values(MenuFooter);

  return (
    <footer className="bg-black pt-6 pb-10 rounded-t-[40px] px-3 lg:px-16">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="w-full flex flex-col items-center lg:items-start lg:shrink-0 lg:mr-10 lg:w-auto">
          <Image
            src={Assets.COMMON.logo_white}
            width={52}
            height={52}
            alt="logo footer"
          />
          <div className="w-full flex justify-between my-7 lg:mt-11 lg:mb-0">
            {iconsSocial.map((item) => {
              return (
                <>
                  <div>
                    <Image
                      src={item}
                      width={60}
                      height={60}
                      alt="logo footer"
                    />
                  </div>
                </>
              );
            })}
          </div>
          <b className="text-white font-serif text-lg mb-7 lg:hidden">
            © Matte Engine, all rights reserved.
          </b>
        </div>
        <hr className="bg-white w-full lg:hidden" />
        <div className="text-center mt-7 space-y-10 lg:space-y-0 flex flex-col lg:flex-row lg:justify-between lg:w-full lg:text-left lg:mt-0">
          {menuFooter.map((item) => {
            return (
              <>
                <div className="w-full flex justify-center">
                  <hr className="bg-white rotate-180 w-[1px] h-full mr-8 hidden lg:block" />
                  <div>
                    <p className="text-white text-xl font-serif font-bold mb-5">
                      {item.TITLE}
                    </p>
                    <div className="space-y-3.5">
                      {" "}
                      {Object.values(item.CHILDREN).map((children) => {
                        return (
                          <>
                            <p className="text-white text-lg font-normal font-serif">
                              {children}
                            </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <p className="text-white font-serif text-lg mt-11 hidden lg:block">
        © Matte Engine, all rights reserved.
      </p>
    </footer>
  );
}
