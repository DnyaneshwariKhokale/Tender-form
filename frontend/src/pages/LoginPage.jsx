import Login from "../components/Login";
import Seo from "../components/Seo";

function LoginPage() {
  return (
    <>
      <Seo
        title="Login"
        description="Access the Tender Management Portal to submit tenders and manage reports securely."
      />
      <Login />
    </>
  );
}

export default LoginPage;
