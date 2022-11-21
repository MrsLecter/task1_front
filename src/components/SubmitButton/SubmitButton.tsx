import { SubmitButtonProp } from "./SubmitButtonTypes";
import "./SubmitButton.scss";

export const SubmitButton = ({
  label,
  buttonHandler,
  isNotActive,
}: SubmitButtonProp) => {
  return (
    <button
      onClick={() => buttonHandler()}
      className="submitButton"
      type="submit"
      disabled={isNotActive}
    >
      {label}
    </button>
  );
};
