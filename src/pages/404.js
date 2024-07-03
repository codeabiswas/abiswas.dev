import * as React from "react";
import MainLayout from "../components/layout/MainLayout";

const NotFoundPage = () => {
  const children = (
    <>
      <h1>This page does not exist...yet? 🤔</h1>
      <p>
        Until then, check out my <a href="https://www.abiswas.dev">site</a>!
      </p>
    </>
  );

  return <MainLayout children={children} />;
};

export default NotFoundPage;
