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
      <div className="bg-blue-200 dark:bg-dark-blue-400 flex-1 lg:flex-initial min-w-64 w-64 h-32 rounded-b-md flex flex-col justify-evenly mb-4 lg:mb-5 rounded">
        <div className="flex justify-between">
          <div className="font-bold text-sm ml-6 mt-3">{label}</div>
          <img
            src={`icon-${socialMediaProvider}.svg`}
            className="w-5 h-5 mt-3 mr-8"
          />
        </div>
        <div className="flex justify-between">
          <div className="font-bold text-4xl ml-6">{getCount()}</div>
          <div className="flex flew-row items-center justify-center mr-8 mt-3">
            <img
              src={`icon-${
                isPercentagePositive ? "up" : "down"
              }.svg`}
              className="w-2 h-1 m-0.5"
            />
            <span
              className={`text-xs ${
                isPercentagePositive ? "lime-green" : "bright-red"
              } font-bold`}
            >
              {Math.abs(percentage)}%
            </span>
          </div>
        </div>
      </div>
    );
  }