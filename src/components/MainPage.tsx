"use client"
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const MainPage = ({ children }: Props) => {
  return (
    <>
      <div className="h-screen w-screen bg-turquoise-200 bg-opacity-30">
        <div className="container h-full mx-auto xl:px-30 max-w-7xl">
          <Header />
          <main className="flex-grow p-5">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
