import "./ToggleSwitch.css";

interface IToggleSwitchProps {
  isEnabled: boolean; 
  onChange: () => void;
}

export function ToggleSwitch({ isEnabled, onChange }: IToggleSwitchProps) {

  return (
    <label className="relative inline-block w-[48px] h-[24px] mt-1">
      <input checked={isEnabled} onChange={onChange} type="checkbox" className="opacity-0 h-0 w-0"></input>
      <span className="absolute cursor-pointer gray rounded-3xl before:rounded-3xl top-0 left-0 right-0 bottom-0 transition slider"></span>
    </label>
  );
}
