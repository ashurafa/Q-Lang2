
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U1 Words: 66

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 66 ; 
//=========================================


var NumA=  5* (Math.floor(Math.random() * Words))+1;
var Words= [
"Keep like this.",


//=========================================

"	This  is  my  house.	", "	This ","is ","my ","house.	",
"	This  is  talk  time.	", "	This ","is"," talk ","time.	",
"	Welcome to  our  house.	", "	Welcome","to ","our ","house.	",
"	Please,  listen  and  point.	", "	Please, ","listen ","and ","point.	",
"	I’ll  show  you around.	", "	I’ll ","show ","you","around.	",
"	This  is the living  room.	", "	This ","is","the living ","room.	",
"	Practice the talks  in  pairs.	", "	Practice","the talks ","in ","pairs.	",
"	This is Fun  Time.	", "	This","is","Fun ","Time.	",
"	This is an old  house.	", "	This","is","an old ","house.	",
"	Where is the living  room?	", "	Where","is","the living ","room?	",
"	Where is your  bathroom?	", "	Where","is","your ","bathroom?	",
"	This is a big bedroom	", "	This","is","a big","bedroom	",
"	This is a clean kitchen	", "	This","is","a clean","kitchen	",
"	This is the dining  room.	", "	This","is","the dining ","room.	",
"	Where is the front door?	", "	Where","is","the front","door?	",
"	I  found the dining room.	", "	I ","found","the dining","room.	",
"	See.  Here it is!	", "	See. ","Here","it","is!	",
"	She talks  about  your house.	", "	She","talks ","about ","your house.	",
"	I talk about  my house.	", "	I","talk","about ","my house.	",
"	Where is my partner.	", "	Where","is","my","partner.	",
"	Are you my  partner?	", "	Are","you","my ","partner?	",
"	Who is my  partner?	", "	Who","is","my ","partner?	",
"	Show me  around  the house.	", "	Show me ","around ","the","house.	",
"	I like  listening  to  my teacher	", "	I like ","listening ","to ","my teacher	",
"	Where  is the  boy?	", "	Where ","is","the ","boy?	",
"	Write the  missing letters.	", "	Write","the ","missing","letters.	",
"	I  don't like frogs.	", "	I ","don't","like","frogs.	",
"	This  is your present.	", "	This ","is","your","present.	",
"	Do  you like fries?	", "	Do ","you","like","fries?	",
"	This is your  prize.	", "	This","is","your ","prize.	",
"	Don't  forget to  repeat.	", "	Don't ","forget","to ","repeat.	",
"	Where  is my  dad?	", "	Where ","is","my ","dad?	",
"	He is in  the bathroom.	", "	He","is","in ","the bathroom.	",
"	My teacher, Hurry  up!	", "	My","teacher,","Hurry ","up!	",
"	The mouse is  on  the  chair.	", "	The mouse is ","on ","the ","chair.	",
"	The mouse is  in the  room.	", "	The mouse is ","in","the ","room.	",
"	The cat is  under the  bed.	", "	The cat is ","under","the ","bed.	",
"	The book is  next to  the  fridge.	", "	The book is ","next to ","the ","fridge.	",
"	Hassan is  behind  the  table.	", "	Hassan is ","behind ","the ","table.	",
"	Mam,  see  the  cloud.	", "	Mam, ","see ","the ","cloud.	",
"	My  house is big.	", "	My ","house","is","big.	",
"	Where is the  mountain?	", "	Where","is","the ","mountain?	",
"	I  have  two . hands	", "	I ","have"," two .","hands	",
"	The book  is  inside the box.	", "	The book ","is ","inside","the box.	",
"	The  sun is  hot.	", "	The ","sun","is"," hot.	",
"	Would  you like to  come in?	", "	Would ","you","like to"," come in?	",
"	I’ll  show you around.	", "	I’ll ","show","you","around.	",
"	This is the living  room.	", "	This","is","the living ","room.	",
"	This is our class?	", "	This","is","our","class?	",
"	Water is in  the  bathroom?	", "	Water is","in ","the ","bathroom?	",
"	Mum is  in  the kitchen.	", "	Mum is ","in ","the","kitchen.	",
"	This is  not a big  chair.	", "	This is ","not","a big ","chair.	",
"	This is  not a clean  table.	", "	This is ","not","a clean ","table.	",
"	Can you  play  with  me?	", "	Can you ","play ","with ","me?	",
"	I  love my family.	", "	I ","love","my","family.	",
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