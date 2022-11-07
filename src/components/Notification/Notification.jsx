import React from "react";

export const Notification = ({ message }) => {
  return message && <p>{message}</p>;
};
