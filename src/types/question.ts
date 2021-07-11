import { OptionKey } from '../enums/optionKey';
import { QuestionType } from '../enums/questionType';
import { AnswerOption } from './answerOption';

export interface Question {
  id: string;
  question: string;
  answerOption:AnswerOption,
  rightAnswer:{
    optionScore:{
        right: number,
        wrong: number,
        includeEquipartition: number,
        min: number,
        notInclude: number,
    },
    optionScoreRule: string,
    optionKey: [OptionKey,OptionKey?,OptionKey?,OptionKey?,OptionKey?,OptionKey?],
    optionValue: [string,string?,string?,string?,string?,string?],
  },
  type: QuestionType,
  score: number,
}
