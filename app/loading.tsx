"use client";

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <Icon icon={faSpinner} className="w-48 h-48 animate-spin-slow" />
        <p className="text-3xl">Loading...</p>
      </div>
    </>
  );
};

export default React.memo(Loading);
