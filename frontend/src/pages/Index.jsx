import { useNavigate } from "react-router-dom";
import virtulab from "../assets/Virtulab.svg";

function Index() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); // ✅ redirect to login
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E5E5E5]">
      <header className="bg-[#4FA9E2] text-white p-5 flex">
        <div className="flex items-center">
          <img src={virtulab} alt="Virtulab" className="w-10 inline-block" />
          <h1 className="text-2xl font-bold">VirtuLab</h1>
        </div>

        <div className="ml-auto flex items-center">
          <button
            onClick={goToLogin}
            className="mr-4 flex flex-col items-center"
          >
            <h1 className="font-bold">Sign In</h1>
          </button>

          <button type="button" className="mr-4 flex flex-col items-center">
            <h1 className="font-bold">Sign Up</h1>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-xl">Welcome to VirtuLab!</h2>
      </main>
    </div>
  );
}

export default Index;
