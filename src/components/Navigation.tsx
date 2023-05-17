"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const pagesHeader = {
  home: "/",
  service: "/service",
  onlineShop: "https://shop.cactuscycles.de",
  flowMarket: "https://rb.gy/uin4vw",
  SLD: "/sld",
  danksagung: "/danksagung",
  sponsoring: "/sponsoring",
};

const pagesFooter = {
  über_uns: "/ueberuns",
  kontakt: "/kontakt",
  impressum: "/impressum",
  AGB: "/agb",
};

type PageHeaderKeys = keyof typeof pagesHeader;
type PageFooterKeys = keyof typeof pagesFooter;

interface NavLinkPropsHeader {
  to: PageHeaderKeys;
  label: string;
}

interface NavLinkPropsFooter {
  to: PageFooterKeys;
  label: string;
}

const NavHeader: React.FC<NavLinkPropsHeader> = ({ to, label }) => {
  const currentRouter = usePathname() === pagesHeader[to];
  const isExternalLink = pagesHeader[to].startsWith("http");

  return (
    <li
      className={
        currentRouter
          ? "bg-turquoise-500 text-[#FFFFFF] rounded-xl px-4 py-1"
          : "bg-turquoise-300 rounded-xl px-4 py-1 hover:bg-turquoise-500 hover:text-[#FFFFFF] hover:scale-125 focus:outline-none transition-all"
      }
    >
      {isExternalLink ? (
        <a href={pagesHeader[to]} target="_self" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={pagesHeader[to]} passHref legacyBehavior>
          {label}
        </Link>
      )}
    </li>
  );
};

const NavFooter: React.FC<NavLinkPropsFooter> = ({ to, label }) => {
  const isExternalLink = pagesFooter[to].startsWith("http");

  return (
    <li className="hover:text-[#FFFFFF]">
      {isExternalLink ? (
        <a href={pagesFooter[to]} target="_self" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={pagesFooter[to]} passHref legacyBehavior>
          {label}
        </Link>
      )}
    </li>
  );
};

export const NavigationHeader: React.FC = () => {
  return (
    <>
      <ul className="flex gap-4 text-xs">
        {Object.keys(pagesHeader).map((key: string, index: number) => (
          <NavHeader
            key={index}
            to={key as PageHeaderKeys}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
      </ul>
    </>
  );
};

export const NavigationFooter: React.FC = () => {
  return (
    <>
      <nav className="py-2 w-full justify-center flex">
        <ul className="flex gap-4">
          {Object.keys(pagesFooter).map((key: string, index: number) => (
            <NavFooter
              key={index}
              to={key as PageFooterKeys}
              label={
                key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")
              }
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
