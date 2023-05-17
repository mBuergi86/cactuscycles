"use client";
import { NavigationFooter } from "./Navigation";

export const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full left-0">
      <div className=" bg-turquoise-100 w-full">
        <NavigationFooter />
      </div>
    </div>
  );
};
