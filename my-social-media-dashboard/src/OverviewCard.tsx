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
  const isPercentagePositive: boolean = percentage > 0;

  function getCount() {
    if (count < 10_000) return count;

    const thousands = count / 1000;

    return `${thousands}k`;
  }

  return (
    <li className="grid grid-cols-2 items-center h-32 rounded bg-blue-100 dark:bg-dark-blue-400 hover:bg-blue-200 hover:dark:bg-blue-700 hover:cursor-pointer">
      <p className="font-bold text-sm text-blue-700 dark:text-blue-400 ml-6 mt-4">
        {label}
      </p>
      <img
        src={`icon-${socialMediaProvider}.svg`}
        alt={`${socialMediaProvider} icon`}
        className="w-5 h-5 mt-5 justify-self-end mr-8"
      />
      <strong className="font-bold text-4xl dark:text-white ml-6 mb-2">
        {getCount()}
      </strong>
      <span className="flex justify-end items-center mr-7 mt-1">
        <img
          src={`icon-${isPercentagePositive ? "up" : "down"}.svg`}
          alt={`${isPercentagePositive ? "up" : "down"} icon`}
          className="w-2 h-1 m-0.5"
        />
        <p
          className={`text-xs ${
            isPercentagePositive ? "text-lime" : "text-red"
          } font-bold`}
        >
          {Math.abs(percentage)}%
        </p>
      </span>
    </li>
  );
}
