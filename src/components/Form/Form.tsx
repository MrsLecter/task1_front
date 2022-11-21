import React, { useState } from "react";

import { Dropdown } from "../Dropdown/Dropdown";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { InputField } from "../InputField/InputField";
import { TextField } from "../../components/TextField/TextField";
import { PriceDisplay } from "../PriceDisplay/PriceDisplay";

import services from "../../assets/serviceOptions.json";
import languagesEdit from "../../assets/languageEditOptions.json";
import languagesTranslate from "../../assets/languageTranslateOptions.json";

import { getCost } from "../../functions/cost";

import { ListOptions } from "./FormTypes";
import "./Form.scss";
import { Lang, Mime } from "../../types/utilsTypes";
import { getLangSign, getWordAmount, getDocType } from "../../utils/utils";
import { getDeadline } from "../../functions/deadline";

export const Form = () => {
  let isNotCompleteOrder = true;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");
  const [service, setService] = useState("");
  const [language, setLanguage] = useState<Lang | "">("");

  let wordAmount = 0;
  let docType = getDocType(text);
  let resultCost = 0;
  let deadlineFormatted = "";

  if (language) {
    wordAmount = text.split(" ").length;
    resultCost = getCost(getLangSign(language), wordAmount, "other");
  }
  if (language && text.length <= 4) {
    wordAmount = getWordAmount(text);
    resultCost = getCost(getLangSign(language), wordAmount, text as Mime);
  }

  if (resultCost) {
    const deadlineCalculated = getDeadline(
      getLangSign(language),
      wordAmount,
      docType,
      new Date()
    );
    deadlineFormatted = deadlineCalculated.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
  }
  if (language && resultCost && name && email && service) {
    isNotCompleteOrder = false;
  }
  const completeOrder = () => {
    sessionStorage.setItem("task", service);
    sessionStorage.setItem("language", language);
    sessionStorage.setItem("price", String(resultCost));
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("deadline", deadlineFormatted);
    window.location.replace("/make-order"); //не работает redirect from "react-router-dom"
  };

  return (
    <div className="form">
      <form className="form__contentBlock">
        <Dropdown
          label={"Послуга"}
          choiceHandler={setService}
          selected={service}
          options={services}
          isAvailable={true}
        />
        <TextField text={text} setText={setText} />
        <div className="form__inputBlock">
          <InputField
            staticLabel={"Ваша електронна пошта"}
            changeHandler={setEmail}
            type={"email"}
            label={email}
          />
          <InputField
            staticLabel={"Комментар або покликання"}
            changeHandler={setComment}
            type={"text"}
            label={comment}
          />
          <InputField
            staticLabel={"Ваше ім'я"}
            changeHandler={setName}
            type={"text"}
            label={name}
          />
          {!service && (
            <Dropdown
              label={"Мова"}
              choiceHandler={setLanguage}
              selected={""}
              options={[] as ListOptions}
              isAvailable={false}
            />
          )}
          {service === services[0].value && (
            <Dropdown
              label={"Мова"}
              choiceHandler={setLanguage}
              selected={language}
              options={languagesEdit as ListOptions}
              isAvailable={true}
            />
          )}
          {service === services[1].value && (
            <Dropdown
              label={"Мова"}
              choiceHandler={setLanguage}
              selected={language}
              options={languagesTranslate as ListOptions}
              isAvailable={true}
            />
          )}
        </div>
      </form>

      <div className="form__outputBlock">
        <PriceDisplay price={resultCost} deadline={deadlineFormatted} />
        <SubmitButton
          buttonHandler={completeOrder}
          label={"Замовити"}
          isNotActive={isNotCompleteOrder}
        />
      </div>
    </div>
  );
};
