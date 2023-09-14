import { useNavigate } from "react-router";
import useEditor from "../../context/useEditor";
function DraftCard({ draft, deleteDraft }) {
  const { setShoeParts, active, setTitle, draftId, reset, setDraft } =
    useEditor();
  const navigate = useNavigate();
  function setEditorData() {
    setTitle(draft.title);
    setDraft(draft?.id);
    setShoeParts(draft?.parts);
    active();
    navigate(`/editor/${draft.model}/${draft.id}`);
  }

  return (
    <div
      className="group/draft relative flex flex-col gap-3 p-6 rounded-md shadow-lg cursor-pointer bg-stone-200 dark:bg-slate-800"
      onClick={setEditorData}
    >
      <img
        src={draft.imgUrl}
        alt=""
        className="object-cover w-48 rounded-md h-36"
      />
      <div className="space-y-2">
        {" "}
        <h6 className="font-semibold max-w-[20ch]">{draft.title}</h6>
        <p className="text-xs">{draft.model}</p>
      </div>
      <button
        type="button"
        className="absolute invisible group-hover/draft:visible -right-4 -top-4 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100  hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={(e) => {
          if (draftId == draft.id) {
            reset();
          }
          e.stopPropagation();
          deleteDraft(draft.id);
        }}
      >
        <span className="sr-only">Close menu</span>

        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default DraftCard;
