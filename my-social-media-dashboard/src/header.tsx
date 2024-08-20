import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="flex flex-wrap justify-between font-bold m-6 mt-8">
      <div>
        <h1 className="text-xl lg:text-3xl text-dark-blue-800 dark:text-white pt-1.5 font-bold">
          Social Media Dashboard
        </h1>
        <h2 className="text-sm text-start m-px text-blue-700 dark:text-blue-400 mt-0.5">
          Total Followers: 23,004
        </h2>
      </div>
      <hr className="lg:hidden border-black w-full mt-5 mb-3" />
      <div className="flex items-center w-full justify-between lg:w-fit ">{children}</div>
    </header>
  );
}
