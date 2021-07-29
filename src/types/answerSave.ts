import { OptionKey } from "../enums/optionKey";
import { Question } from "../types/question";

let question:Question;
let questionId:string=question.id;
let questionIds:string[]=[questionId];

export type AnwserSave = {
    score:number;
    time:Date;
    //[key:string]:string;
    //[key in OptionKey]?:string
    questionIds:string[];
    answerContents:object[];
}

type Point = { x: number; y: number };
type P = keyof Point;