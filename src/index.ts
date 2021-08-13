import { getNHtml } from './utils';
import { questionList } from './constants/questions';
import './styles/main.scss';

const app = document.querySelector('#app');

app.innerHTML = getNHtml(questionList);
