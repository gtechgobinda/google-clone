import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./components/test/index.jsx";
import Home from "./components/home/index.jsx";
import SearchResult from "./components/searchResult/index.jsx";
import { AppContext } from "./utils/ContextApi.jsx";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" exact element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
