import { QuestionType } from '../enums/questionType';
import { AnswerOption } from './answerOption';
import { RightAnswer } from './rightAnswer';

export interface Question {
  id: string;
  question: string;
  answerOption: AnswerOption,
  rightAnswer: RightAnswer,
  type: QuestionType,
  score: number,
}
