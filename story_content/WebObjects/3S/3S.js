
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U1 Words: 47

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 47 ; 
//=========================================


var NumA=  5* (Math.floor(Math.random() * Words))+1;
var Words= [
"Keep like this.",


//=========================================

"	My  Day, Animals,  Places	", "	My ","Day,","Animals, ","Places	",
"	It is funny talk  time.	", "	It is","funny","talk ","time.	",
"	Qamar, listen  and  say.	", "	Qamar,","listen ","and ","say.	",
"	I  play with  my friends.	", "	I ","play","with ","my friends.	",
"	Do you  play  with  your friends?	", "	Do you ","play ","with ","your friends?	",
"	What time is it now?	", "	What","time","is it","now?	",
"	I  get up at 6  o’clock.	", "	I ","get up","at 6 ","o’clock.	",
"	Tell  me about  your day?	", "	Tell ","me","about ","your day?	",
"	What time  do you  eat lunch?	", "	What time ","do you ","eat","lunch?	",
"	Do you  watch TV  in the evening?	", "	Do you ","watch","TV ","in the evening?	",
"	I watch TV everyday.	", "	I","watch","TV","everyday.	",
"	I get up  at 6  o’clock!	", "	I","get up ","at 6 ","o’clock!	",
"	It can  walk  and  swim.	", "	It can ","walk ","and ","swim.	",
"	My  sister can walk.	", "	My ","sister","can","walk.	",
"	Let's  eat some food.	", "	Let's ","eat","some","food.	",
"	Their  color is white.	", "	Their ","color","is","white.	",
"	Their  skin is green.	", "	Their ","skin","is","green.	",
"	They can  jump  and  dive.	", "	They can ","jump ","and ","dive.	",
"	It’s  sunny and  very hot	", "	It’s ","sunny","and ","very hot	",
"	Does he  work in an office?	", "	Does he ","work","in","an office?	",
"	it is not  rainey, it is snowy.	", "	it is not ","rainey,","it is","snowy.	",
"	Do you like snow?	", "	Do","you","like","snow?	",
"	Qamar, do you  like rain?	", "	Qamar,","do you ","like","rain?	",
"	Do you like winter?	", "	Do","you","like","winter?	",
"	I don't like winter.	", "	I","don't","like","winter.	",
"	What do you do?	", "	What","do","you","do?	",
"	She likes white clouds.	", "	She","likes","white","clouds.	",
"	It's cloudy  in the winter.	", "	It's","cloudy ","in","the winter.	",
"	It's  sunny  and  hot.	", "	It's ","sunny ","and ","hot.	",
"	What   does  he  do?	", "	What "," does ","he ","do?	",
"	She is a school teacher.	", "	She","is","a school","teacher.	",
"	He is not a businessman.	", "	He","is","not","a businessman.	",
"	She has  long,  brown  hair.	", "	She has ","long, ","brown ","hair.	",
"	He is wearing a thobe.	", "	He","is","wearing","a thobe.	",
"	I  read about  bread.	", "	I ","read","about ","bread.	",
"	I  like sheep meat.	", "	I ","like","sheep","meat.	",
"	Look  at this  picture.	", "	Look ","at","this ","picture.	",
"	It is a small tooth.	", "	It","is","a small","tooth.	",
"	My teeth are not clean.	", "	My","teeth","are not","clean.	",
"	They are clean teeth.	", "	They","are","clean","teeth.	",
"	My house is next to school.	", "	My house","is","next to","school.	",
"	The mall  is  after the park.	", "	The mall ","is ","after","the park.	",
"	There‘s  a rug  behind  the bed.	", "	There‘s ","a rug ","behind ","the bed.	",
"	I love my town.	", "	I","love","my","town.	",
"	I like this  picture.	", "	I","like","this ","picture.	",
"	This is my bed.	", "	This","is","my","bed.	",
"	This is  a green rug.	", "	This","is ","a green","rug.	",


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