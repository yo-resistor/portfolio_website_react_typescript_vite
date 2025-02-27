import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

// Import all blog posts statically
const posts = {
  "first-post": lazy(() => import("../posts/first-post.mdx")),
  text: lazy(() => import("../posts/text.mdx")),
};

// Fallback 404 component if post not found
const NotFound = () => <p>Post not found.</p>;

const BlogPost = () => {
  const { slug } = useParams();
  const PostComponent = posts[slug as keyof typeof posts] || NotFound;

  return (
    <div className="p-6">
      <Suspense fallback={<p>Loading...</p>}>
        <PostComponent />
      </Suspense>
    </div>
  );
};

export default BlogPost;
