import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export const HomePage: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  const quizzes = [
    { id: 'math', label: 'Mathematics Quiz' },
    { id: 'science', label: 'Science Quiz' },
    { id: 'history', label: 'History Quiz' },
    { id: 'literature', label: 'Literature Quiz' }
  ];

  const handleQuizSelection = (quizId: string) => {
    setSelectedQuiz(quizId);
  };

  const handleStartQuiz = () => {
    if (selectedQuiz) {
      // Here you would typically navigate to the quiz or start the selected quiz
      console.log('Selected Quiz:', selectedQuiz);
      alert(`Starting quiz: ${selectedQuiz}`);
    } else {
      alert('Please select a quiz');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Select Your Quiz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            onValueChange={handleQuizSelection} 
            value={selectedQuiz || ''}
            className="space-y-3"
          >
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={quiz.id} 
                  id={quiz.id} 
                />
                <Label 
                  htmlFor={quiz.id} 
                  className="text-base"
                >
                  {quiz.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleStartQuiz} 
            className="w-full"
            disabled={!selectedQuiz}
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;