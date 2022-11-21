import React from "react";

import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";

import "./Home.scss";
export function Home() {
  return (
    <div className="page">
      <div className="wrapperHome">
        <Header label="Замовити переклад або редагування" />
        <Form/>
        <Footer />
      </div>
    </div>
  );
}
