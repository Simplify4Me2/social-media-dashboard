import "./App.css";
import { ToggleSwitch } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-fit card-bg p-5">
        <div className="flex flew-row ">
          <img src="icon-facebook.svg" className="w-5 h-5 mr-1" />
          <span>@nathanf</span>
        </div>
        <div className="flex flex-col m-3">
          <span>1987</span>
          <span>FOLLOWERS</span>
        </div>
        <div className="flex flew-row items-center">
          <img src="icon-up.svg" className="w-2 h-1 mr-1" />
          <span className="lime">12 Today</span>
        </div>
      </div>
    </>
  );
}

export default App;

function Header() {
  return (
    <header className="flex justify-between w-screen">
      <div>
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,004</h3>
      </div>
      <div>
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <ToggleSwitch />
      </div>
    </header>
  );
}
