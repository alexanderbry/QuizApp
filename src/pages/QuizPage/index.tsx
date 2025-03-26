import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { QUIZ_QUESTIONS } from "@/constants/constants";
import { useNavigate } from "react-router";

export const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const navigate = useNavigate();

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);

    navigate("/")
  };

  if (quizCompleted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-lg text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Quiz Completed!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4">
              Your Score: {score} / {QUIZ_QUESTIONS.length}
            </p>
            <p className="text-base">
              {score === QUIZ_QUESTIONS.length
                ? "Perfect score! Excellent job!"
                : score >= QUIZ_QUESTIONS.length / 2
                ? "Good job! You did well."
                : "Keep practicing to improve your score."}
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full">
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Quiz Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-lg font-semibold mb-4">
              {currentQuestion.question}
            </p>
            <RadioGroup
              onValueChange={setSelectedAnswer}
              value={selectedAnswer || ""}
              className="space-y-3"
              disabled={isAnswered}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={option} className="flex items-center space-x-3">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className={`text-base ${
                      isAnswered
                        ? option === currentQuestion.correctAnswer
                          ? "text-green-600 font-bold"
                          : option === selectedAnswer
                          ? "text-red-600"
                          : ""
                        : ""
                    }`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {isAnswered && (
            <div
              className={`mt-4 p-3 rounded ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <p className="text-green-800">Correct! Great job!</p>
              ) : (
                <p className="text-red-800">
                  Incorrect. The correct answer is{" "}
                  {currentQuestion.correctAnswer}.
                </p>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {!isAnswered ? (
            <Button
              onClick={handleAnswerSubmit}
              className="w-full"
              disabled={!selectedAnswer}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="w-full">
              {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizPage;
