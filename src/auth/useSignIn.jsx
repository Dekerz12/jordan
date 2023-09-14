import { signIn } from "../utils";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import useModal from "../context/useModal";
import { saveUser } from "../utils";
import useUser from "../context/useUser";
export function useSignIn() {
  const navigate = useNavigate();
  const { login, setFullName } = useUser();
  const closeModal = useModal((state) => state.closeModal);

  const { mutate: signInMutation, isLoading } = useMutation(
    (data) => signIn(data),
    {
      onSuccess: async (data) => {
        login();
        saveUser(data);
        setFullName();
        navigate("/newsfeed");
        closeModal();
      },
    }
  );

  return { signInMutation, isLoading };
}
