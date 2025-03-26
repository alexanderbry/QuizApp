export interface ILayoutProps {
  children: React.ReactNode;
}
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}