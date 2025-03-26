import React from "react";
import { useNavigate } from "react-router";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center bg-gray-300 bg-opacity-50 p-10 rounded-lg shadow-lg">
        <h1 className="text-black text-4xl mb-4">Welcome to the Quiz</h1>
        <p className="text-black text-xl mb-8">
          Test your knowledge and have fun!
        </p>
        <button
          className="bg-blue-600 text-white py-3 px-6 text-xl rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          onClick={startQuiz}
        >
          Start
        </button>
      </div>
    </div>
  );
};
