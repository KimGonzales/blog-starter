import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { Pagination } from "@/app/_components/pagination";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import { paginatePosts } from "@/lib/pagination";

type Params = {
  params: Promise<{
    page: string;
  }>;
};

// The hero post is featured on "/", so it is excluded from the paginated list.
function listedPosts() {
  return getAllPosts().slice(1);
}

function parsePage(value: string): number | null {
  // Page 1 is served by "/" — only 2 and up are valid here.
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const page = Number(value);

  return page >= 2 ? page : null;
}

export default async function PaginatedPage(props: Params) {
  const { page: rawPage } = await props.params;
  const page = parsePage(rawPage);

  if (page === null) {
    return notFound();
  }

  const { posts, totalPages } = paginatePosts(listedPosts(), page);

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Intro />
        <MoreStories posts={posts} />
        <Pagination currentPage={page} totalPages={totalPages} />
      </Container>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { page } = await props.params;

  return {
    title: `Page ${page} | Next.js Blog Example with ${CMS_NAME}`,
  };
}

export async function generateStaticParams() {
  const { totalPages } = paginatePosts(listedPosts(), 1);

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}
