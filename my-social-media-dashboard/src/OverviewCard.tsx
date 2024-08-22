interface IOverviewCardProps {
  socialMediaProvider: "facebook" | "instagram" | "twitter" | "youtube";
  label: string;
  count: number;
  percentage: number;
}

export function OverviewCard({
  socialMediaProvider,
  label,
  count,
  percentage,
}: IOverviewCardProps) {
  return (
    <New
      socialMediaProvider={socialMediaProvider}
      label={label}
      count={count}
      percentage={percentage}
    />
  );
  return (
    <Old
      socialMediaProvider={socialMediaProvider}
      label={label}
      count={count}
      percentage={percentage}
    />
  );
}

function Old({
  socialMediaProvider,
  label,
  count,
  percentage,
}: IOverviewCardProps) {
  const isPercentagePositive: boolean = percentage > 0;

  function getCount() {
    if (count < 10_000) return count;

    const thousands = count / 1000;

    return `${thousands}k`;
  }

  return (
    <div className="flex-1 lg:flex-initial min-w-64 w-64 h-32 rounded-b-md flex flex-col justify-evenly mb-4 lg:mb-5 rounded bg-blue-100 dark:bg-dark-blue-400 hover:bg-blue-200 hover:dark:bg-blue-700 hover:cursor-pointer">
      <div className="flex justify-between">
        <div className="font-bold text-sm dark:text-blue-400 ml-6 mt-3">
          {label}
        </div>
        <img
          src={`icon-${socialMediaProvider}.svg`}
          alt={`${socialMediaProvider} icon`}
          className="w-5 h-5 mt-3 mr-8"
        />
      </div>
      <div className="flex justify-between">
        <div className="font-bold text-4xl dark:text-white ml-6">
          {getCount()}
        </div>
        <div className="flex flew-row items-center justify-center mr-8 mt-3">
          <img
            src={`icon-${isPercentagePositive ? "up" : "down"}.svg`}
            alt={`${isPercentagePositive ? "up" : "down"} icon`}
            className="w-2 h-1 m-0.5"
          />
          <span
            className={`text-xs ${
              isPercentagePositive ? "text-lime" : "text-red"
            } font-bold`}
          >
            {Math.abs(percentage)}%
          </span>
        </div>
      </div>
    </div>
  );
}

function New({
  socialMediaProvider,
  label,
  count,
  percentage,
}: IOverviewCardProps) {
  const isPercentagePositive: boolean = percentage > 0;

  function getCount() {
    if (count < 10_000) return count;

    const thousands = count / 1000;

    return `${thousands}k`;
  }

  return (
    <li className="h-32 rounded bg-blue-200 dark:bg-dark-blue-400 hover:bg-blue-400 hover:dark:bg-blue-700 hover:cursor-pointer">
      <em>{label}</em>
      <img
        src={`icon-${socialMediaProvider}.svg`}
        alt={`${socialMediaProvider} icon`}
        className="w-5 h-5 mt-3 mr-8"
      />
      <strong>{getCount()}</strong>
      <p
        className={`text-xs ${
          isPercentagePositive ? "text-lime" : "text-red"
        } font-bold`}
      >
        {Math.abs(percentage)}%
      </p>
    </li>
  );
}
