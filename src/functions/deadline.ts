import { toCalculateDeadline } from "./calcUtils";
import { LangTime, Mime, Lang } from "../types/utilsTypes";

export const getCalculatedTimeMs = (
  language: Lang,
  signCount: number,
  docType: Mime,
): number => {
  const startTimeMs = 30 * 60 * 1000;
  const minTimeMs = 60 * 60 * 1000;
  const timeForTextMs = Math.ceil(
    (signCount / LangTime[language]) * 60 * 60 * 1000,
  );
  let mainTimeMs =
    startTimeMs + timeForTextMs < minTimeMs
      ? minTimeMs
      : startTimeMs + timeForTextMs;
  if (docType === "other") {
    mainTimeMs += mainTimeMs * 0.2;
  }
  return mainTimeMs;
};

export const getDeadline = (
  language: Lang,
  signCount: number,
  docType: Mime,
  orderDate: Date,
): Date => {
  const timeForWork = getCalculatedTimeMs(language, signCount, docType);
  const deadline = toCalculateDeadline(timeForWork, orderDate);
  return deadline;
};

//ts bugfix
export {};