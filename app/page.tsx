import React from "react";
import { RECENT_POSTS_URL } from "@/consts/apis";
import { POPULAR_POSTS, RESOURCES_POSTS, TRENDING_POSTS } from "@/consts/posts";
import PostCard from "@/components/PostCard";
import RecentPosts from "@/components/RecentPosts";
import { Post } from "@/types";

const getRecentPosts = async () => {
  try {
    const res = await fetch(RECENT_POSTS_URL, {
      next: { revalidate: 3600 * 24 },
    });

    if (!res.ok) throw new Error("Failed to fetch recent posts.");

    const posts = (await res.json()) as unknown as Post[];

    if (!posts || !posts.length)
      throw new Error("Failed to fetch recent posts.");

    return { posts };
  } catch (err) {
    return { error: (err as Error).message };
  }
};

const Home = async () => {
  const { posts: recentPosts } = await getRecentPosts();

  return (
    <div className="max-w-[1110px] mx-auto grid grid-cols-4 gap-2.5">
      <RecentPosts posts={recentPosts || []} />
      <aside className="col-span-1 flex flex-col py-5 gap-10">
        <input
          type="image"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3FoQihqw4ZMFjkpxjiO3A32TedWTfx5vLRYbQavUTE-jxdqzoMu23cnnikVuDvoKfUSXnmv5jL_fFqDYTcxwDdnScL4zeNZT1tbMRGYSiBJDYJgmLYwO17Em74D-k-gExJy7Xppj1qjM37wfOfEfmLlWopqVzcrvMJNrrFzzK2yhwAhEEU_sjiIUwOrAl/s300-rw-e30/wiz.png"
          className="rounded hover:scale-105 transition-all duration-500"
        />
        <input
          type="image"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTcqwrYu5q5Ekzs7um_zHqhHpPbSMwf7CADT8gZCHTMJfaetiSbziYJrrPFWb2pGCMPbf8OxvMnLASTbL_vHSY4TmWo5DmMt1-eAR4eunVgfVp5SB7M2Dwq-P-W5q5B-QgZF4ku2n90IXx1onAsl3qS4-_hy5lfOF3X87PgQCTVelBxIcEoExk0dp6z0YF/s300-rw-e100/LAYER.jpg"
          className="rounded hover:scale-105 transition-all duration-500"
        />
        <div className="flex flex-col gap-5">
          <h3 className="relative py-2 tracking-wide text-lg text-quarternary font-semibold before:absolute before:w-5 before:h-[5px] before:bottom-0 after:w-24 after:h-[1px] after:left-0 after:bottom-0.5 after:absolute before:bg-quarternary after:bg-quarternary">
            Trending News
          </h3>
          <ul className="flex flex-col gap-2.5">
            {TRENDING_POSTS.map((post) => (
              <PostCard key={post._id} variant="secondary" post={post} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="relative py-2 tracking-wide text-lg text-quarternary font-semibold before:absolute before:w-5 before:h-[5px] before:bottom-0 after:w-24 after:h-[1px] after:left-0 after:bottom-0.5 after:absolute before:bg-quarternary after:bg-quarternary">
            Popular Resources
          </h3>
          <ul className="flex flex-col gap-2.5">
            {POPULAR_POSTS.map((post) => (
              <PostCard key={post._id} variant="secondary" post={post} />
            ))}
          </ul>
        </div>
      </aside>
      <section className="col-span-4 flex flex-col gap-5">
        <h3 className="relative py-2 tracking-wide text-lg text-quarternary font-semibold before:absolute before:w-5 before:h-[5px] before:bottom-0 after:w-24 after:h-[1px] after:left-0 after:bottom-0.5 after:absolute before:bg-quarternary after:bg-quarternary">
          Cybersecurity Resources
        </h3>
        <ul className="grid grid-cols-4 gap-5">
          {RESOURCES_POSTS.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              variant="tertiary"
              className="col-span-1"
            />
          ))}
        </ul>
      </section>
      <section className="col-span-4 border">subscribe</section>
    </div>
  );
};

export default React.memo(Home);
