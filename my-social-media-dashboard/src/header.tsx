import { ToggleSwitch } from "./components";

export function Header() {
  return (
    <header className="flex flex-wrap justify-between w-full font-bold mt-1.5">
      <div>
        <h1 className="text-xl lg:text-3xl dark-blue pt-1.5 font-bold">Social Media Dashboard</h1>
        <h3 className="text-sm text-start m-px grayish-blue mt-0.5">
          Total Followers: 23,004
        </h3>
      </div>
      <hr className="lg:hidden border-black w-full mt-5 mb-4" />
      <div className="flex items-center mb-3 mr-1 w-full lg:w-fit justify-between">
        <span className="mr-3 mt-1 text-sm grayish-blue lg:text-slate-400">Dark Mode</span>
        <ToggleSwitch />
      </div>
    </header>
  );
}
