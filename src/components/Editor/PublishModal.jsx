import { getUser } from "../../utils";
import useUser from "../../context/useUser";
import { useForm } from "react-hook-form";
import usePosts from "../../hooks/usePosts";
function PublishModal() {
  const { fullname } = useUser();
  const { handleSubmit, register } = useForm();
  const { onChange, onBlur, name, ref } = register("description");
  const { createPostMutation } = usePosts();

  const onSubmit = (data) => {
    const post = {
      ...data,
      name:
        fullname || `${getUser().user.first_name} ${getUser().user.last_name}`,
      avatar: getUser()?.user.avatar,
      imageURL:
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
      userId: getUser()?.user.id,
      likedBy: [],
    };
    createPostMutation(post);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 not-prose">
        <img
          alt=""
          src={getUser()?.user.avatar}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1 dark:text-slate-100">
          {fullname ||
            `${getUser().user.first_name} ${getUser().user.last_name}`}
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Title"
            autoComplete="off"
            {...register("title")}
            className="w-full px-3 py-2 border bg-gray-50 rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>

        <div>
          <textarea
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            ref={ref}
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold text-white bg-blue-500 rounded-md"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PublishModal;
