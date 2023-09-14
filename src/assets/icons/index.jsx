import { AiOutlineHome } from "react-icons/ai";
import { BsStickies } from "react-icons/bs";
import { PiSneakerMoveBold } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";

export const navigation = [
  {
    text: "Newsfeed",
    icon: <AiOutlineHome className="text-2xl lg:text-2xl sm:text-4xl" />,
  },
  {
    text: "Drafts",
    icon: <BsStickies className="text-2xl lg:text-2xl sm:text-4xl" />,
  },
  {
    text: "Editor",
    icon: <PiSneakerMoveBold className="text-2xl lg:text-2xl sm:text-4xl" />,
  },
  {
    text: "Logout",
    icon: <RiLogoutBoxLine className="text-2xl lg:text-2xl sm:text-4xl" />,
  },
];
