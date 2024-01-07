import React from "react";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/types";

interface PrimaryPostCardProps {
  post: Post;
  variant: "primary";
}
interface SecondaryPostCardProps {
  post: Pick<Post, "_id" | "title" | "thumbnail">;
  variant: "secondary";
}
interface TertiaryPostCardProps {
  post: Pick<Post, "_id" | "title" | "thumbnail" | "description">;
  variant: "tertiary";
}

type PostCardProps = {
  className?: string;
} & (PrimaryPostCardProps | SecondaryPostCardProps | TertiaryPostCardProps);

const PostCard = ({
  variant = "primary",
  className = "",
  post,
}: PostCardProps) => {
  if (variant === "secondary")
    return (
      <>
        <li className={`flex gap-3 cursor-pointer ${className}`}>
          <Image
            unoptimized
            src={post.thumbnail}
            className="rounded w-16 h-16"
            alt=""
            width="72"
            height="72"
          />
          <h4 className="text-xs font-medium text-quarternary hover:underline">
            {post.title}
          </h4>
        </li>
      </>
    );
  if (variant === "tertiary") {
    const tertiaryPost = post as TertiaryPostCardProps["post"];
    return (
      <>
        <li
          className={`flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all duration-50 ${className}`}
        >
          <Image
            unoptimized
            src={tertiaryPost.thumbnail}
            className="rounded w-full h-36"
            alt=""
            width="136"
            height="136"
          />
          <h4 className="font-medium text-quarternary">{tertiaryPost.title}</h4>
          <p className="text-sm">{tertiaryPost.description}</p>
        </li>
      </>
    );
  }
  const primaryPost = post as PrimaryPostCardProps["post"];
  return (
    <>
      <li className={`grid grid-cols-3 gap-5 cursor-pointer ${className}`}>
        <div className="col-span-3 sm:col-span-1 rounded h-36 overflow-hidden">
          <Image
            unoptimized
            src={primaryPost.thumbnail}
            className="w-full h-full hover:scale-105 transition-all duration-500"
            alt=""
            width="728"
            height="380"
          />
        </div>
        <div className="col-span-3 sm:col-span-2 flex flex-col gap-2.5">
          <h4 className="text-lg font-bold text-quarternary hover:underline">
            {primaryPost.title}
          </h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-xs font-medium">
            <span className="inline-flex sm:justify-center items-center gap-1">
              <Icon icon={faCalendar} className="w-3 h-3" />{" "}
              {primaryPost.publishedOn}
            </span>
            <span>{primaryPost.tag}</span>
          </div>
          <p className="text-sm line-clamp-2 overflow-hidden break-words">
            {primaryPost.description}
          </p>
        </div>
      </li>
    </>
  );
};

export default React.memo(PostCard);
