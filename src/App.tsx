import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
