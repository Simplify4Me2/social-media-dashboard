import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="flex flex-wrap justify-between w-full font-bold mt-1.5">
      <div>
        <h1 className="text-xl lg:text-3xl text-dark-blue-800 dark:text-white pt-1.5 font-bold">Social Media Dashboard</h1>
        <h3 className="text-sm text-start m-px text-blue-700 dark:text-blue-400 mt-0.5">
          Total Followers: 23,004
        </h3>
      </div>
      <hr className="lg:hidden border-black w-full mt-5 mb-4" />
      <div className="flex items-center mb-3 mr-1 w-full lg:w-fit justify-between">
        {children}
      </div>
    </header>
  );
}
