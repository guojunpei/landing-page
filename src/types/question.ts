import { OptionKey } from '../enums/optionKey';
import { QuestionType } from '../enums/questionType';

export interface Question {
  id: string;
  question: string;
  answerOption:{
    OptionKey: string;

      
  }
}
