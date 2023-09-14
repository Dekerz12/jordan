import { toast } from "react-hot-toast";
import { signUp } from "../utils";
import { useMutation } from "@tanstack/react-query";
import useModal from "../context/useModal";
export function useSignUp() {
  const { loginModal } = useModal();
  const { mutate: signUpMutation } = useMutation(
    (user) => {
      return signUp(user);
    },
    {
      onSuccess: () => {
        loginModal();
      },
    }
  );

  return { signUpMutation };
}
