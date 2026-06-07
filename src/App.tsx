import {  Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Memory_game from "./games/memory_game";
import Layout from "./components/layouts";
import PlantDetails from "./pages/PlantDetails";
import Description from "./pages/description";
import Habitat from "./pages/habitat";
import Uses from "./pages/uses";
import Quran from "./pages/quran";
import FlowerEffect from "./components/flowerEffect";
import GameList from "./pages/gamesList";
import MemoryLevel from "./pages/memoryLevel";
import Plant_sort from "./games/plant_sort";
import Propagation from "./pages/propagation";

import QuizGame from "./games/quiz_game";

function DirectionProvider() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}

function App() {
  return (
    <>
      <DirectionProvider />

      <FlowerEffect>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<Layout />}>
              <Route path="/plants" element={<Plants />} />
              <Route path="/memory_game" element={<Memory_game />} />
              <Route path="/plant/:id" element={<PlantDetails />} />
              <Route path="/habitat/:id" element={<Habitat />} />
              <Route path="/description/:id" element={<Description />} />
              <Route path="/uses/:id" element={<Uses />} />
              <Route path="/quran/:id" element={<Quran />} />
              <Route path="/propagation/:id" element={<Propagation/>} />
              <Route path="/gamesList" element={<GameList />} />
              <Route path="/memoryLevel" element={<MemoryLevel />} />
              <Route path="/plant_sort" element={<Plant_sort/>} />
              <Route path="/quiz_game" element={<QuizGame/>}/>  
            </Route>
          </Routes>
        </HashRouter>
      </FlowerEffect>
    </>
  );
}

export default App;