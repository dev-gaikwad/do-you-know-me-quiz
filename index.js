// var readlineSync = require("readline-sync");
// var Chalk = require("chalk");
import readlineSync from 'readline-sync';
import Chalk from 'chalk';

var score = 0;
console.log(Chalk.bgBlue("DO YOU KNOW ME?\n"));
var userName = readlineSync.question("Enter your username : ");
console.log("Welcome ", userName, "!");

function gamePlay(question, rightAnswer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === rightAnswer.toUpperCase()) {
    console.log(Chalk.green("\u2714 YAY! Correct Answer"));
    score++;
  }
  else {
    console.log(Chalk.red("\u2718 OOPS! Wrong Answer.\nCorrect answer is : ", rightAnswer));
  }

  console.log(Chalk.yellow("Score : ", score, "\n\n"));
}

var questionSet = [

  {
    question: "Which country am I from ?\n",
    answer: "India"
  },
  {
    question: "What is my favourite colour ?\n",
    answer: "Red"
  },
  {
    question: "What sport do I play ?\n",
    answer: "Badminton"
  },
  {
    question: "The only social media I use is ?\n",
    answer: "Reddit"
  },
  {
    question: "Which college did I go to ?\n",
    answer: "MIT"
  }

]

console.log(Chalk.bgGray("Rules:\n"));
console.log(Chalk.gray("Wrong spelling will be counted as wrong answer\n"));

for (var i = 0; i < questionSet.length; i++) {
  var currentQuestion = questionSet[i].question;
  gamePlay(currentQuestion, questionSet[i].answer);
}

console.log(Chalk.bgBlue("Final Score is : ", score, "/", questionSet.length));

var v = score / questionSet.length;
var percent = v * 100;
console.log(Chalk.bgYellowBright("You know me ", percent, "%"));