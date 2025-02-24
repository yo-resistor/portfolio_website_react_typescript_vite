import { lazy, Suspense } from "react";

const BlogPost = lazy(() => import("../posts/first-post.mdx"));

const Blog = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPost />
      </Suspense>
    </div>
  );
};

export default Blog;
