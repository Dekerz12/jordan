import usePosts from "../../hooks/usePosts";
import PostCard from "./PostCard";
import PostLoader from "./PostLoader";
function Posts() {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 px-5 py-12 sm:px-0 ">
        <PostLoader />
        <PostLoader />
        <PostLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center">
        Can't fetch post at the moment please try again later
      </h1>
    );
  }

  if (data.length === 0) {
    return <h1 className="text-center">No Drafts yet</h1>;
  }

  return (
    <div className="flex flex-col gap-10 px-5 py-12 sm:px-0 ">
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
