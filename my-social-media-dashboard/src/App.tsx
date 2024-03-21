import "./App.css";
import { ToggleSwitch } from "./components";

function App() {
  return (
    <>
      <div className="flex items-center m-5">
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <ToggleSwitch />
      </div>
    </>
  );
}

export default App;


