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
        <div className="absolute dark:bg-dark-blue-600 lg:h-64 w-full z-0" />
        <Header>
          <span className="mr-3 mt-1 text-sm text-blue-700 dark:text-blue-400 lg:text-slate-400">
            Dark Mode
          </span>
          <ToggleSwitch
            isEnabled={isDarkModeEnabled}
            onChange={toggleDarkMode}
          />
        </Header>
        <section className="my-4 mx-6 lg:mt-7 lg:w-276 lg:self-center z-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaData.map((item) => (
              <Card
                key={item.provider}
                socialMediaProvider={item.provider}
                handleName={item.handle}
                followersCount={item.count}
                followersCountToday={item.countToday}
              />
            ))}
          </ul>
        </section>
        <section className="my-4 mx-6 lg:w-276 lg:self-center">
          <h2 className="mt-4 mb-8 lg:mb-6 text-left font-bold text-2xl leading-none text-blue-700 dark:text-blue-400">
            Overview - Today
          </h2>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-5">
            {socialMediaOverviewData.map((item) => (
              <OverviewCard
                key={`${item.provider} ${item.label}`}
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

export default App;
