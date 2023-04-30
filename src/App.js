import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import Curriculo from "./components/Curriculo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="curriculo" element={<Curriculo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
