"use client";

import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faRefresh } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const ErrorFallback = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <Icon icon={faTriangleExclamation} className="w-20 h-20" />
      <p className="text-lg">Failed to fetch. Please try again later!</p>
      <Button type="button" onClick={() => router.refresh()}>
        <Icon icon={faRefresh} />
        Try Again
      </Button>
    </div>
  );
};

export default React.memo(ErrorFallback);
