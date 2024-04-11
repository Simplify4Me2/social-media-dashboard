import "./App.css";
import { Header } from "./header";

function App() {
  return (
    <>
      <Header />
      <div className="my-11 mx-0.5">
        {/* <Card /> */}
        <div className="w-64 h-56 flex flex-col-reverse facebook rounded">
          <div className="bg-card w-64 h-55 rounded-b-sm flex flex-col justify-center">
            <div className="flex flew-row items-center justify-center">
              <img src="icon-facebook.svg" className="w-5 h-5 mr-2" />
              <span className="text-xs font-bold">@nathanf</span>
            </div>
            <div className="flex flex-col m-3">
              <span className="text-6xl font-bold">1987</span>
              <span className="text-xs tracking-widest">FOLLOWERS</span>
            </div>
            <div className="flex flew-row items-center justify-center">
              <img src="icon-up.svg" className="w-2 h-1 mr-1" />
              <span className="text-xs lime font-bold">12 Today</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Card() {
  return (
    <div className="flex flex-col max-w-fit card-bg p-11">
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
  );
}
