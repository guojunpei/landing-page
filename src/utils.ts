import { Question } from './types/question';

const getAnswerContent = (
  question: Question,
  answerKey: string,
  answerValue: string,
): string => {
  return `
    <div class="answers">
      <input type="${question.type}" id="${
    question.id
  }${answerKey}" value="${answerKey}" name="question${question.id}"/>
      <label for="${question.id}${answerKey}">
      ${answerKey.toUpperCase()}:${answerValue}
      </label>
    </div>
    `;
};

const getAnswersContent = (question: Question): string => {
  return Object.entries(question.answerOption)
    .map(([key, value]) => getAnswerContent(question, key, value))
    .join('');
};

export const getQuestionContent = (question: Question): string => {
  return `
    <div class="question-and-answer">
      <div class="question-zone">
        <div class="question-number">
          ${question.id}
        </div>
        <div class="question-content">
          ${question.question}
        </div>
      </div>
      <div class="answer-zone">
        ${getAnswersContent(question)}
      </div>
    </div>`;
};

export const getNHtml = (questions: Question[]): string => {
  if (questions != undefined) {
    return `
      <div>
        <h1>Quiz : test your web knowledge</h1>
      </div>
  
      <form action>
        <div id="main-paper">${questions
          .map((question) => getQuestionContent(question))
          .join('')}</div>
      </form>
  
      <div id="show-score">
        <div id="show-score-text">
          your score:
        </div>
        <div id="show-score-number">
          0
        </div>
        <div id="score-detail">
          0
        </div>
      </div>`;
  }

  return '';
};
