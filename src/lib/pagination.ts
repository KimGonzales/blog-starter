import { Post } from "@/interfaces/post";
import { POSTS_PER_PAGE } from "@/lib/constants";

type Paginated = {
  posts: Post[];
  totalPages: number;
};

/**
 * Slice a list of posts down to a single page. Shared by the home page and the
 * /page/[page] route so both agree on how many pages exist.
 */
export function paginatePosts(posts: Post[], page: number): Paginated {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;

  return {
    posts: posts.slice(start, start + POSTS_PER_PAGE),
    totalPages,
  };
}
