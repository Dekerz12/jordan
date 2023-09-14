import { useDrafts } from "../../hooks/useDrafts";
import DraftCard from "./DraftCard";
import DraftLoader from "./DraftLoader";

function DraftList() {
  const { data, isLoading, isError, deleteDraft } = useDrafts();

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-8 not-prose">
        <DraftLoader />
        <DraftLoader />
        <DraftLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center">
        Can't fetch drafts at the moment please try again later
      </h1>
    );
  }

  if (data.length === 0) {
    return <h1 className="text-center">No Drafts yet</h1>;
  }

  return (
    <div className="flex flex-wrap gap-8 px-12 not-prose ">
      {data?.map((draft) => (
        <DraftCard key={draft.id} draft={draft} deleteDraft={deleteDraft} />
      ))}
    </div>
  );
}

export default DraftList;
