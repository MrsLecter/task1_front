import React from "react";

import "./Order.scss";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ServiceInfo } from "../../components/ServiceInfo/ServiceInfo";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";

export const Order = () => {

  const orderTask = sessionStorage.getItem('task');
  const orderLanguage = sessionStorage.getItem('language');
  const orderPrice = sessionStorage.getItem('price');
  const orderDeadline = sessionStorage.getItem('deadline');
  const orderEmail = sessionStorage.getItem('email');

  const dataDeadline = orderDeadline ? orderDeadline.split(',')[0].replaceAll('/', '.'): "";
  const timeDeadline = orderDeadline ? orderDeadline.split(',')[1].substring(0,6) : "";

  const goToLiqpay = () => {
    console.log("liqpay");
  };
  return (
    <div className="wrapper">
      <div className="order">
        <Header label={"Ваше замовлення"} />
        <ServiceInfo
          info={{
            task: orderTask,
            language: orderLanguage,
            payment: orderPrice,
            data: dataDeadline,
            time: timeDeadline,
            userEmail: orderEmail,
          }}
        />
        <SubmitButton
          buttonHandler={goToLiqpay}
          label={"Оплатити за допомогою LiqPay"}
          isNotActive={true}
        />
        <Footer />
      </div>
    </div>
  );
};
