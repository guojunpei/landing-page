import { OptionKey } from "../enums/optionKey";

export type AnswerOption = {
    [key in OptionKey]?:string
}