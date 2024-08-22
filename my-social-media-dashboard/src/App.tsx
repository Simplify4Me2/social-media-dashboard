import "./App.css";
import { OverviewCard } from "./OverviewCard";
import { Card } from "./card";
import { ToggleSwitch } from "./components";
import { Header } from "./header";
import { useDarkModeState } from "./hooks";

interface SocialMediaData {
  provider: "facebook" | "twitter" | "instagram" | "youtube";
  handle: string;
  count: number;
  countToday: number;
}

const socialMediaData: SocialMediaData[] = [
  {
    provider: "facebook",
    handle: "@nathanf",
    count: 1987,
    countToday: 12,
  },
  {
    provider: "twitter",
    handle: "@nathanf",
    count: 1044,
    countToday: 99,
  },
  {
    provider: "instagram",
    handle: "@realnathanf",
    count: 11000,
    countToday: 1099,
  },
  {
    provider: "youtube",
    handle: "Nathan F.",
    count: 8239,
    countToday: -144,
  },
];

interface SocialMediaOverviewData {
  provider: "facebook" | "twitter" | "instagram" | "youtube";
  label: string;
  count: number;
  percentage: number;
}

const socialMediaOverviewData: SocialMediaOverviewData[] = [
  {
    provider: "facebook",
    label: "Page Views",
    count: 87,
    percentage: 3,
  },
  {
    provider: "facebook",
    label: "Likes",
    count: 52,
    percentage: -2,
  },
  {
    provider: "instagram",
    label: "Likes",
    count: 5462,
    percentage: 2257,
  },
  {
    provider: "instagram",
    label: "Profile Views",
    count: 52000,
    percentage: 1375,
  },
  {
    provider: "twitter",
    label: "Retweets",
    count: 117,
    percentage: 303,
  },
  {
    provider: "twitter",
    label: "Likes",
    count: 507,
    percentage: 553,
  },
  {
    provider: "youtube",
    label: "Likes",
    count: 107,
    percentage: -19,
  },
  {
    provider: "youtube",
    label: "Total Views",
    count: 1407,
    percentage: -12,
  },
];

function App() {
  const { isEnabled: isDarkModeEnabled, toggle: toggleDarkMode } =
    useDarkModeState();

  return (
    <>
      <main
        className={`h-full lg:h-screen ${
          isDarkModeEnabled ? "dark" : ""
        } dark:bg-dark-blue-800 flex flex-col`}
      >
        {/* <div className="absolute bg-dark-blue-600 lg:h-64 w-full" /> */}
        <Header>
          <span className="mr-3 mt-1 text-sm text-blue-700 dark:text-blue-400 lg:text-slate-400">
            Dark Mode
          </span>
          <ToggleSwitch
            isEnabled={isDarkModeEnabled}
            onChange={toggleDarkMode}
          />
        </Header>
        <section className="my-4 mx-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaData.map((item) => (
              <Card
                socialMediaProvider={item.provider}
                handleName={item.handle}
                followersCount={item.count}
                followersCountToday={item.countToday}
              />
            ))}
          </ul>
        </section>
        <section className="my-4 mx-6">
          <h2 className="mt-4 mb-8 text-left font-bold text-2xl leading-none text-blue-700 dark:text-blue-400">
            Overview - Today
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {socialMediaOverviewData.map((item) => (
              <OverviewCard
                socialMediaProvider={item.provider}
                label={item.label}
                count={item.count}
                percentage={item.percentage}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

function Old() {
  const { isEnabled: isDarkModeEnabled, toggle: toggleDarkMode } =
    useDarkModeState();

  return (
    <main
      className={`h-full lg:h-screen ${
        isDarkModeEnabled ? "dark" : ""
      } dark:bg-dark-blue-800`}
    >
      <div className="dark:bg-dark-blue-600 lg:h-64">
        <div className="max-w-7xl p-[1.6rem] text-center my-0 mx-auto lg:px-[1.975rem]">
          <Header>
            <span className="mr-3 mt-1 text-sm text-blue-700 dark:text-blue-400 lg:text-slate-400">
              Dark Mode
            </span>
            <ToggleSwitch
              isEnabled={isDarkModeEnabled}
              onChange={toggleDarkMode}
            />
          </Header>
          <div className="mt-6 lg:mt-11 mb-11 lg:mb-5 mx-0.5 flex justify-between flex-wrap">
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
          <h2 className="text-left font-bold text-2xl leading-none text-blue-700 dark:text-blue-400 pt-1">
            Overview - Today
          </h2>
          <div className="mt-6 my-11 mx-0.5 flex flex-wrap justify-between">
            <OverviewCard
              socialMediaProvider="facebook"
              label="Page Views"
              count={87}
              percentage={3}
            />
            <OverviewCard
              socialMediaProvider="facebook"
              label="Likes"
              count={52}
              percentage={-2}
            />
            <OverviewCard
              socialMediaProvider="instagram"
              label="Likes"
              count={5462}
              percentage={2257}
            />
            <OverviewCard
              socialMediaProvider="instagram"
              label="Profile Views"
              count={52000}
              percentage={1375}
            />
            <OverviewCard
              socialMediaProvider="twitter"
              label="Retweets"
              count={117}
              percentage={303}
            />
            <OverviewCard
              socialMediaProvider="twitter"
              label="Likes"
              count={507}
              percentage={553}
            />
            <OverviewCard
              socialMediaProvider="youtube"
              label="Likes"
              count={107}
              percentage={-19}
            />
            <OverviewCard
              socialMediaProvider="youtube"
              label="Total Views"
              count={1407}
              percentage={-12}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
