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

export const isValid = (str:string, pattern: string): boolean => {
  if(!str || !pattern){
    return true;
  }
  let regexp: RegExp ;
  if(pattern === 'name'){
    regexp = new RegExp(/^[A-Za-zА-Яа-я]{2,}$/);
  }else if(pattern === 'email'){
    regexp = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  }else{
    return false;
  }
  const matched = str.match(regexp);
  return !!matched;
}