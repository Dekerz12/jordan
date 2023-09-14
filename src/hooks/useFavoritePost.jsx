import { favoritePost, unfavoritePost } from "../utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFavoritePost() {
  const queryClient = useQueryClient();
  const { mutate: favoriteMutation } = useMutation(
    (data) => {
      data.favorited ? unfavoritePost(data) : favoritePost(data);
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return favoriteMutation;
}
