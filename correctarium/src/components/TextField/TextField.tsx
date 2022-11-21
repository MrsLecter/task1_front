import { TextFieldProps } from "./TextFieldTypes";
import { useState, useRef } from "react";
import "./TextField.scss";
import classNames from "classnames";

export const TextField = ({ text, setText }: TextFieldProps) => {
  const [file, setFile] = useState<File | null>();
  const [visible, toggleVisible] = useState(true);
  const filePicker = useRef<HTMLInputElement | null>(null);

  let label = "Введіть текст або";
  let blocked = false;
  console.log(file);
  if (file) {
    setText(file.name.split(".")[1]);
    label = `Файл ${file.name} завантажено!`;
    blocked = true;
  }

  const handleInput = (inputText: string) => {
    toggleVisible(false);
    setText(inputText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const handleButtonClick = () => {
    filePicker.current?.click();
  };

  return (
    <div className={classNames("textField", blocked ? "blocked" : "")}>
      <textarea
        onChange={(e) => handleInput(e.target.value)}
        placeholder={label}
        required
      ></textarea>
      <button
        onClick={handleButtonClick}
        className={classNames("textField___button", visible ? "visible" : "")}
      >
        завантажте файл
      </button>
      <input
        type="file"
        ref={filePicker}
        onChange={handleChange}
        className="textField__input hidden"
        placeholder="download"
        accept=".doc, .docx, .rtf"
      />
    </div>
  );
};
