(()=>{"use strict";var e={950:(e,i,n)=>{n.r(i)},591:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Colors=void 0,function(e){e.RED="RED",e.BLUE="BLUE",e.BLACK="BLACK",e.GREEN="GREEN",e.ORANGE="ORANGE"}(i.Colors||(i.Colors={}))},523:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.OptionKey=void 0,function(e){e.a="a",e.b="b",e.c="c",e.d="d",e.e="e",e.f="f",e.g="g",e.h="h",e.i="i",e.j="j",e.k="k",e.l="l",e.m="m"}(i.OptionKey||(i.OptionKey={}))},635:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.QuestionType=void 0,function(e){e.radio="radio",e.checkbox="cheeckbox"}(i.QuestionType||(i.QuestionType={}))},685:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Sizes=void 0,function(e){e.XS="XS",e.S="S",e.M="M",e.L="L",e.XL="XL"}(i.Sizes||(i.Sizes={}))}},i={};function n(o){var t=i[o];if(void 0!==t)return t.exports;var r=i[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{var e=n(591),i=n(685);n(950);var o,t=n(523),r=n(635),a=document.querySelector("#app"),s=[{id:"Q1",question:"Which of the following is not JavaScript Data Types?",answerOption:{a:"Undefined",b:"Number",c:"Boolean",d:"Float"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.d],optionValue:["Float"]},type:r.QuestionType.radio,score:0},{id:"Q2",question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",answerOption:{a:"The User’s machine running a Web browser",b:"The Web server",c:"A central machine deep within Netscape’s corporate offices",d:"None of the above"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.a],optionValue:["The User’s machine running a Web browser"]},type:r.QuestionType.radio,score:0},{id:"Q3",question:"Inside which HTML element do we put the JavaScript?",answerOption:{a:"<js>",b:"<scripting>",c:"<script>",d:"<javascript>"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.c],optionValue:["<script>"]},type:r.QuestionType.radio,score:0},{id:"Q4",question:"Which is the correct way to write a JavaScript array?",answerOption:{a:"var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",b:"var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",c:"var txt = new Array(“tim”,”kim”,”jim”)",d:"var txt = new Array=”tim”,”kim”,”jim”"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.c],optionValue:["var txt = new Array(“tim”,”kim”,”jim”)"]},type:r.QuestionType.radio,score:0},{id:"Q5",question:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",answerOption:{a:"onfocus",b:"onblur",c:"onclick",d:"ondblclick"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.b],optionValue:["onblur"]},type:r.QuestionType.radio,score:0},{id:"Q6",question:"Which of the following is the structure of an if statement?",answerOption:{a:"if (conditional expression is true) thenexecute this codeend if",b:"if (conditional expression is true)execute this codeend if",c:"if (conditional expression is true) {then execute this code>->}",d:"if (conditional expression is true) then {execute this code}"},rightAnswer:{optionScore:{right:10,wrong:-5,includeEquipartition:0,min:0,notInclude:0},optionScoreRule:"答对 10分，答错 -5 分 扣分",optionKey:[t.OptionKey.c],optionValue:["if (conditional expression is true) {then execute this code>->}"]},type:r.QuestionType.radio,score:0},{id:"Q7",question:"What are JavaScript primitive data types:",answerOption:{a:"string",b:"immutable",c:"number",d:"bigint",e:"object",f:"Array",g:"Set",h:"Map",i:"Function",j:"Date",k:"boolean",l:"undefined",m:"symbol"},rightAnswer:{optionScore:{right:20,wrong:0,includeEquipartition:15,min:-30,notInclude:-10},optionScoreRule:"全对 20 分；选错 一个 -10 扣分（错误数 * -10）；最多扣 30分 （-30）；答对单个题分数为： 15 / 对的选项数量 全对 + 5分 （全对 20分）",optionKey:[t.OptionKey.a,t.OptionKey.c,t.OptionKey.d,t.OptionKey.k,t.OptionKey.l,t.OptionKey.m],optionValue:["string","number","bigint","boolean","undefined","symbol"]},type:r.QuestionType.checkbox,score:0}],c=[{name:"Orange Juice",size:i.Sizes.M,color:e.Colors.ORANGE,amount:2},{name:"Apple",size:i.Sizes.L,color:e.Colors.GREEN},{name:"Apple juice",size:i.Sizes.M,color:e.Colors.BLUE,amount:3}],u=function(e){var i,n,o="";return o+='\n  <div class="question-and-answer">\n    <div class="question-zone">\n      <div class="question-number">\n        '+e.id+'\n      </div>\n      <div class="question-content">\n        '+e.question+'\n      </div>\n    </div>\n    <div class="answer-zone">\n      '+(i=e.answerOption,n="",(n+="\n    "+Object.keys(i).map((function(i){return function(i){var n="";return n+'\n    <div class="answers">\n      <input type="'+r.QuestionType+'" id="'+(e.id+t.OptionKey)+'" value="'+t.OptionKey+'>\n      <label for="'+(e.id+t.OptionKey)+'">\n        '+i+"\n      </label>\n    </div>"}(i)})))+"\n    </div>\n  </div>")};a.innerHTML=(o="",o+='\n    <div>\n      <h1>Quiz : test your web knowledge</h1>\n    </div>\n\n    <form action>\n      <div id="main-paper">'+s.map((function(e){return u(e)}))+'</div>\n    </form>\n\n    <div id="show-score">\n      <div id="show-score-text">\n        your score:\n      </div>\n      <div id="show-score-number">\n        0\n      </div>\n      <div id="score-detail">\n        0\n      </div>\n    </div>');var d;a.innerHTML=(d=c).length<1?"<p> empty! </p>":"<dl>"+d.map((function(e){return function(e){var i="";return i+="<dt>"+e.name+"</dt>",i+="<dd>"+e.size+"</dd>",null!=e.amount&&(i+="<dd>"+e.amount+"</dd>"),e.color&&(i+='<dd style="color:'+e.color.toLowerCase()+'">'+e.color+"</dd>"),i}(e)}))+"</dl>"})()})();
//# sourceMappingURL=main.e2529ce2da7eaee1901b.js.map