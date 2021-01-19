var readLineSync =require("readline-sync");
const chalk = require("chalk");
var score = 0;
var userAnswer = readLineSync.question(chalk.blue.bold("What is your name?? "));

console.log(chalk.green("welcome " + chalk.underline(userAnswer) + "!!"));
console.log("                                    ");
console.log(chalk.bgBlue.white.bold("so" +" " + chalk.green.underline(userAnswer) +" " + "we are here to check how well you know me??"  ));
console.log("                                     ");
console.log(chalk.bgBlue.white.bold("then let's go!!"));
console.log("                                     ");


function play(question , answer)
{
  var userA = readLineSync.question(chalk.red.bold(question));
  if (userA === answer ) {
    console.log("                                     ");
    console.log(chalk.green.bold("you are right"));
    score = score + 1;
   
  } else {
    console.log("                                     ");
    console.log(chalk.blue.bold("wrong answer"));
 
  }
  console.log("                                     ");
  console.log("your score is : " + chalk.bgGreen.blue.underline.bold(score));
console.log("                                     ");
}


var questions = [{
  question: "Q1 what was my weight range in 2019?? a) 70 to 80kg    b) 80 to 90kg   c) 90 to 100kg    d) 100 to 110kg ", 
  answer: "c"  } ,
{
  question: "Q2 what was my weight range in 2020?? a) 70 to 80kg    b) 80 to 90kg   c) 90 to 100kg    d) 60 to 70kg ", 
  answer: "d"  } ,
{
  question: "Q3 what i like the most?? a) movies    b)poetry   c) songs    d) video game ", 
  answer: "b"  } , {
  question: "Q4 what i love the most?? a) circket    b) gyming   c) sycling    d) video games ", 
  answer: "b"  }];


for (var i=0; i<questions.length; i++) 
{
var list = questions[i];

play(list.question , list.answer)

}
console.log("                                    ");
console.log("                                    ");
console.log("                                    ");
 console.log(chalk.bgBlue.white.bold("your final score is: " + chalk.underline(score)));