import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./components/test/index.jsx";
import Home from "./components/home/index.jsx";
import SearchResult from "./components/searchResult/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:query/:startIndex" exact element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
