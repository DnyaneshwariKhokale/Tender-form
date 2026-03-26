
import TenderForm from "../components/TenderForm";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";

function TenderPage() {
  const { state } = useLocation();
  const isEditing = !!state?.item;

  return (
    <>
      <Seo
        title={isEditing ? "Edit Tender" : "Tender Form"}
        description="Fill out tender details, upload required documents, and submit tender information securely."
      />
      <TenderForm editData={state?.item} editIndex={state?.i} />
    </>
  );
}

export default TenderPage;
