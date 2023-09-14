import { getUser, removeUser } from "../utils";
import { create } from "zustand";
import useEditor from "./useEditor";
const useUser = create((set) => {
  return {
    isAuthenticated: !!getUser(),
    login: () => set(() => ({ isAuthenticated: true })),
    logout: () =>
      set(() => {
        removeUser();
        useEditor.reset();
        return { isAuthenticated: false, fullname: "" };
      }),
    fullname: "",
    setFullName: () =>
      set(() => {
        return {
          fullname: `${getUser().user.first_name} ${getUser().user.last_name}`,
        };
      }),
  };
});

export default useUser;
