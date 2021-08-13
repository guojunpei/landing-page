let question=
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
        optionKey:["d"],
        optionValue:["Float"],
    },
    type:"radio",
    score:0,
}

const getAnswerContent = (answerKey, answerValue) => {
    let htmlAnswerString = "";
    htmlAnswerString += `
    <div class="answers">
      <input type="${question.type}" id="${question.id + answerKey}" value="${answerKey}" name="question${question.id}">
      <label for="${question.id + answerKey}">
      ${answerKey.toUpperCase()}:${answerValue}
      </label>
    </div>
    `;
    return htmlAnswerString;
};

const getAnswersContent = (answers) => {
    let htmlAnswersString = "";
    htmlAnswersString += `
    ${Object.entries(answers).map((li) => getAnswerContent(li[0], li[1]))}
    `;
    return htmlAnswersString;
};

getAnswersContent(question.answerOption)

//"\n    \n    <div class=\"answers\">\n      <input type=\"radio\" id=\"Q1a\" value=\"a\" name=\"questionQ1\">\n      <label for=\"Q1a\">\n      A:Undefined\n      </label>\n    </div>\n    ,\n    <div class=\"answers\">\n      <input type=\"radio\" id=\"Q1b\" value=\"b\" name=\"questionQ1\">\n      <label for=\"Q1b\">\n      B:Number\n      </label>\n    </div>\n    ,\n    <div class=\"answers\">\n      <input type=\"radio\" id=\"Q1c\" value=\"c\" name=\"questionQ1\">\n      <label for=\"Q1c\">\n      C:Boolean\n      </label>\n    </div>\n    ,\n    <div class=\"answers\">\n      <input type=\"radio\" id=\"Q1d\" value=\"d\" name=\"questionQ1\">\n      <label for=\"Q1d\">\n      D:Float\n      </label>\n    </div>\n    \n    "

Object.entries(question.answerOption)
//[["a", "Undefined"], ["b", "Number"], ["c", "Boolean"],["d", "Float"]]

Object.entries(question.answerOption).map((li) => {console.log(li[0]);console.log(li[1])})
//
/*
a
Undefined
b
Number
c
Boolean
d
Float
*/

getAnswerContent("a","Undefined")
//"\n    <div class=\"answers\">\n      <input type=\"radio\" id=\"Q1a\" value=\"a\" name=\"questionQ1\">\n      <label for=\"Q1a\">\n      A:Undefined\n      </label>\n    </div>\n    "