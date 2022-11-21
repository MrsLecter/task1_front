import { InputFieldProps } from "./InputFieldTypes";
import "./InputField.scss";

export const InputField = ({
  staticLabel,
  label,
  type,
  changeHandler,
  isCorrect,
}: InputFieldProps) => {
  return (
    <div className="inputField">
      <label>
        <input
          className={isCorrect ? "good" : "failed"}
          onChange={(e) => changeHandler(e.target.value)}
          placeholder={staticLabel}
          type={type}
          id="fname"
          name="fname"
          value={label}
          required
        />
        <div className={label === "" ? "" : "active"}>{staticLabel}</div>
      </label>
    </div>
  );
};
