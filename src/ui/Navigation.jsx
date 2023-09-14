import { navigation } from "../assets/icons";
import useUser from "../context/useUser";
import LinkButton from "./LinkButton";
function Navigation() {
  const { logout } = useUser();

  return (
    <div className="order-2 sm:order-1 pt-14">
      <nav className="flex items-end w-full max-w-3xl px-5 m-auto mt-10 lg:gap-4 sm:gap-12 dark:bg-gray-900 sm:right-auto sm:bottom-auto sm:flex-col lg:items-start justify-evenly sm:justify-start">
        {navigation.map(({ text, icon }) => {
          if (text === "Logout") {
            return (
              <LinkButton
                key={text}
                to={""}
                onClick={() => {
                  logout();
                }}
              >
                {icon}
                <h6 className="hidden lg:block">{text}</h6>
              </LinkButton>
            );
          } else {
            return (
              <LinkButton key={text} to={text.toLowerCase()}>
                {icon}
                <h6 className="hidden lg:block">{text}</h6>
              </LinkButton>
            );
          }
        })}
      </nav>
    </div>
  );
}

export default Navigation;
