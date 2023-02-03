
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

"	That is a big airport.	", "	That","is","a big","airport.	",
"	Please call the ambulance.	", "	Please","call","the","ambulance.	",
"	That is a baby duck.	", "	That","is","a baby","duck.	",
"	This duck is white.	", "	This","duck","is","white.	",
"	That is a back bag.	", "	That","is","a back","bag.	",
"	My bag is blue.	", "	My","bag","is","blue.	",
"	That is a nice bicycle.	", "	That","is","a nice","bicycle.	",
"	That is a big  hospital.	", "	That","is","a big ","hospital.	",
"	I don't like hospitals.	", "	I","don't","like","hospitals.	",
"	This  is my ship.	", "	This ","is","my","ship.	",
"	I like black color.	", "	I","like","black","color.	",
"	I don't like blue color.	", "	I don't","like","blue","color.	",
"	Look! It's a blue  dolphin.	", "	Look!","It's","a blue ","dolphin.	",
"	Where is my class?	", "	Where","is","my","class?	",
"	Where is my school?	", "	Where","is","my","school?	",
"	This  is not a boy  class.	", "	This ","is not","a boy ","class.	",
"	This is not my school.	", "	This","is not","my","school.	",
"	Look! I love chips.	", "	Look!","I","love","chips.	",
"	This is not a clean bed.	", "	This","is not","a clean","bed.	",
"	Look! Do` not slip.	", "	Look!","Do`","not","slip.	",
"	I like flying bird.	", "	I","like","flying","bird.	",
"	I havw two birds.	", "	I","havw","two","birds.	",
"	We go to school.	", "	We","go","to","school.	",
"	It's not a green car.	", "	It's","not","a green","car.	",
"	I don't have a car.	", "	I","don't","have","a car.	",
"	My flag is  green.	", "	My","flag","is ","green.	",
"	Where is my hair brush?	", "	Where","is","my","hair brush?	",
"	Where is my hand miorror?	", "	Where","is","my","hand miorror?	",
"	That is my hair  brush.	", "	That","is","my hair ","brush.	",
"	It's a nice hand mirror.	", "	It's","a nice","hand","mirror.	",
"	Listen! My brother sleeps.	", "	Listen!","My","brother","sleeps.	",
"	This bus is very long.	", "	This","bus","is very","long.	",
"	Is the  school  big?	", "	Is","the ","school ","big?	",
"	Is  the  bis long?	", "	Is ","the ","bis","long?	",
"	That train is not long.	", "	That","train","is not","long.	",
"	I don't have motorbike.	", "	I","don't","have","motorbike.	",
"	I jump with my partners.	", "	I","jump","with","my partners.	",
"	Where is the police car?	", "	Where","is","the police","car?	",
"	Is this a police car?	", "	Is","this","a police","car?	",
"	Is this my school?	", "	Is","this","my","school?	",
"	Where is my blue book?	", "	Where","is","my","blue book?	",
"	I can read a book.	", "	I","can","read","a book.	",
"	Stop at red  light!	", "	Stop","at","red ","light!	",
"	Wher is the red truck?	", "	Wher","is","the","red truck?	",
"	Wher is my school bus?	", "	Wher","is","my","school bus?	",
"	I like my school teacher.	", "	I","like","my","school teacher.	",
"	I don't like small dogs.	", "	I","don't","like","small dogs.	",
"	Ca you go to  school?	", "	Ca","you","go to ","school?	",
"	Can you read a book?	", "	Can","you","read","a book?	",
"	Can you say opposittes?	", "	Can","you","say","opposittes?	",
"	Do you have a cat?	", "	Do","you","have","a cat?	",
"	Do you have a book?	", "	Do","you","have","a book?	",
"	I love small plants.	", "	I","love","small","plants.	",
"	I like the space station.	", "	I","like the","space","station.	",
"	Please, you stop here.	", "	Please,","you","stop","here.	",
"	My sun glasses are black.	", "	My","sun glasses","are","black.	",
"	This  is not my toothbrush.	", "	This ","is not","my","toothbrush.	",
"	The  train station is big.	", "	The ","train","station","is big.	",
"	This  is a wall clock.	", "	This ","is","a wall","clock.	",
"	This  airplane is white.	", "	This ","airplane","is","white.	",
"	My glass is red.	", "	My","glass","is","red.	",
"	My plate is white.	", "	My","plate","is","white.	",
"	I like white sheep.	", "	I","like","white","sheep.	",
"	Please call  a taxi now.	", "	Please","call ","a taxi","now.	",
"	Pleae give me some cheese.	", "	Pleae","give me","some","cheese.	",
"	Do you ike cheese?	", "	Do","you","ike","cheese?	",

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