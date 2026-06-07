 import { useEffect, useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 5 + 5?",
    options: ["8", "10", "12", "15"],
    answer: "10",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(4);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameFinished, setGameFinished] = useState(false);

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
      setGameFinished(true);
    }
  };

  const handleWrongAnswer = () => {
    const newLives = lives - 1;

    setLives(newLives);
    setMistakes((prev) => prev + 1);

    if (newLives <= 0) {
      setGameFinished(true);
      return;
    }

    nextQuestion();
  };

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 100);
    } else {
      handleWrongAnswer();
      return;
    }

    nextQuestion();
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(4);
    setMistakes(0);
    setTimeLeft(30);
    setGameFinished(false);
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-green-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center w-full max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Game Finished
          </h1>

          <p className="text-xl md:text-3xl mb-6">
            Score: {score}
          </p>

          <button
            onClick={restartGame}
            className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-4 py-6">
      <div className="max-w-5xl mx-auto">

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">

          <div className="bg-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Lives</p>
            <p className="font-bold text-lg">
              {"❤️".repeat(lives)}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Mistakes</p>
            <p className="font-bold text-lg">
              {mistakes}/3
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Time</p>
            <p className="font-bold text-lg">
              {timeLeft}s
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Score</p>
            <p className="font-bold text-lg">
              {score}
            </p>
          </div>

        </div>
  {/* Hint Button */}
        <div className="flex justify-center mb-4">
          <button className="bg-white rounded-2xl px-8 py-3 font-semibold shadow">
            💡 Hint
          </button>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-lg p-4 md:p-8">

          <h1 className="text-xl md:text-3xl font-bold text-center mb-8">
            {questions[currentQuestion].question}
          </h1>

          <div className="grid gap-4">

            {questions[currentQuestion].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                    md:p-5
                    text-left
                    text-base
                    md:text-xl
                    hover:bg-gray-100
                    transition
                  "
                >
                  <span className="font-bold mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              )
            )}

          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}