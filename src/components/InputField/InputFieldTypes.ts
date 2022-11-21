export type InputFieldProps = {
  staticLabel: string;
  label: string;
  type: "text" | "email";
  changeHandler: Function;
  isCorrect: boolean
};
