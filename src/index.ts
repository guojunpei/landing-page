import { Colors } from './enums/colors';
import { Sizes } from './enums/sizes';
import { Product } from './types/product';
import './styles/main.scss';

import { OptionKey } from './enums/optionKey';
import { QuestionType } from './enums/questionType';
import { Question } from './types/question';
import { AnswerOption } from './types/answerOption';
import { WarmingColors } from './enums/warmingColors';
import { AnwserSave } from './types/answerSave';


const app = document.querySelector('#app');

const questionList: Question[] = [
  {
    id:"Q1",
    question:"Which of the following is not JavaScript Data Types?",
    answerOption:{
        a:"Undefined",
        b:"Number",
        c:"Boolean",
        d:"Float",
    },
    rightAnswer:{
        optionScore:{
            right:10,
            wrong:-5,
            includeEquipartition:0,
            min:0,
            notInclude:0,
        },
        optionScoreRule:"答对 10分，答错 -5 分 扣分",
        optionKey:[OptionKey.d],
        optionValue:["Float"],
    },
    type:QuestionType.radio,
    score:0,
},
{
  id:"Q2",
  question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
  answerOption:{
      a:"The User’s machine running a Web browser",
      b:"The Web server",
      c:"A central machine deep within Netscape’s corporate offices",
      d:"None of the above",
  },
  rightAnswer:{
      optionScore:{
          right:10,
          wrong:-5,
          includeEquipartition:0,
          min:0,
          notInclude:0,
      },
      optionScoreRule:"答对 10分，答错 -5 分 扣分",
      optionKey:[OptionKey.a],
      optionValue:["The User’s machine running a Web browser"],
  },
  type:QuestionType.radio,
  score:0,
},
{
  id:"Q3",
  question:"Inside which HTML element do we put the JavaScript?",
  answerOption:{
      a:"<js>",
      b:"<scripting>",
      c:"<script>",
      d:"<javascript>",
  },
  rightAnswer:{
      optionScore:{
          right:10,
          wrong:-5,
          includeEquipartition:0,
          min:0,
          notInclude:0,
      },
      optionScoreRule:"答对 10分，答错 -5 分 扣分",
      optionKey:[OptionKey.c],
      optionValue:["<script>"],
  },
  type:QuestionType.radio,
  score:0,
},
{
  id:"Q4",
  question:"Which is the correct way to write a JavaScript array?",
  answerOption:{
      a:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
      b:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
      c:"var txt = new Array(“tim”,”kim”,”jim”)",
      d:"var txt = new Array=”tim”,”kim”,”jim”",
  },
  rightAnswer:{
      optionScore:{
          right:10,
          wrong:-5,
          includeEquipartition:0,
          min:0,
          notInclude:0,
      },
      optionScoreRule:"答对 10分，答错 -5 分 扣分",
      optionKey:[OptionKey.c],
      optionValue:["var txt = new Array(“tim”,”kim”,”jim”)"],
  },
  type:QuestionType.radio,
  score:0,
},
{
  id:"Q5",
  question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
  answerOption:{
      a:"onfocus",
      b :"onblur",
      c:"onclick",
      d:"ondblclick",
  },
  rightAnswer:{
      optionScore:{
          right:10,
          wrong:-5,
          includeEquipartition:0,
          min:0,
          notInclude:0,
      },
      optionScoreRule:"答对 10分，答错 -5 分 扣分",
      optionKey:[OptionKey.b],
      optionValue:["onblur"],
  },
  type:QuestionType.radio,
  score:0,
},
{
  id:"Q6",
  question:"Which of the following is the structure of an if statement?",
  answerOption:{
      a:"if (conditional expression is true) thenexecute this codeend if",
      b:"if (conditional expression is true)execute this codeend if",
      c:"if (conditional expression is true) {then execute this code>->}",
      d:"if (conditional expression is true) then {execute this code}",
  },
  rightAnswer:{
      optionScore:{
          right:10,
          wrong:-5,
          includeEquipartition:0,
          min:0,
          notInclude:0,
      },
      optionScoreRule:"答对 10分，答错 -5 分 扣分",
      optionKey:[OptionKey.c],
      optionValue:["if (conditional expression is true) {then execute this code>->}"],
  },
  type:QuestionType.radio,
  score:0,
},
{
  id:"Q7",
  question:"What are JavaScript primitive data types:",
  answerOption:{
      a:"string",
      b:"immutable",
      c:"number",
      d:"bigint",
      e:"object",
      f:"Array",
      g:"Set",
      h:"Map",
      i:"Function",
      j:"Date",
      k:"boolean",
      l:"undefined",
      m:"symbol",
  },
  rightAnswer:{
      optionScore:{
          right:20,
          wrong:0,
          includeEquipartition:15,
          min:-30,
          notInclude:-10,
      },
      optionScoreRule:"全对 20 分；选错 一个 -10 扣分（错误数 * -10）；最多扣 30分 （-30）；答对单个题分数为： 15 / 对的选项数量 全对 + 5分 （全对 20分）",
      optionKey:[OptionKey.a,OptionKey.c,OptionKey.d,OptionKey.k,OptionKey.l,OptionKey.m],
      optionValue:["string","number","bigint","boolean","undefined","symbol"],
  },
  type:QuestionType.checkbox,
  score:0,
}
]

/*
const productList: Product[] = [
  {
    name: 'Orange Juice',
    size: Sizes.M,
    color: Colors.ORANGE,
    amount: 2,
  },
  {
    name: 'Apple',
    size: Sizes.L,
    color: Colors.GREEN,
  },
  {
    name: `Apple juice`,
    size: Sizes.M,
    color: Colors.BLUE,
    amount: 3,
  },
];
*/

const getQuestionContent = (question: Question): string =>{
  const getAnswerContent = (answerKey: string, answerValue: string): string=>{
    let htmlAnswerString = '';
    htmlAnswerString += `
    <div class="answers">
      <input type="${question.type}" id="${question.id+answerKey}" value="${answerKey} name="question${question.id}">
      <label for="${question.id+answerKey}">
      ${answerKey}:${answerValue}
      </label>
    </div>
    `;
  
  return htmlAnswerString;
  };

  const getAnswersContent = (answers: AnswerOption): string =>{
    let htmlAnswersString = '';
    htmlAnswersString += `
    ${Object.entries(answers).map((li) => getAnswerContent(li[0],li[1]))}
    `;
    
    return htmlAnswersString;
  };

  let htmlQuestionString = '';
  htmlQuestionString += `
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
      ${getAnswersContent(question.answerOption)}
    </div>
  </div>`;
  
  return htmlQuestionString;
}

const getNHtml=(questions:Question[]): string =>{
  let htmlString = '';
  htmlString += `
    <div>
      <h1>Quiz : test your web knowledge</h1>
    </div>

    <form action>
      <div id="main-paper">${questions.map((question) => getQuestionContent(question))}</div>
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
    </div>`

  return htmlString;

};

app.innerHTML =getNHtml(questionList);

let saveAnswer:AnwserSave={
  score:0,
  //time:new Date,
  answerAndQuestion:[],
};

//let saveAnswers:any[]=[0];
//saveAnswers=[scoreNumber,question1AnswerObject,question2AnswerObject...]

const mainForm = document.querySelector("form");

function formCheck(){
    let lossQnArry=[];
    let doneQnArry=[];
    let lossQnString="";
    for(const qn of questionList){
        for(let k of Object.keys(qn.answerOption)){
          if(document.getElementById(`${qn.id}${k}`)!=null){
            if((document.getElementById(`${qn.id}${k}`) as HTMLInputElement).checked){
            doneQnArry.push(qn.id);
            }
          }
        }
    }

    for(const qn of questionList){
        if(!doneQnArry.includes(qn.id)){
            lossQnArry.push(qn.id);
            lossQnString+=qn.id+",";
        }
    }
    document.getElementById("tip-number-done").innerText=`${questionList.length-lossQnArry.length}`;
    document.getElementById("tip-number-lose").innerText=`${lossQnArry.length}`;
    
    if(lossQnString!==""){
        document.getElementById("quiz-submit").style.color=WarmingColors.RED;

    }else{
        document.getElementById("quiz-submit").style.color=WarmingColors.GREEN;
    }

}

mainForm.addEventListener("formdata",(e:any)=>{
  const userAnswer = Object.fromEntries(e.formData);

  saveAnswer.answerAndQuestion.push(userAnswer);

  for(let [k,v] of e.formData){
      let sn=0;
      let rightAnswerObj = JSON.parse(k);
      let rs=rightAnswerObj.rightAnswer.optionScore;
      let rk=rightAnswerObj.rightAnswer.optionKey;
      if(rightAnswerObj.type===QuestionType.radio){
          if(rk.includes(v)){
              sn=rs.right;
          }else{
              sn=rs.wrong;
          }
      }else{
          if(rk.includes(v)){
              sn=rs.includeEquipartition/rk.length;
          }else{
              sn=rs.notInclude;
          }
      }

      for(let qn of questionList){
          if(qn.id===rightAnswerObj.id){
              qn.score+=sn;
              if(qn.type===QuestionType.checkbox && qn.score===qn.rightAnswer.optionScore.includeEquipartition){
                  qn.score=qn.rightAnswer.optionScore.right;
              }
          }
      }
  }

  const scoreWrapper = document.getElementById("score-detail");
  scoreWrapper.innerText = "";
  const scoreTable = document.createElement("table");
  const tableThead = document.createElement("thead");
  const tableTrHead = document.createElement("tr");
  const tableThHead = document.createElement("th");
  tableThHead.innerText= "Score detail";
  tableThHead.colSpan= 3;
  tableTrHead.appendChild(tableThHead);
  tableThead.appendChild(tableTrHead);
  scoreTable.appendChild(tableThead);
  const tableTrTh = document.createElement("tr");
  const tableThQ = document.createElement("th");
  const tableThFs = document.createElement("th");
  const tableThYs = document.createElement("th");
  tableThQ.innerText="Qn";
  tableTrTh.appendChild(tableThQ);
  tableThFs.innerText="Full";
  tableTrTh.appendChild(tableThFs);
  tableThYs.innerText="Your";
  tableTrTh.appendChild(tableThYs);
  scoreTable.appendChild(tableTrTh);
  for(let qn of questionList){
    saveAnswer.score=saveAnswer.score+qn.score;
      
      const tableTrTd = document.createElement("tr");
      const tableTdQn = document.createElement("td");
      const tableTdQnS = document.createElement("td");
      const tableTdQnY = document.createElement("td");
      tableTdQn.innerText=qn.id;
      tableTrTd.appendChild(tableTdQn);
      tableTdQnS.innerText=`${qn.rightAnswer.optionScore.right}`;
      tableTrTd.appendChild(tableTdQnS);
      tableTdQnY.innerText=`${qn.score}`;
      tableTrTd.appendChild(tableTdQnY);
      scoreTable.appendChild(tableTrTd);
  }
  scoreWrapper.appendChild(scoreTable);

  document.getElementById("show-paper").style.display="none";
  document.getElementById("show-score").style.display="flex";
  document.getElementById("show-score-text").style.fontSize="2rem";
  document.getElementById("show-score-text").style.color="white";
  document.getElementById("show-score-text").innerText="Congratulations!\n All the questions has be finshed!\n your final score is";
  document.getElementById("show-score-number").style.fontSize="4rem";
  document.getElementById("show-score-number").innerText = `${saveAnswer.score}`;
})

mainForm.addEventListener("click",formCheck);

/*
const getHtmlDlContent = (product: Product): string => {
  let htmlString = '';
  htmlString += `<dt>${product.name}</dt>`;
  htmlString += `<dd>${product.size}</dd>`;

  if (product.amount != null) htmlString += `<dd>${product.amount}</dd>`;
  if (product.color) {
    htmlString += `<dd style="color:${product.color.toLowerCase()}">${
      product.color
    }</dd>`;
  }

  return htmlString;
};

const getHtml = (products: Product[]): string => {
  if (products.length < 1) {
    return '<p> empty! </p>';
  }

  return `<dl>${products.map((product) => getHtmlDlContent(product))}</dl>`;
};

app.innerHTML = getHtml(productList);
*/
