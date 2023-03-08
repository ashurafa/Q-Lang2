
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U1 Words: 53

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 53 ; 
//=========================================


var NumA=  5* (Math.floor(Math.random() * Words))+1;
var Words= [
"Keep like this.",


//=========================================

"	These are  your  toys.	", "	These","are ","your ","toys.	",
"	These  are my  things.	", "	These ","are","my ","things.	",
"	This  is  talk  time.	", "	This ","is ","talk ","time.	",
"	Can I  have  some  candy?	", "	Can I ","have ","some ","candy?	",
"	These  are 12 girls.	", "	These ","are","12","girls.	",
"	How  many are  there?	", "	How ","many","are ","there?	",
"	Let  us count . them.	", "	Let ","us","count .","them.	",
"	That's a lot of candy.	", "	That's","a lot","of","candy.	",
"	Please, practice  the  talk.	", "	Please,","practice ","the ","talk.	",
"	Qamar,  are  you ready?	", "	Qamar, ","are ","you","ready?	",
"	Yes,  we . are ready	", "	Yes, ","we .","are","ready	",
"	Yes,  I  am ready.	", "	Yes, ","I ","am","ready.	",
"	Count  from 1 to  30	", "	Count ","from 1","to ","30	",
"	Count from 10 to 20.	", "	Count","from","10","to 20.	",
"	Pens  are  on  my desk.	", "	Pens ","are ","on ","my desk.	",
"	Please give  your  pencils.	", "	Please","give ","your ","pencils.	",
"	Is   this a red  paper?	", "	Is  ","this","a red ","paper?	",
"	Please take  the  glue.	", "	Please","take ","the ","glue.	",
"	Please  give  me glue.	", "	Please ","give ","me","glue.	",
"	Please  give  me erasers.	", "	Please ","give ","me","erasers.	",
"	I  don't have any erasers.	", "	I ","don't","have","any erasers.	",
"	Do  you have candy?	", "	Do ","you","have","candy?	",
"	Do  you  like candy?	", "	Do ","you"," like","candy?	",
"	This candy is for  you.	", "	This candy","is","for ","you.	",
"	Is  this candy for you?	", "	Is ","this candy","for","you?	",
"	Is  this candy for  me?	", "	Is ","this candy","for ","me?	",
"	This  candy is for me	", "	This ","candy is","for","me	",
"	His smile is cute.	", "	His","smile","is","cute.	",
"	Can I  use your chair?	", "	Can I ","use","your","chair?	",
"	This is my  chair.	", "	This","is","my ","chair.	",
"	You can  use my  pen.	", "	You can ","use","my ","pen.	",
"	This is my pen.	", "	This","is","my","pen.	",
"	Can I  use your  book?	", "	Can I ","use","your ","book?	",
"	You can  use  my  computer.	", "	You can ","use ","my ","computer.	",
"	It  is a comic book.	", "	It ","is","a comic","book.	",
"	They  are comic books.	", "	They ","are","comic","books.	",
"	Is  this a hand  watch?	", "	Is ","this","a hand ","watch?	",
"	This is a hand  watch.	", "	This","is","a hand ","watch.	",
"	These  are hand  watches.	", "	These ","are","hand ","watches.	",
"	What  are these  toys?	", "	What ","are","these ","toys?	",
"	What  is this  toy?	", "	What ","is","this ","toy?	",
"	I  don't like candy.	", "	I ","don't","like","candy.	",
"	I  don't like spiders.	", "	I ","don't","like","spiders.	",
"	I like my red sweater.	", "	I like","my","red","sweater.	",
"	This is a fat  cat.	", "	This","is","a fat ","cat.	",
"	Say  the  missing numbers.	", "	Say ","the ","missing","numbers.	",
"	What  is the missing  number?	", "	What ","is","the missing ","number?	",
"	You  read the story.	", "	You ","read","the","story.	",
"	Count from 40  to 100	", "	Count","from 40 ","to","100	",
"	I  can count numbers	", "	I ","can","count","numbers	",
"	I  can read words	", "	I ","can","read","words	",
"	Can  you count  numbers?	", "	Can ","you","count ","numbers?	",
"	Can  you read  words?	", "	Can ","you","read ","words?	",


//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var WordA = Words[NumA+1];
var WordQ = Words[NumA];
var WordA1 = Words[NumA+2];
var WordA2 = Words[NumA+3];
var WordA3 = Words[NumA+4];


// Setting values to SL
player.SetVar("WordQ",WordQ);
player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
			
}


// Code to say the English word in the Question
var Say =function(){
// var MyText = "What is the meaning of?" + WordQ ;	 

var player = GetPlayer();
var WordQ = player.GetVar("WordQ");

var MyText = WordQ ;	 

		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 
// Code to say WordQ the English word in the Question
var SayQ =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordQ");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
// Code to say WordQ1 the English word in the Question
var SayQ1 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordQ1");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 // Code to say WordQ2 the English word in the Question
var SayQ2 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordQ2");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 // Code to say WordQ3 the English word in the Question
var SayQ3 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordQ3");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 // Code to say WordQ4 the English word in the Question
var SayQ4 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordQ4");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 
  // Code to say WordQ4 the English word in the Question
var SayA =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
  // Code to say WordQ4 the English word in the Question
var SayA1 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA1");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
  // Code to say WordQ4 the English word in the Question
var SayA2 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA2");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
  // Code to say WordQ4 the English word in the Question
var SayA3 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA3");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }