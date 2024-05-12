import "./App.css";
import { OverviewCard } from "./OverviewCard";
import { Card } from "./card";
import { Header } from "./header";

function App() {
  return (
    <body className="lg:px-1.5">
      <Header />
      <div className="my-11 mx-0.5 flex justify-between flex-wrap">
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
      <h2 className="text-left font-bold text-2xl leading-none grayish-blue pt-1">
        Overview - Today
      </h2>
      <div className="mt-6 my-11 mx-0.5 flex flex-wrap justify-between">
        <OverviewCard socialMediaProvider="facebook" label="Page Views" count={87} percentage={3} />
        <OverviewCard socialMediaProvider="facebook" label="Likes" count={52} percentage={-2} />
        <OverviewCard socialMediaProvider="instagram" label="Likes" count={5462} percentage={2257} />
        <OverviewCard socialMediaProvider="instagram" label="Profile Views" count={52000} percentage={1375} />
        <OverviewCard socialMediaProvider="twitter" label="Retweets" count={117} percentage={303} />
        <OverviewCard socialMediaProvider="twitter" label="Likes" count={507} percentage={553} />
        <OverviewCard socialMediaProvider="youtube" label="Likes" count={107} percentage={-19} />
        <OverviewCard socialMediaProvider="youtube" label="Total Views" count={1407} percentage={-12} />
      </div>
    </body>
  );
}

export default App;
