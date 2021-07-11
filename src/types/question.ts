import { OptionKey } from '../enums/optionKey';
import { QuestionType } from '../enums/questionType';

export interface Question {
  id: string;
  question: string;
  answerOption:{
    A:	string;
    B:	string;
    C?:	string;
    D?:	string;
    E?:	string;
    F?:	string;
    G?:	string;
    H?:	string;
    I?:	string;
    J?:	string;
    K?:	string;
    L?:	string;
    M?:	string;
  },
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
