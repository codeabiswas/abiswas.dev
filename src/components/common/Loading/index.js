import React from "react";
import MainLayout from "../../layout/MainLayout";
import LoadingEllipsis from "../../ui/LoadingEllipsis";

const Loading = () => {
  const children = (
    <>
      <LoadingEllipsis />
    </>
  );
  return <MainLayout children={children} />;
};

export default Loading;
