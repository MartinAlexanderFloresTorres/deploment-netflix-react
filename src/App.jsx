import { BrowserRouter, Routes, Route } from "react-router-dom";
import En from "./pages/En";
import Es from "./pages/Es";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Es />} />
        <Route path="en" element={<En />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
