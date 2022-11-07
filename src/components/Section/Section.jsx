import React from "react";

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <p>{title}</p>}
      {children}
    </>
  );
};
