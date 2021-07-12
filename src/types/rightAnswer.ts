import { OptionKey } from "../enums/optionKey";
import { OptionScore } from "./optionScore";
export interface RightAnswer {
    optionScore: OptionScore,
    optionScoreRule: string,
    optionKey: OptionKey[],
    optionValue: string[],
}