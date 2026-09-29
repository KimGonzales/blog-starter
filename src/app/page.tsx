import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { Pagination } from "@/app/_components/pagination";
import { getAllPosts } from "@/lib/api";
import { paginatePosts } from "@/lib/pagination";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  
  const { posts, totalPages } = paginatePosts(allPosts.slice(1), 1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {posts.length > 0 && <MoreStories posts={posts} />}
        <Pagination currentPage={1} totalPages={totalPages} />

        
      </Container>
    </main>
  );
}
