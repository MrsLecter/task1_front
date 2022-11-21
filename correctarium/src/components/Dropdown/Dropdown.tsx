import React, { useState } from "react";
import classNames from "classnames";

import { DropdownProps } from "./DropdownTypes";
import "./Dropdown.scss";

import downSvg from "../../assets/down.svg";
import upSvg from "../../assets/up.svg";

export const Dropdown = ({
  label,
  choiceHandler,
  selected,
  options,
  isAvailable,
}: DropdownProps) => {
  const [active, toggleActive] = useState(false);
  const selectHandler = (value: string | undefined) => {
    if (isAvailable) {
      choiceHandler(value);
      toggleActive(!active);
    }
  };

  return (
    <div className="dropdown">
      <div
        onClick={() => isAvailable && toggleActive(!active)}
        className={classNames(
          "dropdown__button",
          active && isAvailable ? "active" : ""
        )}
      >
        {selected === "" ? label : selected}
        {active ? (
          <img src={upSvg} alt="up.svg" />
        ) : (
          <img src={downSvg} alt="down.svg" />
        )}
      </div>
      {selected ? <div className="dropdown__label">{label}</div> : <div></div>}
      {active && (
        <ul className="dropdown__content">
          {options.map((item) => (
            <li
              key={item.id}
              onClick={(e) => selectHandler(e.currentTarget.dataset.value)}
              data-value={item.value}
              className="dropdown__item"
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
