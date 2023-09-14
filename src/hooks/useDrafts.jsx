import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDrafts,
  createDraft,
  deleteDraftById,
  getAllDrafts,
  updateDraft,
} from "../utils";
import useUser from "../context/useUser";

export function useDrafts() {
  const queryClient = useQueryClient();
  const { logout } = useUser();

  const { data, isLoading, isError } = useQuery(["drafts"], getDrafts, {
    onError: (err) => {
      if (err.response.status === 401) {
        logout();
      }
    },
  });

  const { data: allDraftData } = useQuery(["allDrafts"], getAllDrafts, {
    onError: () => {},
  });

  const { mutate: draftMutation } = useMutation(
    (data) => {
      return createDraft(data);
    },
    {
      onSuccess: (data) => {
        return queryClient.invalidateQueries({ queryKey: ["drafts"] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: deleteDraft } = useMutation(
    (data) => {
      deleteDraftById(data);
    },
    {
      onSuccess: (data) => {
        return queryClient.invalidateQueries({ queryKey: ["drafts"] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: updateCurrentDraft } = useMutation(
    (EditorData) => {
      updateDraft(EditorData);
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries({ queryKey: ["drafts"] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    data,
    isLoading,
    isError,
    draftMutation,
    deleteDraft,
    allDraftData,
    updateCurrentDraft,
  };
}
