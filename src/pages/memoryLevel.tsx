import { useNavigate } from "react-router-dom";

function MemoryLevels() {
  const navigate = useNavigate();

  const levels = [
    {
      name: "Easy Level",
      desc: "Simple and beginner friendly",
      path: "/memory_game/easy",
    },
    {
      name: "Medium Level",
      desc: "Moderate challenge",
      path: "/memory_game/medium",
    },
    {
      name: "Hard Level",
      desc: "Expert memory challenge",
      path: "/memory_game/hard",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-500 flex justify-center p-4 md:p-8 pb-28">

      <div className="w-full max-w-5xl flex flex-col gap-8 mt-16">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-950 text-center">
          Memory Game Levels
        </h1>

        {/* LEVEL CARDS (HORIZONTAL) */}
        <div className="flex flex-col md:flex-row gap-6 w-full">

          {levels.map((level, i) => (
            <div
              key={i}
              onClick={() => navigate(level.path)}
              className="
                flex-1
                bg-white
                rounded-xl
                shadow-md
                p-6
                cursor-pointer
                hover:scale-105
                transition
                flex flex-col items-center justify-center
                text-center
              "
            >
              <h2 className="text-xl font-bold text-green-900">
                {level.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {level.desc}
              </p>
            </div>
          ))}

        </div>

        {/* HOW TO PLAY */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full">

          <h2 className="text-2xl font-bold text-green-900 mb-4">
            How to play
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>🟢 Flip two cards at a time</li>
            <li>🟢 Match identical images</li>
            <li>🟢 Try to finish with fewer moves</li>
            <li>🟢 Improve your memory each level</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default MemoryLevels;