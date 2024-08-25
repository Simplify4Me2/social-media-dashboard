interface ICardProps {
  socialMediaProvider: "facebook" | "instagram" | "twitter" | "youtube";
  handleName: string;
  followersCount: number;
  followersCountToday: number;
}

export function Card({
  followersCount,
  followersCountToday,
  handleName,
  socialMediaProvider,
}: ICardProps) {
  const isFollowersCountTodayPositive: boolean = followersCountToday > 0;

  function getFollowersCount() {
    if (followersCount < 10_000) return followersCount;

    const thousands = followersCount / 1000;

    return `${thousands}k`;
  }

  function resolveDecorationStyle(): string {
    let classNames = "before:block before:h-1 before:rounded-t-lg ";

    switch (socialMediaProvider) {
      case "facebook":
        classNames += "before:bg-azure-blue";
        break;
      case "instagram":
        classNames +=
          "before:bg-gradient-to-r before:from-yellow before:to-candy-apple-red";
        break;
      case "twitter":
        classNames += "before:bg-sky-blue";
        break;
      case "youtube":
        classNames += "before:bg-chili-red";
        break;
      default:
        classNames += "before:bg-white";
        break;
    }

    return classNames;
  }
  return (
    <li
      className={`list-none h-54 ${resolveDecorationStyle()} grid items-start bg-blue-100 dark:bg-dark-blue-400 hover:bg-blue-200 hover:dark:bg-blue-700 hover:cursor-pointer rounded-b-lg`}
    >
      <span className="flex justify-center items-center mt-1.5">
        <img
          src={`icon-${socialMediaProvider}.svg`}
          alt={`${socialMediaProvider} icon`}
          className="w-5 h-5 mr-2"
        />
        <p className="text-xs dark:text-blue-400 font-bold">{handleName}</p>
      </span>
      <span className="flex flex-col">
        <strong className="text-center text-6xl dark:text-white font-bold tracking-tight leading-none">
          {getFollowersCount()}
        </strong>
        <p className="text-center text-xs text-blue-700 dark:text-blue-400 tracking-widest">
          {socialMediaProvider === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
        </p>
      </span>
      <span className="flex justify-center items-center ">
        <img
          src={`icon-${isFollowersCountTodayPositive ? "up" : "down"}.svg`}
          alt={`${isFollowersCountTodayPositive ? "up" : "down"} icon`}
          className="w-2 h-1 mr-1"
        />
        <small
          className={`text-xs ${
            isFollowersCountTodayPositive ? "text-lime" : "text-red"
          } font-bold`}
        >
          {Math.abs(followersCountToday)} Today
        </small>
      </span>
    </li>
  );
}
