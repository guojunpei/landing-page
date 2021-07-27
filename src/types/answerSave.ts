import { OptionKey } from "../enums/optionKey";
import { Question } from "../types/question";

export type AnwserSave = {
    score:number;
    time:Date;
    Question?:OptionKey
}