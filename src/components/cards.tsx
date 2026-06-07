type CardType = {
  id: number;
  image: string;
  matched: boolean;
};

type Props = {
  card: CardType;
  flipped: boolean;
  handleChoice: (card: CardType) => void;
};

export default function Card({
  card,
  flipped,
  handleChoice,
}: Props) {
  return (
    <div
      className="
        relative
        w-[18vw]
        h-[24vw]
        max-w-[220px]
        max-h-[300px]
        cursor-pointer
        perspective
      "
      onClick={() => handleChoice(card)}
    >
      <div
        className={`
          relative
          w-full
          h-full
          duration-700
          transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* front */}
        <div
          className="
            absolute
            w-full
            h-full
            backface-hidden
            rounded-3xl
            overflow-hidden
            shadow-2xl
            border-4
            border-white/20
          "
        >
          <img
            src={card.image}
              alt="Plant card"

            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>

        {/* back */}
        <div
          className="
            absolute
            w-full
            h-full
            rotate-y-180
            backface-hidden
            rounded-3xl
            bg-emerald-900
            border-4
            border-green-300
            shadow-xl
            flex
            items-center
            justify-center
          "
        >
          <span className="text-[5vw]">
            🌿
          </span>
        </div>
      </div>
    </div>
  );
}