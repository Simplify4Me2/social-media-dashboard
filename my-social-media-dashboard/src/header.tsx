import { ToggleSwitch } from "./components";

export function Header() {
  return (
    <header className="flex justify-between w-full font-bold mt-2">
      <div>
        <h1 className="text-3xl dark-blue">Social Media Dashboard</h1>
        <h3 className="text-sm text-start m-px grayish-blue">
          Total Followers: 23,004
        </h3>
      </div>
      <div>
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <ToggleSwitch />
      </div>
    </header>
  );
}
