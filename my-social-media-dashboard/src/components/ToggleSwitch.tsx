interface IToggleSwitchProps {
  isEnabled: boolean;
  onChange: () => void;
}

export function ToggleSwitch({ isEnabled, onChange }: IToggleSwitchProps) {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center mt-1">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={onChange}
          className="sr-only"
        />
        <span className={`box block h-[24px] w-[48px] rounded-full bg-gradient-to-r ${isEnabled ? `from-true-blue to-green` : `bg-gray`} hover:from-true-blue hover:to-green`}>
        <div className={`relative left-[3px] top-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white dark:bg-dark-blue-800 
          transition ${isEnabled ? "" : "translate-x-6"}`}></div>
        </span>
      </label>
    </>
  );
}