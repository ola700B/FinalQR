import sidr from "../assets/img/6.png";
import silq from "../assets/img/plant2.png";
import olive from "../assets/img/18.png";
import wheat from "../assets/img/42.png";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react"; 
import { useTranslation } from "react-i18next";

type Plant = {
  id: number;
  code: string;
  name: string;
  image: string;
};

function Plants() {
  const { t } = useTranslation();
  const [searchNumber, setSearchNumber] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
  if (Number(searchNumber) === 2) {
    navigate("/plant/2");
    setIsSearchOpen(false);
    setSearchNumber("");
  } 
};
 const plants: Plant[] = [
  { id: 1, code: "01", name: t("sidr"), image: sidr },
  { id: 2, code: "02", name: t("silq"), image: silq },
  { id: 3, code: "03", name: t("olive"), image: olive },
  { id: 4, code: "04", name: t("wheat"), image: wheat },
  { id: 5, code: "05", name: t("datePalm"), image: sidr },
  { id: 6, code: "06", name: t("fig"), image: olive },
  { id: 7, code: "07", name: t("pomegranate"), image: wheat },
  { id: 8, code: "08", name: t("grape"), image: silq },

  { id: 9, code: "09", name: t("banana"), image: sidr },
  { id: 10, code: "10", name: t("mint"), image: olive },
  { id: 11, code: "11", name: t("basil"), image: wheat },
  { id: 12, code: "12", name: t("ginger"), image: silq },
  { id: 13, code: "13", name: t("banana"), image: sidr },
  { id: 14, code: "14", name: t("mint"), image: olive },
  { id: 15, code: "15", name: t("basil"), image: wheat },
  { id: 16, code: "16", name: t("ginger"), image: silq },
  { id: 17, code: "17", name: t("banana"), image: sidr },
  { id: 18, code: "18", name: t("mint"), image: olive },
  { id: 19, code: "19", name: t("basil"), image: wheat },
  { id: 20, code: "20", name: t("ginger"), image: silq },
];

  return (
    <div
      className="
        relative
        min-h-screen
        pb-20
        sm:pb-24
        md:pb-28
"
    >
      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          w-full
          rounded-full
          bg-white
          blur-3xl
"
      />

      {/* GRID */}
    <div
  className="
    grid grid-cols-2
    md:grid-cols-4
    lg:gap-y-8
    gap-6 md:gap-5
    w-full
    px-4 pt-10 md:pt-15 
  "
>
  {plants.map((plant) => (
    <div
      key={plant.id}
      onClick={() => plant.id === 2 && navigate(`/plant/${plant.id}`)}
      className="
        overflow-hidden
        rounded-xl
        bg-green-900/20
        shadow-sm
        backdrop-blur-sm
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        cursor-pointer
        h-60 md:h-70
      "
    >
      {/* IMAGE */}
      <div className="h-[85%] w-full overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="
            w-full h-full
            object-cover
            object-center
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* INFO */}
      <div
        className="
         h-[15%] flex items-center justify-between
          px-3
          bg-green-950
        "
      >
        <h3 className="text-white text-sm md:text-base font-semibold">
          {plant.name}
        </h3>

        <span className="text-green-200 text-xs md:text-sm font-semibold">
          {String(plant.id).padStart(2, "0")}
        </span>
      </div>
    </div>
  ))}
</div>
      <div
        className="
          flex
          justify-center
          w-full
          px-4
          mt-10
"
      >
        <div
          onClick={() => setIsSearchOpen(true)}
          className="
            flex
            items-center
            w-full h-16 max-w-xl
            gap-2
            px-4
            mb-10
            rounded-xl
            bg-white
            border border-green-800
            shadow-md
            hover:shadow-lg
            cursor-pointer transition
"
        >
          <Search
            size={28}
            className="
              text-green-700
"
          />

          <span
            className="
              text-green-900/60 text-sm
              sm:text-lg
              md:text-xl
"
          >
            {t("searchPlant")}
          </span>
        </div>
      </div>
      {/* BUTTON */}
      <div
        className="
          flex
          justify-center
          w-full
"
      >
        <Link to="/gamesList">
  <button
    className="
      flex items-center justify-center
      gap-2
      p-5 
      w-52 h-16
      rounded-lg
      text-xl text-white font-bold
      bg-black/60
      sm:w-64 sm:h-20 sm:text-2xl 
      lg:text-3xl
      cursor-pointer
      hover:scale-105
      transition
    "
  >
    <Gamepad2 size={25} />
    {t("playGames")}
  </button>
</Link>
      </div>
      {isSearchOpen && (
        <div
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center justify-center
            bg-black/70
"
        >
          <div
            className="
              relative
              w-72
              p-6
              rounded-2xl
              text-white
              bg-black/40
              backdrop-blur-md
"
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="
                absolute
                top-2 right-3
                text-lg
                cursor-pointer
"
            >
              ✕
            </button>

            <h2
              className="
                mb-4
                text-lg font-bold
                text-center
"
            >
              {t("enterPlantNumber")}
            </h2>

            {/* INPUT */}
            <input
              value={searchNumber}
              readOnly
              placeholder="00"
              className="
                w-full h-12
                mb-4
                rounded-lg
                text-2xl
                text-center
                bg-white/10
                outline-none
"
            />

            {/* KEYPAD */}
            <div
              className="
                grid grid-cols-3
                gap-2
"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button
                  key={num}
                  onClick={() =>
                    setSearchNumber((prev) => (prev + num).slice(0, 2))
                  }
                  className="
                    p-3
                    rounded-lg
                    bg-white/10
                    hover:bg-white/20
"
                >
                  {num}
                </button>
              ))}
            </div>

            {/* ACTIONS */}
            <div
              className="
                flex
                justify-between
                mt-4
"
            >
              <button
                onClick={() => setSearchNumber("")}
                className="
                  p-3
                  rounded-lg
                  text-red-400
                  hover:bg-white/20 hover:scale-105
                  cursor-pointer transition
"
              >
                {t("clear")}
              </button>

              <button
                onClick={handleSearch}
                className="
                  p-3
                  rounded-lg
                  text-green-400 font-bold
                  hover:bg-white/20 hover:scale-105
                  cursor-pointer transition
"
              >
                {t("search")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plants;
