import "./PriceDisplay.scss";
import { PriceDisplayProps } from "./PriceDisplayTypes";

export const PriceDisplay = ({ price, deadline }: PriceDisplayProps) => {
  let deadlineFormatted = "";
  if (deadline) {
    let data = deadline.split(",")[0].replaceAll("/", ".");
    const time = deadline.split(",")[1].substring(0, 6);
    deadlineFormatted = `${data.replace(
      data.substring(6, 10),
      data.substring(8, 10)
    )} o ${time}`;
  }

  return (
    <div className="priceDisplay">
      <p>
        {price ? price : 0}
        <span>грн</span>
      </p>
      {deadlineFormatted ? (
        <p className="deadline">Термін здавання: {deadlineFormatted}</p>
      ) : null}
    </div>
  );
};
