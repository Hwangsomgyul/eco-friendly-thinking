import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Banner = ({ url, num, handleLink }) => {
  if (handleLink) {
    return (
      <Link
        to="/Store/event/1"
        className="w-[460px] h-200 rounded-lg drop-shadow"
      >
        <img src={url} alt={"이벤트 배너"} />
      </Link>
    );
  }
  return (
    <Link className="w-[460px] h-200 rounded-lg drop-shadow">
      <img src={url} alt={"이벤트 배너"} />
    </Link>
  );
};
