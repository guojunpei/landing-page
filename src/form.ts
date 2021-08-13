import { questionList } from './constants/questions';
import { QuestionType } from './enums/questionType';
import { WarmingColors } from './enums/warmingColors';
import { AnwserSave } from './types/answerSave';

let saveAnswer: AnwserSave = {
  score: 0,
  //time:new Date,
  answerAndQuestion: [],
};

//let saveAnswers:any[]=[0];
//saveAnswers=[scoreNumber,question1AnswerObject,question2AnswerObject...]

const mainForm = document.querySelector('form');

function formCheck() {
  let lossQnArry = [];
  let doneQnArry = [];
  let lossQnString = '';
  for (const qn of questionList) {
    for (let k of Object.keys(qn.answerOption)) {
      if (document.getElementById(`${qn.id}${k}`) != null) {
        if (
          (document.getElementById(`${qn.id}${k}`) as HTMLInputElement).checked
        ) {
          doneQnArry.push(qn.id);
        }
      }
    }
  }

  for (const qn of questionList) {
    if (!doneQnArry.includes(qn.id)) {
      lossQnArry.push(qn.id);
      lossQnString += qn.id + ',';
    }
  }
  document.getElementById('tip-number-done').innerText = `${
    questionList.length - lossQnArry.length
  }`;
  document.getElementById('tip-number-lose').innerText = `${lossQnArry.length}`;

  if (lossQnString !== '') {
    document.getElementById('quiz-submit').style.color = WarmingColors.RED;
  } else {
    document.getElementById('quiz-submit').style.color = WarmingColors.GREEN;
  }
}

mainForm.addEventListener('formdata', (e: any) => {
  const userAnswer = Object.fromEntries(e.formData);

  saveAnswer.answerAndQuestion.push(userAnswer);

  for (let [k, v] of e.formData) {
    let sn = 0;
    let rightAnswerObj = JSON.parse(k);
    let rs = rightAnswerObj.rightAnswer.optionScore;
    let rk = rightAnswerObj.rightAnswer.optionKey;
    if (rightAnswerObj.type === QuestionType.radio) {
      if (rk.includes(v)) {
        sn = rs.right;
      } else {
        sn = rs.wrong;
      }
    } else {
      if (rk.includes(v)) {
        sn = rs.includeEquipartition / rk.length;
      } else {
        sn = rs.notInclude;
      }
    }

    for (let qn of questionList) {
      if (qn.id === rightAnswerObj.id) {
        qn.score += sn;
        if (
          qn.type === QuestionType.checkbox &&
          qn.score === qn.rightAnswer.optionScore.includeEquipartition
        ) {
          qn.score = qn.rightAnswer.optionScore.right;
        }
      }
    }
  }

  const scoreWrapper = document.getElementById('score-detail');
  scoreWrapper.innerText = '';
  const scoreTable = document.createElement('table');
  const tableThead = document.createElement('thead');
  const tableTrHead = document.createElement('tr');
  const tableThHead = document.createElement('th');
  tableThHead.innerText = 'Score detail';
  tableThHead.colSpan = 3;
  tableTrHead.appendChild(tableThHead);
  tableThead.appendChild(tableTrHead);
  scoreTable.appendChild(tableThead);
  const tableTrTh = document.createElement('tr');
  const tableThQ = document.createElement('th');
  const tableThFs = document.createElement('th');
  const tableThYs = document.createElement('th');
  tableThQ.innerText = 'Qn';
  tableTrTh.appendChild(tableThQ);
  tableThFs.innerText = 'Full';
  tableTrTh.appendChild(tableThFs);
  tableThYs.innerText = 'Your';
  tableTrTh.appendChild(tableThYs);
  scoreTable.appendChild(tableTrTh);
  for (let qn of questionList) {
    saveAnswer.score = saveAnswer.score + qn.score;

    const tableTrTd = document.createElement('tr');
    const tableTdQn = document.createElement('td');
    const tableTdQnS = document.createElement('td');
    const tableTdQnY = document.createElement('td');
    tableTdQn.innerText = qn.id;
    tableTrTd.appendChild(tableTdQn);
    tableTdQnS.innerText = `${qn.rightAnswer.optionScore.right}`;
    tableTrTd.appendChild(tableTdQnS);
    tableTdQnY.innerText = `${qn.score}`;
    tableTrTd.appendChild(tableTdQnY);
    scoreTable.appendChild(tableTrTd);
  }
  scoreWrapper.appendChild(scoreTable);

  document.getElementById('show-paper').style.display = 'none';
  document.getElementById('show-score').style.display = 'flex';
  document.getElementById('show-score-text').style.fontSize = '2rem';
  document.getElementById('show-score-text').style.color = 'white';
  document.getElementById('show-score-text').innerText =
    'Congratulations!\n All the questions has be finshed!\n your final score is';
  document.getElementById('show-score-number').style.fontSize = '4rem';
  document.getElementById(
    'show-score-number',
  ).innerText = `${saveAnswer.score}`;
});

mainForm.addEventListener('click', formCheck);
