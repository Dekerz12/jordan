import { BsFillShareFill, BsFillHeartFill } from "react-icons/bs";
import { useFavoritePost } from "../../hooks/useFavoritePost";
import { getUser } from "../../utils";
function PostCard({ post }) {
  const favoriteMutation = useFavoritePost();

  return (
    <div className="mx-auto ">
      <div className="flex flex-col max-w-xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-100">
        <div className="flex space-x-4 not-prose">
          <img
            alt=""
            src={post?.avatar}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            {post?.name}
            <span className="text-xs dark:text-gray-400">4 hours ago</span>
          </div>
        </div>
        <div>
          <img
            src={post?.imageURL}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{post?.title}</h2>
          <p className="text-sm dark:text-gray-400">{post?.description}</p>
        </div>
        <div className="flex flex-wrap justify-end space-x-4">
          <BsFillShareFill />

          <BsFillHeartFill
            className={`${
              post.likedBy.includes(getUser().user.id) ? "fill-red-500" : ""
            } cursor-pointer`}
            onClick={() => {
              const data = {
                arr: post.likedBy,
                id: post.id,
                userId: getUser().user.id,
                favorited: post.likedBy.includes(getUser().user.id),
              };
              favoriteMutation(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
