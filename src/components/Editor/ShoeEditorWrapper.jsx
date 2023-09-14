import ShoeEditor from "./ShoeEditor";
import { useLocation } from "react-router";

function ShoeEditorWrapper() {
  const location = useLocation();
  return <ShoeEditor key={location.key} />;
}

export default ShoeEditorWrapper;
