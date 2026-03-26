import Register from "../components/Register";
import Seo from "../components/Seo";

function RegisterPage() {
  return (
    <>
      <Seo
        title="Registration"
        description="Create an account in the Tender Management Portal to submit and manage tender information."
      />
      <Register />
    </>
  );
}

export default RegisterPage;
