import "./App.css";
import { Card } from "./card";
import { Header } from "./header";

function App() {
  return (
    <>
      <Header />
      <div className="my-11 mx-0.5 flex justify-between">
        <div>
          <Card
            socialMediaProvider="facebook"
            followersCount={1987}
            followersCountToday={12}
            handleName="@nathanf"
          />
        </div>
        <div>
          <Card
            socialMediaProvider="twitter"
            followersCount={1044}
            followersCountToday={99}
            handleName="@nathanf"
          />
        </div>
        <div>
          <Card
            socialMediaProvider="instagram"
            followersCount={11000}
            followersCountToday={1099}
            handleName="@realnathanf"
          />
        </div>
        <div>
          <Card
            socialMediaProvider="youtube"
            followersCount={8239}
            followersCountToday={-144}
            handleName="Nathan F."
          />
        </div>
      </div>
    </>
  );
}

export default App;


