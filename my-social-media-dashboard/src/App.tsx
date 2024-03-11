import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center m-5">
        <span className="mr-3 font-bold text-slate-400">Dark Mode</span>
        <input type="checkbox"></input>
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
