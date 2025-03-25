import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <DefaultLayout>
      <QuizPage />
    </DefaultLayout>
  );
}

export default App;
