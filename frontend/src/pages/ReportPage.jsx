
import Report from "../components/Report";
import Seo from "../components/Seo";

function ReportPage() {
  return (
    <>
      <Seo
        title="Tender Report"
        description="Review submitted tenders, edit records, delete entries, and export tender reports to Excel."
      />
      <Report />
    </>
  );
}

export default ReportPage;
