interface ICardProps {
    socialMediaProvider: "facebook" | "instagram" | "twitter" | "youtube";
    handleName: string;
    followersCount: number;
    followersCountToday: number;
  }
  
  export function Card({ followersCount, followersCountToday, handleName, socialMediaProvider }: ICardProps) {
    const isFollowersCountTodayPositive : boolean = followersCountToday > 0;

    function getFollowersCount() {
        if (followersCount < 10_000)
            return followersCount;

        const thousands = followersCount / 1000;

        return `${thousands}k`;
    }

    return (
      <div
        className={`w-64 h-54 flex flex-col-reverse ${socialMediaProvider} rounded`}
      >
        <div className="bg-card w-64 h-53 rounded-b-sm flex flex-col">
          <div className="flex flew-row items-center justify-center mt-7">
            <img
              src={`icon-${socialMediaProvider}.svg`}
              className="w-5 h-5 mr-2"
            />
            <span className="text-xs font-bold">{handleName}</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-6xl font-bold tracking-tighter leading-none pt-6">{getFollowersCount()}</span>
            <span className="text-xs tracking-widest pt-1">{socialMediaProvider === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</span>
          </div>
          <div className="flex flew-row items-center justify-center mt-6">
            <img src={`icon-${isFollowersCountTodayPositive ? "up" : "down"}.svg`} className="w-2 h-1 mr-1" />
            <span className={`text-xs ${isFollowersCountTodayPositive ? "lime-green" : "bright-red"} font-bold`}>{Math.abs(followersCountToday)} Today</span>
          </div>
        </div>
      </div>
    );
  }