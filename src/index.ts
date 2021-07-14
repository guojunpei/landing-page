import { Colors } from './enums/colors';
import { Sizes } from './enums/sizes';
import { Product } from './types/product';
import './styles/main.scss';

import { OptionKey } from './enums/optionKey';
import { QuestionType } from './enums/questionType';
import { Question } from './types/question';


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

const getHtmlContent = (question: Question): string =>{
  let htmlAnswerString = '';
  htmlAnswerString += `
  <div class="answers">
    <input type="${question.type}">
      
    </div>
  </div>`;

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
      ${htmlAnswerString}
    </div>
  </div>`;
  
  return htmlQuestionString;
}

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
