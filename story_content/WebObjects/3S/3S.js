
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U3 S

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================

//=========================================



var Words= [
"Keep like this.",


//=========================================

"	This  is  a black circle.	", "	This ","is ","a black","circle.	",
"	This  is  a blue circle.	", "	This ","is ","a blue","circle.	",
"	That  is  a brone circle.	", "	That ","is ","a brone","circle.	",
"	This  is  a small book.	", "	This ","is ","a small","book.	",
"	Please give me a book.	", "	Please","give","me a","book.	",
"	It's big  brown circle.	", "	It's","big"," brown","circle.	",
"	These  are three triangles.	", "	These ","are","three","triangles.	",
"	These  are four squares.	", "	These ","are","four","squares.	",
"	These  are four circles.	", "	These ","are","four","circles.	",
"	I like my boot.	", "	I","like","my","boot.	",
"	This  is  my  small boot.	", "	This ","is ","my  small","boot.	",
"	I don't like bread.	", "	I","don't","like","bread.	",
"	That is my bus.	", "	That","is","my","bus.	",
"	These  are  small chimpanzees.	", "	These ","are ","small","chimpanzees.	",
"	These  are  small crocodiles.	", "	These ","are ","small","crocodiles.	",
"	That is my cup.	", "	That","is","my","cup.	",
"	These are  nice dresses.	", "	These","are ","nice","dresses.	",
"	I like my dresses.	", "	I","like","my","dresses.	",
"	No, it's a small duck.	", "	No,","it's","a small","duck.	",
"	Yes,  it's a small elephant.	", "	Yes, ","it's","a small","elephant.	",
"	Sorry, I don't want food.	", "	Sorry,","I don't","want","food.	",
"	Please clean your foot.	", "	Please","clean","your","foot.	",
"	Look!  It's a small fox.	", "	Look! ","It's","a small","fox.	",
"	My head is big.	", "	My","head","is","big.	",
"	These  are four hippos.	", "	These ","are","four","hippos.	",
"	That is  an ugly lion.	", "	That","is ","an ugly","lion.	",
"	You are  not a lion.	", "	You","are ","not a","lion.	",
"	Sorry, I don't want meat.	", "	Sorry,","I don't","want","meat.	",
"	You are  not a monkey.	", "	You","are ","not a","monkey.	",
"	It is  a full moon.	", "	It","is ","a full","moon.	",
"	Look!  It's a big octopus.	", "	Look! ","It's","a big","octopus.	",
"	Yes,  I  can read.	", "	Yes, ","I ","can","read.	",
"	Yes,  I  can write.	", "	Yes, ","I ","can","write.	",
"	Look!  It's a big rope.	", "	Look! ","It's","a big","rope.	",
"	Look!  It's a black snake.	", "	Look! ","It's","a black","snake.	",
"	Look!  It's a small tiger.	", "	Look! ","It's","a small","tiger.	",
"	These  are four zebras.	", "	These ","are","four","zebras.	",
"	I love wild  animals.	", "	I","love","wild ","animals.	",
"	These  monkeys   are cute.	", "	These ","monkeys  ","are","cute.	",
"	Where is  the  octopus?	", "	Where","is ","the ","octopus?	",
"	Where is  the  rope?	", "	Where","is ","the ","rope?	",
"	Where is  the  moon?	", "	Where","is ","the ","moon?	",
"	Where is  the  bread?	", "	Where","is ","the ","bread?	",
"	Where is  the  circle?	", "	Where","is ","the ","circle?	",
"	Practice  the  talks  in pairs.	", "	Practice ","the"," talks"," in pairs.	",
"	Listen  to  the  teacher.	", "	Listen ","to"," the"," teacher.	",
"	Where is your heaa?	", "	Where","is","your","heaa?	",
"	Where is your nose?	", "	Where","is","your","nose?	",
"	Listen,  say,  and  match.	", "	Listen,"," say, ","and"," match.	",
"	What  Animal  Is  This?	", "	What ","Animal ","Is"," This?	",
"	Listen,  point,  and  say.	", "	Listen,"," point, ","and ","say.	",
"	Zebras are  black  and  white.	", "	Zebras are ","black"," and"," white.	",
"	Chimpanzees  have  long  arms.	", "	Chimpanzees ","have"," long ","arms.	",
"	listen , point , and  match pictures.	", "	listen",", point",", and ","match pictures.	",


//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var length= Words.length;



var NumA=  5* (Math.floor(Math.random() * length/5))+1;


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