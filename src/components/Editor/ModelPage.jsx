import { useEffect } from "react";
import useEditor from "../../context/useEditor";
import { useNavigate, Link } from "react-router-dom";
function ModelPage() {
  const navigate = useNavigate();
  const { active, status, currentModel, draftId } = useEditor();

  useEffect(() => {
    if (draftId !== 0) {
      navigate(`/editor/${currentModel}/${draftId}`, { replace: true });
    } else if (status === "active") {
      navigate(`/editor/${currentModel}`);
    }
  }, [currentModel, status, navigate]);
  if (status === "active") {
    return null;
  } else {
    return (
      <div className="mx-auto text-center dark:text-slate-50">
        <span className="font-bold text-3xl lg:text-7xl not-prose">
          Choose a Model
        </span>
        <div className="flex pt-40 justify-evenly not-prose">
          <Link
            to={"air-jordan-1"}
            className="flex flex-col items-center cursor-pointer"
            onClick={active}
          >
            <img
              src="https://izicop.com/cdn/shop/files/izicop_Air-Jordan-1-Mid-Split-Beach-Cherrywood-Red-Air-Jordan-1691857982398.png?v=1691857984"
              width={300}
              height={400}
            />
            <h3 className="text-xl font-semibold">Air Jordan 1</h3>
          </Link>
          <Link
            to={"air-jordan-4"}
            className="flex flex-col items-center cursor-pointer"
            onClick={active}
          >
            <img
              src="https://izicop.com/cdn/shop/products/image_846c6261-2edc-45ce-a7d1-165d6ed89a04.png?v=1628898366"
              width={300}
              height={400}
            />
            <h3 className="text-xl font-semibold">Air Jordan 4</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default ModelPage;
