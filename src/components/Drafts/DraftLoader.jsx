function DraftLoader() {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-md shadow-lg  bg-gray-100 dark:bg-slate-800">
      <div className="animate-pulse w-48 rounded-md h-36 dark:bg-gray-500 bg-gray-200"></div>
      <div className="space-y-2 animate-pulse">
        <h6 className="dark:bg-gray-500 bg-gray-200 h-3 w-24"></h6>
        <p className="dark:bg-gray-500 bg-gray-200 h-2 w-16"></p>
      </div>
    </div>
  );
}

export default DraftLoader;
