import "./App.css";

function App() {
  return (
    <>
      {/* <input type="checkbox"></input> */}
    <div className="flex items-center">
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
