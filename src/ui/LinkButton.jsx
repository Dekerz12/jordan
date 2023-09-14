import { Link } from "react-router-dom";

function LinkButton({ children, to, onClick }) {
  return (
    <Link
      to={`/${to}`}
      className="flex items-center max-sm:justify-center w-full px-4 py-2 space-x-4 rounded cursor-pointer lg:pr-16 hover:bg-red-100 dark:hover:bg-red-400"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
