import toast, { Toaster } from "react-hot-toast";
import "./index.css"; // CSS

function App() {
  // Show Simple Toast
  const showSimpleToast = () => {
    toast("You got it! ⚡", {
      icon: "👏",
      style: {
        borderRadius: "12px",
        background: "#1e1e2f",
        color: "#fff",
        padding: "12px 20px",
        fontWeight: "600",
      },
      duration: 2500,
    });
  };

  // Show Custom Toast
  const showCustomToast = () =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full bg-gray-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://res.cloudinary.com/dilyusaqn/image/upload/v1761605457/ChatGPT_Image_Oct_21_2025_01_49_49_AM_pbihl9.png"
                alt="avatar"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">AliHCoder</p>
              <p className="mt-1 text-sm text-gray-300">
                Your code just compiled perfectly 💯
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-700">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-all duration-200 hover:scale-105 focus:outline-none"
          >
            Close ✖️
          </button>
        </div>
      </div>
    ));

  return (
    <>
      <Toaster />
      <div className="flex flex-1 flex-col h-screen gap-4 justify-center items-center bg-gray-800">
        <button
          onClick={showSimpleToast}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          Show Simple Toast
        </button>
        <button
          onClick={showCustomToast}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          Show Custom Toast
        </button>
      </div>
    </>
  );
}

export default App;
