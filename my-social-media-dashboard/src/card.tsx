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
  return (
    <New
      followersCount={followersCount}
      followersCountToday={followersCountToday}
      handleName={handleName}
      socialMediaProvider={socialMediaProvider}
    />
  );
  return (
    <Old
      followersCount={followersCount}
      followersCountToday={followersCountToday}
      handleName={handleName}
      socialMediaProvider={socialMediaProvider}
    />
  );
}

function Old({
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

  function resolveBackgroundColor() {
    switch (socialMediaProvider) {
      case "facebook":
        return "bg-azure-blue";
      case "instagram":
        return "bg-gradient-to-r from-yellow to-candy-apple-red";
      case "twitter":
        return "bg-sky-blue";
      case "youtube":
        return "bg-chili-red";
      default:
        return "bg-white";
    }
  }

  return (
    <div
      className={`${resolveBackgroundColor()} flex-1 lg:flex-initial mb-6 lg:w-64 h-54 flex flex-col-reverse rounded last:mb-1`}
    >
      <div className="w-80 lg:w-64 h-53 rounded-b-sm flex flex-col bg-blue-100 dark:bg-dark-blue-400 hover:bg-blue-200 hover:dark:bg-blue-700 hover:cursor-pointer">
        <div className="flex flew-row items-center justify-center mt-7">
          <img
            src={`icon-${socialMediaProvider}.svg`}
            alt={`${socialMediaProvider} icon`}
            className="w-5 h-5 mr-2"
          />
          <span className="text-xs dark:text-blue-400 font-bold">
            {handleName}
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-6xl dark:text-white font-bold tracking-tighter leading-none pt-6">
            {getFollowersCount()}
          </span>
          <span className="text-xs dark:text-blue-400 tracking-widest pt-1">
            {socialMediaProvider === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
          </span>
        </div>
        <div className="flex flew-row items-center justify-center mt-6">
          <img
            src={`icon-${isFollowersCountTodayPositive ? "up" : "down"}.svg`}
            alt={`${isFollowersCountTodayPositive ? "up" : "down"} icon`}
            className="w-2 h-1 mr-1"
          />
          <span
            className={`text-xs ${
              isFollowersCountTodayPositive ? "text-lime" : "text-red"
            } font-bold`}
          >
            {Math.abs(followersCountToday)} Today
          </span>
        </div>
      </div>
    </div>
  );
}

function New({
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
      className={`list-none h-54 ${resolveDecorationStyle()} grid bg-blue-200 dark:bg-dark-blue-400 hover:bg-blue-200 hover:dark:bg-blue-700 hover:cursor-pointer rounded-b-lg`}
    >
      <span className="flex justify-center items-center ">
        <img
          src={`icon-${socialMediaProvider}.svg`}
          alt={`${socialMediaProvider} icon`}
          className="w-5 h-5 mr-2"
        />
        <p className="text-xs dark:text-blue-400 font-bold">{handleName}</p>
      </span>
      <strong className="text-center text-6xl dark:text-white font-bold tracking-tigh">
        {getFollowersCount()}
      </strong>
      <p className="text-center text-xs text-blue-700 dark:text-blue-400 tracking-widest">
        {socialMediaProvider === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
      </p>
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
