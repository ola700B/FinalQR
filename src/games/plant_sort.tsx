import { useEffect, useRef, useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  type DragEndEvent,
 TouchSensor,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* ================= AUDIO ================= */
const successAudio = new Audio("/sounds/match.mp3");
const wrongAudio = new Audio("/sounds/wrong.mp3");
const winAudio = new Audio("/sounds/win.mp3");
const loseAudio = new Audio("/sounds/lose.mp3");

/* ================= TYPES ================= */
type Category = "seed" | "flower" | "fruit";

interface PlantCard {
  id: number;
  nameKey: string;
  emoji: string;
  category: Category;
}

/* ================= CARDS ================= */
const gameCards: PlantCard[] = [
  { id: 1, nameKey: "plantCards.rose", emoji: "🌹", category: "flower" },
  { id: 2, nameKey: "plantCards.apple", emoji: "🍎", category: "fruit" },
  { id: 3, nameKey: "plantCards.seed", emoji: "🌱", category: "seed" },
];

/* ================= DRAG CARD ================= */
function DraggableCard({ card, y }: { card: PlantCard; y: number }) {
  const { t } = useTranslation();

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: card.id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="
      touch-none 
        w-52
        rounded-[28px]
        bg-white
        p-5
        shadow-2xl
        cursor-grab
        active:cursor-grabbing
        select-none
        absolute
        left-1/2
        -translate-x-1/2
        will-change-transform
      "
      style={{
        transform: `
          translate(-50%, ${y}px)
          translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)
          scale(${transform ? 0.95 : 1})
        `,
      }}
    >
      <div className="text-6xl text-center">{card.emoji}</div>

      <h2 className="mt-3 text-center text-xl font-bold">
        {t(card.nameKey)}
      </h2>
    </div>
  );
}

/* ================= DROP BOX ================= */
function DropBox({
  id,
  emoji,
  label,
  active,
}: {
  id: Category;
  emoji: string;
  label: string;
  active: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        w-32 h-32
        rounded-2xl
        bg-white
        shadow-xl
        flex flex-col
        items-center justify-center
        transition-all
        duration-200
        ${isOver ? "scale-110" : ""}
        ${active ? "animate-bounce" : ""}
      `}
    >
      <div className="text-3xl">📦</div>
      <div className="text-3xl">{emoji}</div>
      <div className="text-sm font-bold">{label}</div>
    </div>
  );
}

/* ================= GAME ================= */
export default function Plant_sort() {
  const { t } = useTranslation();
  const navigate = useNavigate();

 

  const [cards, setCards] = useState(gameCards);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const [paused, setPaused] = useState(false);
  const [shake, setShake] = useState(false);
  const [successBox, setSuccessBox] = useState<Category | null>(null);

  const [showWin, setShowWin] = useState(false);
  const [losePlayed, setLosePlayed] = useState(false);

  const currentCard = cards[0];

  const yRef = useRef(-200);
  const frameRef = useRef<number | null>(null);
  const [, forceRender] = useState(0);

  /* ================= RESET CARD ================= */
  const resetCard = () => {
    yRef.current = -200;
    setSuccessBox(null);
  };

  /* ================= FALL ANIMATION ================= */
  useEffect(() => {
    if (!currentCard) return;

    resetCard();

    let stopped = false;
    const speed = 1.3;

    const animate = () => {
      if (stopped || paused) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      yRef.current += speed;
      forceRender((v) => v + 1);

      if (yRef.current > window.innerHeight - 220) {
        stopped = true;

        setLives((l) => l - 1);
        wrongAudio.play();
        setCards((c) => c.slice(1));

        return;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      stopped = true;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [currentCard, paused]);

  /* ================= LOSE SOUND ================= */
  useEffect(() => {
    if (lives <= 0 && !losePlayed) {
      loseAudio.play();
      setLosePlayed(true);
    }
  }, [lives, losePlayed]);

  /* ================= DRAG EVENTS ================= */
  const handleDragStart = () => setPaused(true);

  const handleDragEnd = (event: DragEndEvent) => {
    setPaused(false);

    const box = event.over?.id;
    if (!box || !currentCard) return;

    const isLast = cards.length === 1;

    if (box === currentCard.category) {
      setScore((s) => s + 10);
      successAudio.play();
      setSuccessBox(currentCard.category);

      setTimeout(() => {
        if (isLast) {
          winAudio.play();
          setShowWin(true);
        }
        setCards((c) => c.slice(1));
      }, 250);
    } else {
      setLives((l) => l - 1);
      wrongAudio.play();

      setShake(true);
      setTimeout(() => setShake(false), 400);

      setCards((c) => c.slice(1));
    }
  };
const sensors = useSensors(
  useSensor(MouseSensor),
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 120, // مهم للموبايل
      tolerance: 5,
    },
  }),
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  })
);
  /* ================= UI ================= */
  return (
   <DndContext
  sensors={sensors}
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd}
>
      <div className={`min-h-screen relative overflow-hidden ${shake ? "animate-pulse" : ""}`}>

        {/* HEADER */}
        <div className="flex justify-between px-6 py-4 text-white text-xl font-bold">
          <div>❤️ {lives}</div>
          <div>⭐ {score}</div>
        </div>

        {/* CARD */}
        {currentCard && (
          <DraggableCard card={currentCard} y={yRef.current} />
        )}

        {/* BOXES */}
        <div className="absolute bottom-25 w-full px-3 flex gap-2 sm:gap-6 justify-between sm:justify-around">
          <DropBox id="seed" emoji="🌱" label={t("sorting.seed")} active={successBox === "seed"} />
          <DropBox id="flower" emoji="🌸" label={t("sorting.flower")} active={successBox === "flower"} />
          <DropBox id="fruit" emoji="🍎" label={t("sorting.fruit")} active={successBox === "fruit"} />
        </div>

        {/* WIN */}
        {showWin && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="p-6 rounded-2xl text-center bg-white shadow-2xl">
              <h1 className="text-2xl text-green-700 font-bold">
                {t("sorting.winTitle")}
              </h1>

              <p>{t("sorting.score")}: {score}</p>

              <button
                onClick={() => {
                  setCards(gameCards);
                  setScore(0);
                  setLives(3);
                  setShowWin(false);
                  setLosePlayed(false);
                }}
                className="px-4 py-2 mt-4 rounded-lg text-white bg-green-600"
              >
                {t("sorting.playAgain")}
              </button>

              <button
                onClick={() => navigate("/gamesList")}
                className="px-3 py-2 mt-3 mr-3 rounded-lg text-white bg-gray-600"
              >
                {t("sorting.back")}
              </button>
            </div>
          </div>
        )}

        {/* LOSE */}
        {lives <= 0 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="p-6 rounded-2xl text-center bg-white shadow-2xl">
              <h1 className="text-2xl text-red-600 font-bold">
                {t("sorting.loseTitle")}
              </h1>

              <p>{t("sorting.finalScore")}: {score}</p>

              <button
                onClick={() => {
                  setCards(gameCards);
                  setScore(0);
                  setLives(3);
                  setShowWin(false);
                  setLosePlayed(false);
                }}
                className="px-4 py-2 mt-4 rounded-lg text-white bg-red-600"
              >
                {t("sorting.tryAgain")}
              </button>

              <button
                onClick={() => navigate("/gamesList")}
                className="px-3 py-2 mt-3 ml-2 rounded-lg text-white bg-gray-600"
              >
                {t("sorting.back")}
              </button>
            </div>
          </div>
        )}
      </div>
    </DndContext>
  );
}