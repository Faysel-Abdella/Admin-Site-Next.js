"use client";

import { usePathname } from "next/navigation";

import sideBarContents from "../data/sideBar";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex bg-[#F3F3F3]">
      <article className="min-h-screen min-w-[280px] rounded-tr-[30px] bg-white">
        <div className="flex items-center justify-center pt-[55px]">
          <div className="flex h-[55px] w-[210px] items-center justify-center">
            <Image src={logo} alt="Our logo - Great Meat" />
          </div>
        </div>

        <section className="flex items-center justify-center pt-16">
          <section>
            {sideBarContents.map((item) => (
              <Navigation
                key={item.order}
                icon={item.icon}
                activeIcon={item.activeIcon}
                init={item.init}
                firstRoute={item.firstRoute}
                route={item.firstRoute}
                mainTitle={item.mainTitle}
                subTitles={item.subTitles}
                order={item.order}
              />
            ))}
          </section>
        </section>
      </article>

      <section className="w-full py-12 pl-9 pr-6">{children}</section>
    </section>
  );
};

export default SideBar;
