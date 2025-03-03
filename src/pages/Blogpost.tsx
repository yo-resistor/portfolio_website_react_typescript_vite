import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

// Import all MDX blog posts, including those in subfolders
const posts = {
  "first-post": lazy(() => import("../posts/first-post.mdx")),
  "install-pytorch-miniconda": lazy(
    () => import("../posts/pytorch/install-pytorch-miniconda.mdx")
  ),
};

// Fallback 404 component if post not found
const NotFound = () => <p>Post not found.</p>;

const BlogPost = () => {
  const { slug } = useParams();
  const PostComponent = posts[slug as keyof typeof posts] || NotFound;

  return (
    <div className="p-20">
      <Suspense fallback={<p>Loading...</p>}>
        <PostComponent />
      </Suspense>
    </div>
  );
};

export default BlogPost;

// TODO: Modify the layout based on https://steventey.com/blog and https://avandekleut.github.io/vae/. Please do not forget about the search bar function as well.
