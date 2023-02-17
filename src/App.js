import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCharacter } from "./Redux/actions";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/Nav/Nav";
import React from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Form";

function App() {
  const { characterList } = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route
          path={`/home`}
          element={<Cards characterList={characterList} onClose={onClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
