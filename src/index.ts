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
        A:"Undefined",
        B:"Number",
        C:"Boolean",
        D:"Float",
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
        optionKey:[OptionKey.D],
        optionValue:["Float"],
    },
    type:QuestionType.Radio,
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
