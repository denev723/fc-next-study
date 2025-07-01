import { gilroy } from "@/styles/fonts";
import { FC } from "react";

const LocalMain: FC = () => {
  return (
    <main>
      <p style={{ fontSize: 50 }} className={gilroy.className}>
        Gilroy
      </p>
      <p>G / CLS TEST</p>
    </main>
  );
};

export default LocalMain;
