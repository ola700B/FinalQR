import { useEffect, useState } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: "quiz_q1",
    options: ["sidr", "silq", "olive", "caper"],
    answer: "olive",
  },
  {
    question: "quiz_q2",
    options: ["leaf", "flower", "root", "stem"],
    answer: "root",
  },
  {
    question: "quiz_q3",
    options: ["chlorophyll", "protein", "cellulose", "starch"],
    answer: "chlorophyll",
  },
  {
    question: "quiz_q4",
    options: ["root", "leaf", "seed", "fruit"],
    answer: "leaf",
  },
  {
    question: "quiz_q5",
    options: ["sunlight", "plastic", "metal", "sand"],
    answer: "sunlight",
  },
  {
    question: "quiz_q6",
    options: ["olive", "mint", "basil", "parsley"],
    answer: "olive",
  },
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(4);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameFinished, setGameFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { t } = useTranslation();
  const winAudio = useRef(new Audio("/sounds/win.mp3"));

  const correctAudio = useRef(new Audio("/sounds/correct.mp3"));

  const wrongAudio = useRef(new Audio("/sounds/wrong.mp3"));
  const loseAudio = useRef(new Audio("/sounds/lose.mp3"));
  useEffect(() => {
    if (gameFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleWrongAnswer();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, gameFinished]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      winAudio.current.currentTime = 0;
      winAudio.current.play();

      setGameFinished(true);
    }
  };

  const handleWrongAnswer = () => {
    const newLives = lives - 1;

    setLives(newLives);
    setMistakes((prev) => prev + 1);

    if (newLives <= 0) {
      loseAudio.current.currentTime = 0;
      loseAudio.current.play();

      setGameFinished(true);
      return;
    }

    nextQuestion();
  };

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);

    const isCorrect = option === questions[currentQuestion].answer;

    setTimeout(() => {
      if (option === questions[currentQuestion].answer) {
        correctAudio.current.currentTime = 0;
        correctAudio.current.play();

        setTimeout(() => {
          setScore((prev) => prev + 100);
          nextQuestion();
        }, 1000);
      } else {
        wrongAudio.current.currentTime = 0;
        wrongAudio.current.play();

        setTimeout(() => {
          handleWrongAnswer();
        }, 1000);
      }

      setSelectedAnswer(null);
    }, 1000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(4);
    setMistakes(0);
    setTimeLeft(30);
    setGameFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (gameFinished) {
    return (
      <div
        className="
          flex
          items-center justify-center
          min-h-screen
          p-4
          bg-green-500
"
      >
        <div
          className="
            w-full max-w-md
            p-8
            rounded-3xl
            text-center
            bg-white
            md:p-12
"
        >
          <h1
            className="
              mb-4
              text-3xl font-bold
              md:text-5xl
"
          >
            {t("game_finished")}
          </h1>

          <p
            className="
              mb-6
              text-xl
              md:text-3xl
"
          >
            {t("score")}: {score}
          </p>

          <button
            onClick={restartGame}
            className="
              px-8 py-3
              rounded-xl
              text-white text-lg font-semibold
              bg-green-500
"
          >
            {t("play_again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        px-4 py-6
"
    >
      <div
        className="
          max-w-5xl
          mx-auto
"
      >
        {/* Top Stats */}
        <div
          className="
            grid grid-cols-2
            gap-3
            mt-10
            mb-6
            md:grid-cols-4
"
        >
          <div
            className="
              p-4
              rounded-2xl
              text-center
              bg-white
              shadow
"
          >
            <p
              className="
                text-sm text-gray-500
"
            >
              {t("lives")}
            </p>
            <p
              className="
                text-lg font-bold
"
            >
              {"❤️".repeat(lives)}
            </p>
          </div>

          <div
            className="
              p-4
              rounded-2xl
              text-center
              bg-white
              shadow
"
          >
            <p
              className="
                text-sm text-gray-500
"
            >
              {t("mistakes")}
            </p>
            <p
              className="
                text-lg font-bold
"
            >
              {mistakes}/3
            </p>
          </div>

          <div
            className="
              p-4
              rounded-2xl
              text-center
              bg-white
              shadow
"
          >
            <p
              className="
                text-sm text-gray-500
"
            >
              {t("time")}
            </p>
            <p
              className="
                text-lg font-bold
"
            >
              {timeLeft}s
            </p>
          </div>

          <div
            className="
              p-4
              rounded-2xl
              text-center
              bg-white
              shadow
"
          >
            <p
              className="
                text-sm text-gray-500
"
            >
              {t("score")}
            </p>
            <p
              className="
                text-lg font-bold
"
            >
              {score}
            </p>
          </div>
        </div>
        {/* Hint Button */}
        <div
          className="
            flex
            justify-center
            mb-4
"
        >
          <button
            className="
              px-8 py-3
              rounded-2xl
              font-semibold
              bg-white
              shadow
"
          >
            💡 {t("hint")}
          </button>
        </div>

        {/* Question Card */}
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="
            grid
            gap-4
            p-4
            mt-20
            rounded-3xl
            bg-white
            shadow-lg
            md:p-8
"
        >
          <h1
            className="
              mb-8
              text-xl font-bold
              text-center
              md:text-3xl
"
          >
            {t(questions[currentQuestion].question)}
          </h1>

          <div
            className="
              grid
              gap-4
"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`
                  w-full
                  p-4
                  rounded-2xl
                  text-base
                  border
                  transition
                  md:p-5 md:text-xl
                  ${i18n.language === "ar" ? "text-right" : "text-left"}
                  ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].answer
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-red-500 text-white border-red-500"
                      : "border-gray-200 hover:bg-gray-100"
                  }
`}
              >
                <span
                  className="
                    mr-2
                    font-bold
"
                >
                  {String.fromCharCode(65 + index)}.
                </span>
                {t(option)}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div
            className="
              mt-8
"
          >
            <div
              className="
                overflow-hidden
                w-full h-4
                rounded-full
                bg-gray-200
"
            >
              <div
                className="
                  h-full
                  bg-green-500
                  transition-all duration-500
"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p
              className="
                mt-2
                text-sm text-gray-500
                text-center
"
            >
              {t("question_progress", {
                current: currentQuestion + 1,
                total: questions.length,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
