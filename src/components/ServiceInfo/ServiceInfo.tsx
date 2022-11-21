import "./ServiceInfo.scss";
import { ServiceInfoProps } from "./ServiceInofTypes";

export const ServiceInfo = ({ info }: ServiceInfoProps) => {
  const { task, language, payment, data, time, userEmail } = info;
  return (
    <div className="serviceInfo">
      <div className="serviceInfo__results">
        <p>
          Завдання: {task} {language}
        </p>
        <p>
          Вартість: <span>{payment} грн</span>
        </p>
        <p>
          Термін здавання:{" "}
          <span>
            {data} о {time}
          </span>
        </p>
      </div>
      <div className="serviceInfo__output">
        <p>Оплатіть замовлення, і ми негайно візьмемося до роботи. </p>
        <p>Результат ви отримаєте на електронну пошту {userEmail}.</p>
      </div>
    </div>
  );
};
