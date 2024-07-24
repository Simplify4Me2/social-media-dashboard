import "./ToggleSwitch.css";

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
        <span className={`box block h-[24px] w-[48px] rounded-full ${isEnabled ? `bg-gradient-to-r from-true-blue to-green` : `bg-gray`}`}>
        <div className={`relative left-[3px] top-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white dark:bg-dark-blue-800 
          transition ${isEnabled ? "" : "translate-x-6"}`}></div>
        </span>
      </label>
    </>
  );
}

function OldToggleSwitch({ isEnabled, onChange }: IToggleSwitchProps) {
  return (
    <label className="relative inline-block w-[48px] h-[24px] mt-1">
      <input
        checked={isEnabled}
        onChange={onChange}
        type="checkbox"
        className="opacity-0 h-0 w-0"
      ></input>
      <span className="absolute cursor-pointer gray rounded-3xl before:rounded-3xl top-0 left-0 right-0 bottom-0 transition slider "></span>
    </label>
  );
}