import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center m-5">
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <label className="relative inline-block w-[60px] h-[34px]">
          <input type="checkbox" className="opacity-0 h-0 w-0"></input>
          <span className="absolute cursor-pointer gray rounded-3xl before:rounded-3xl top-0 left-0 right-0 bottom-0 transition slider"></span>
        </label>
      </div>

      <div className="flex items-center m-5">
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export default App;
