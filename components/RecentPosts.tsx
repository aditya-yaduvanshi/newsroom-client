"use client";
import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts = [] }: RecentPostsProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));

  const handlePageChange = (inc: number) => {
    const query = new URLSearchParams(Array.from(searchParams.entries()));
    setPage((prev) => {
      const value = prev + inc;
      query.set("page", value.toString());
      return value;
    });
    router.push(`${pathname}?${query.toString()}`);
  };

  return (
    <section className="col-span-4 lg:col-span-3 p-5">
      <ul className="flex flex-col gap-2.5">
        {posts.slice(10 * (page - 1), page * 10)?.map((post) => (
          <PostCard key={post._id} post={post} variant="primary" className="rounded-lg border-b-4 py-5 sm:py-0 sm:border-none" />
        ))}
      </ul>
      <div className="flex items-center justify-between py-5">
        <Button
          type="button"
          disabled={page === 1}
          onClick={() => handlePageChange(-1)}
        >
          <Icon icon={faChevronLeft} className="w-4 h-4" /> Prev Page
        </Button>
        <Button
          type="button"
          disabled={page === 3}
          onClick={() => handlePageChange(1)}
        >
          Next Page <Icon icon={faChevronRight} className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default React.memo(RecentPosts);
