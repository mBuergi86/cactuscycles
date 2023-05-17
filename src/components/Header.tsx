"use client";
import Image from "next/image";
import { NavigationHeader } from "./Navigation";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="justify-between h-36 w-full bg-turquoise-200 bg-opacity-30 rounded-b-xl">
        <Image
          src="/images/logo_cactus.png"
          width={150}
          height={100}
          alt=""
          className="absolute op h-36 clip-path-mypolygon w-auto mt--4 ml--10 object-contain rounded-bl-xl"
        />
        <nav className="flex justify-center items-center px-5 w-full h-full">
          <NavigationHeader />
        </nav>
      </div>
    </div>
  );
};
