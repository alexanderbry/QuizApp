import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}

export default App;
