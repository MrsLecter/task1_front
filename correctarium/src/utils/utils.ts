import { Lang, Mime } from "../types/utilsTypes";

export const getLangSign = (lang: string): Lang => {
  if (lang === "Українська") {
    return "ua";
  }
  if (lang === "Російська") {
    return "ru";
  }
  if (lang === "Англійська") {
    return "en";
  }
  if (lang === "Англійська(носій)") {
    return "en";
  }
  throw new Error('Language not supported')
};

export const getWordAmount = (fileType: string): number => {
  if (fileType === "doc") {
    return 10000;
  }
  if (fileType === "docx") {
    return 50000;
  }
  if (fileType === "rtf") {
    return 100000;
  }
  if (fileType === "other" || !fileType) {
    return 150000;
  }

  
  throw new Error('Format not supported')
};

export const getDocType = (text: string): Mime =>{
  if(text === 'doc'){
    return 'doc';
  }
  if(text ==='docx'){
    return 'docx';
  }
  if(text === 'rtf'){
    return 'rtf';
  }
  return 'other';
}