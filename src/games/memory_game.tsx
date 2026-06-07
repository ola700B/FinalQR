import { useEffect, useState } from "react";

import plant1 from "../assets/img/1.png";
import plant2 from "../assets/img/2.png";
import plant3 from "../assets/img/3.png";
import plant4 from "../assets/img/4.png";
import plant5 from "../assets/img/leaf3.png";
import plant6 from "../assets/img/leaf5.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type CardType = {
  id: number;
  image: string;
  matched: boolean;
};

const plantImages = [plant1, plant2, plant3, plant4, plant5, plant6];

const createDeck = (): CardType[] =>
  [...plantImages, ...plantImages]
    .map((img, i) => ({
      id: i + Math.random(),
      image: img,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

export default function MemoryGame() {
    const { t, i18n } = useTranslation();

  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [winSoundPlayed, setWinSoundPlayed] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);

  useEffect(() => {
    setCards(createDeck());

    const timer = setTimeout(() => {
      setPreviewMode(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // TIMER
  useEffect(() => {
    if (win) return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [win]);

  // WIN CHECK
  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      setTimeout(() => {
        setWin(true);

        setBestScore((prev) => {
          if (prev === null || time < prev) return time;
          return prev;
        });

        if (!winSoundPlayed) {
          const audio = new Audio("/sounds/win.mp3");
          audio.volume = 0.4;
          audio.play().catch(() => {});
          setWinSoundPlayed(true);
        }
      }, 500);
    }
  }, [cards, time]);

  const restart = () => {
    setCards(createDeck());
    setFlipped([]);
    setDisabled(false);
    setWin(false);

    setMoves(0);
    setTime(0);

    setPreviewMode(true);

    setTimeout(() => {
      setPreviewMode(false);
    }, 3000);
  };

  const playMatchSound = () => {
    const audio = new Audio("/sounds/match.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  const playWrongSound = () => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/24/audio_2b3f3a7f9d.mp3",
    );
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const handleFlip = (index: number) => {
    if (previewMode) return;
    if (disabled || win) return;
    if (flipped.includes(index)) return;
    if (cards[index].matched) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);

      setMoves((m) => m + 1);

      const [a, b] = newFlipped;

      if (cards[a].image === cards[b].image) {
        setCards((prev) =>
          prev.map((c, i) =>
            i === a || i === b ? { ...c, matched: true } : c,
          ),
        );

        setTimeout(() => {
          playMatchSound();
          setFlipped([]);
          setDisabled(false);
        }, 300);
      } else {
        playWrongSound();

        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };
  const navigate = useNavigate();

  return (
    <div
      className="
      flex flex-col
      items-center
      w-full
      min-h-screen
      gap-3
      px-3 py-4
      sm:px-6
      md:px-8
    "
    >
      {/* WRAPPER CENTER */}
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* STATS */}
        <div className={`
          sticky top-0 z-20 flex flex-wrap justify-center w-full gap-2 sm:gap-3 md:gap-4 py-2 mt-14
          ${i18n.language === "ar" ? "flex-row-reverse" : ""}
        `}>
          <div className="px-3 py-2 rounded-xl bg-white/80 font-semibold text-sm sm:text-base md:text-lg lg:text-2xl">
            🎯  {t("memory.moves")}: {moves}
          </div>

          <div className="px-3 py-2 rounded-xl bg-white/80 font-semibold text-sm sm:text-base md:text-lg lg:text-2xl">
            ⏱️  {t("memory.time")}: {time}s
          </div>

          <div className="px-3 py-2 rounded-xl bg-white/80 font-semibold text-sm sm:text-base md:text-lg lg:text-2xl">
            🏆  {t("memory.best")}: {bestScore !== null ? `${bestScore}s` : "—"}
          </div>
        </div>
        <div className="h-6 sm:h-8 md:h-16 lg:h-24" />
        {/* GAME GRID */}
        <div
          className="
          
          lg:gap-y-20
          grid
          grid-cols-4
          lg:gap-x-4
          gap-1 sm:gap-2 md:gap-3
          w-full
          justify-items-center
           sm:mt-10 md:mt-16 lg:mt-36
        "
        >
          {cards.map((card, index) => {
            const isFlipped =
              previewMode || flipped.includes(index) || card.matched;

            return (
              <div
                key={card.id}
                onClick={() => handleFlip(index)}
                className="
                w-full
                max-w-25
                sm:max-w-30
                md:max-w-35
                lg:max-w-40
                aspect-3/4
                cursor-pointer
              "
                style={{ perspective: "1000px" }}
              >
                <div
                  className="
                  relative w-full h-full
                  transition-transform duration-500
                "
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* BACK */}
                  <div
                    className="
                    absolute w-full h-full
                    rounded-xl
                    flex items-center justify-center
                    text-white text-3xl
                    bg-green-900/70
                    backdrop-blur-sm
                  "
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    🌿
                  </div>

                  {/* FRONT */}
                  <div
                    className="
                    absolute w-full h-full
                    rounded-xl
                    flex items-center justify-center
                    bg-white
                  "
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="w-20 h-28 object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WIN */}
      {win && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="p-6 rounded-2xl text-center bg-white">
            <h1 className="mb-2 text-2xl text-green-700 font-bold">
              {t("memory.win")}
            </h1>

            <p>{t("memory.time")}: {time}s</p>
            <p>{t("memory.moves")}: {moves}</p>

            <button
              onClick={restart}
              className="px-4 py-2 mt-4 rounded-lg text-white bg-green-600 cursor-pointer"
            >
               {t("memory.playAgain")}
            </button>
             <button
                onClick={() => navigate("/gamesList")}
                className="px-2 mr-3 cursor-pointer  py-2 mt-3 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition"
              >
                Back to Games
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
