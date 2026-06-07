import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import memoryImg from "../assets/img/memory.png";
import sortingImg from "../assets/img/sorting.jpg";
import quizImg from "../assets/img/question.png";

function GameList() {
  const { t } = useTranslation();

  const games = [
    { id: 1, nameKey: "games.memory", path: "/memory_game", image: memoryImg },
    { id: 2, nameKey: "games.sorting", path: "/plant_sort", image: sortingImg },
    { id: 3, nameKey: "games.quiz", path: "/quiz_game", image: quizImg },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 pb-28 flex flex-col items-center">

      {/* TITLE */}
      <h1 className="mt-20 text-4xl sm:text-3xl md:text-5xl font-bold text-center text-green-950">
        {t("games.title")}
      </h1>

      {/* GRID */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-4 md:gap-6 lg:gap-8
          w-full max-w-6xl
        "
      >
        {games.map((game) => (
          <Link to={game.path} key={game.id} className="w-full flex justify-center">

            <div
              className="
                lg:w-160
                w-full
                h-70 sm:h-60 md:h-90 lg:h-120
                overflow-hidden
                rounded-xl
                bg-green-900/20
                shadow-md
                backdrop-blur-sm
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                cursor-pointer
                flex flex-col
              "
            >

              {/* IMAGE */}
              <div className="h-[80%] w-full overflow-hidden">
                <img
                  src={game.image}
                  alt={t(game.nameKey)}
                  className="w-full h-full object-center"
                />
              </div>

              {/* TITLE */}
              <div className="h-[20%] flex items-center justify-center bg-green-950 px-2">
                <h2 className="text-white text-sm sm:text-base md:text-lg font-bold text-center">
                  {t(game.nameKey)}
                </h2>
              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameList;