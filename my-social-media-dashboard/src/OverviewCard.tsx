interface IOverviewCardProps {
    socialMediaProvider: "facebook" | "instagram" | "twitter" | "youtube";
    label: string;
    count: number;
    percentage: number;
  }
  
  export function OverviewCard({ socialMediaProvider, label, count, percentage }: IOverviewCardProps) {

    const isPercentagePositive : boolean = percentage > 0;

    function getCount() {
        if (count < 10_000)
            return count;

        const thousands = count / 1000;

        return `${thousands}k`;
    }

    return (
      <div className="bg-card w-64 h-32 rounded-b-sm flex flex-col justify-evenly">
        <div className="flex justify-around ">
          <div className="font-bold text-sm mr-10 mt-2">{label}</div>
          <img
            src={`icon-${socialMediaProvider}.svg`}
            className="w-5 h-5 mt-2"
          />
        </div>
        <div className="flex justify-between">
          <div className="font-bold text-4xl ml-8">{getCount()}</div>
          <div className="flex flew-row items-center justify-center mr-7 mt-4">
            <img
              src={`icon-${
                isPercentagePositive ? "up" : "down"
              }.svg`}
              className="w-2 h-1 mr-1"
            />
            <span
              className={`text-xs ${
                isPercentagePositive ? "lime-green" : "bright-red"
              } font-bold`}
            >
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    );
  }