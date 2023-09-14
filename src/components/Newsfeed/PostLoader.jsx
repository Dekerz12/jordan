import { BsFillShareFill, BsFillHeartFill } from "react-icons/bs";
function PostLoader() {
  return (
    <div className="">
      <div className="mx-auto flex flex-col max-w-xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-100">
        <div className="flex space-x-4 not-prose">
          <div className=" w-12 h-12 rounded-full shadow bg-gray-200 dark:bg-gray-500 animate-pulse">
            {" "}
          </div>
          <div className="flex flex-col space-y-1 animate-pulse">
            <h1 className="dark:bg-gray-500 bg-gray-200 w-32 h-4"></h1>
            <span className=" dark:bg-gray-500 bg-gray-200 w-16 h-4"></span>
          </div>
        </div>
        <div>
          <div className="animate-pulse w-full mb-4 h-60 sm:h-96 bg-gray-200 dark:bg-gray-500"></div>
          <p className="animate-pulse mb-1 h-6 w-96 dark:bg-gray-500 bg-gray-200"></p>
          <p className="animate-pulse  h-3 w-11/12 dark:bg-gray-500 bg-gray-200"></p>
          <p className="animate-pulse  h-3 w-11/12 dark:bg-gray-500 bg-gray-200"></p>
          <p className="animate-pulse  h-3 w-9/12 dark:bg-gray-500 bg-gray-200"></p>
        </div>
        <div className="flex flex-wrap justify-end space-x-4">
          <BsFillShareFill />
          <BsFillHeartFill />
        </div>
      </div>
    </div>
  );
}

export default PostLoader;
