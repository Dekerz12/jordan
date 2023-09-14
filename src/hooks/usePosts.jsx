import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, createPost } from "../utils";
import useUser from "../context/useUser";
import useModal from "../context/useModal";
import { toast } from "react-hot-toast";
function usePosts() {
  const { logout } = useUser();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery(["posts"], getPosts, {
    onError: (err) => {
      if (err?.response?.status === 401) {
        logout();
      }
    },
  });

  const { mutate: createPostMutation } = useMutation(
    (data) => {
      return createPost(data);
    },
    {
      onSuccess: () => {
        toast.success("Posted Successfully");
        closeModal();
        return queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (error) => {
        if (err.response.status === 401) {
          logout();
        }
      },
    }
  );
  return { data, isLoading, isError, createPostMutation };
}

export default usePosts;
