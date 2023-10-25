import React from "react";
import { ResponsiveMasonry } from "react-responsive-masonry";

const StyledResponsiveMasonry = ({ children }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 768: 2, 1200: 3 }}>
      {children}
    </ResponsiveMasonry>
  );
};

export default StyledResponsiveMasonry;
