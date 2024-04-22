import "./App.css";
import { OverviewCard } from "./OverviewCard";
import { Card } from "./card";
import { Header } from "./header";

function App() {
  return (
    <>
      <Header />
      <div className="my-11 mx-0.5 flex justify-between">
        <Card
          socialMediaProvider="facebook"
          followersCount={1987}
          followersCountToday={12}
          handleName="@nathanf"
        />
        <Card
          socialMediaProvider="twitter"
          followersCount={1044}
          followersCountToday={99}
          handleName="@nathanf"
        />
        <Card
          socialMediaProvider="instagram"
          followersCount={11000}
          followersCountToday={1099}
          handleName="@realnathanf"
        />
        <Card
          socialMediaProvider="youtube"
          followersCount={8239}
          followersCountToday={-144}
          handleName="Nathan F."
        />
      </div>
      <h2 className="text-left font-bold text-2xl leading-none grayish-blue">
        Overview - Today
      </h2>
      <div className="mt-5 my-11 mx-0.5 flex justify-between">
        <OverviewCard socialMediaProvider="facebook" label="Page Views" count={87} percentage={3} />
        <OverviewCard socialMediaProvider="facebook" label="Likes" count={52} percentage={-2} />
        <OverviewCard socialMediaProvider="instagram" label="Likes" count={5462} percentage={2257} />
        <OverviewCard socialMediaProvider="instagram" label="Profile Views" count={52000} percentage={1375} />
        {/* <OverviewCard socialMediaProvider="facebook" />
        <OverviewCard socialMediaProvider="facebook" />
        <OverviewCard socialMediaProvider="facebook" />
        <OverviewCard socialMediaProvider="facebook" /> */}
      </div>
    </>
  );
}

export default App;
