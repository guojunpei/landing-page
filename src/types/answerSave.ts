import { OptionKey } from "../enums/optionKey";
import { Question } from "../types/question";

let question:Question;
let questionId:string=question.id;
let questionIds:[string]=[questionId];

export type AnwserSave = {
    score:number;
    time:Date;
    //[key in questionIds]?:OptionKey;
}