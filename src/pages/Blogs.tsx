import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../components/Hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          {blogs.map(blog => 
            <BlogCard
              authorname={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"5 feb 2025"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
