
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 88 ; 
//=========================================


var NumA=  5* (Math.floor(Math.random() * Words))+1;
var Words= [
"Keep like this.",


//=========================================

"	Good morning my teacher.	", "	Good","morning","my","teacher.	",
"	Where is  my teacher?	", "	Where","is ","my","teacher?	",
"	My Mum can't come.	", "	My","Mum","can't","come.	",
"	He's helping his brother.	", "	He's","helping","his","brother.	",
"	Nice to meet you.	", "	Nice","to","meet","you.	",
"	This is my friend.	", "	This","is","my","friend.	",
"	Let's go to the store.	", "	Let's","go to","the","store.	",
"	This is a new computer.	", "	This","is","a new","computer.	",
"	Practice and  talk with me.	", "	Practice","and ","talk","with me.	",
"	My group is  good.	", "	My","group","is ","good.	",
"	Good moning to you.	", "	Good","moning","to","you.	",
"	Teacher,  how are you?	", "	Teacher, ","how","are","you?	",
"	Nice to see you.	", "	Nice","to","see","you.	",
"	Good afternoon to you.	", "	Good","afternoon","to","you.	",
"	Here is my homework.	", "	Here","is","my","homework.	",
"	Here is my class.	", "	Here","is","my","class.	",
"	It's bedtime for you.	", "	It's","bedtime","for","you.	",
"	Let's go to school!	", "	Let's","go","to","school!	",
"	Let's have my lunch.	", "	Let's","have","my","lunch.	",
"	Let's go to bed.	", "	Let's","go","to","bed.	",
"	This is my friend.	", "	This","is","my","friend.	",
"	We're playing, we're cycling.	", "	We're","playing,","we're","cycling.	",
"	Our friends are here.	", "	Our","friends","are","here.	",
"	Our friends are laughing.	", "	Our","friends","are","laughing.	",
"	My friends are cycling.	", "	My","friends","are","cycling.	",
"	My friends are jumping.	", "	My","friends","are","jumping.	",
"	As happy as can be.	", "	As happy","as","can","be.	",
"	There  is  my  dad.	", "	There ","is ","my ","dad.	",
"	My dad is  walking.	", "	My","dad","is ","walking.	",
"	We are not playing.	", "	We","are","not","playing.	",
"	We are not walking.	", "	We","are","not","walking.	",
"	We are not cycling.	", "	We","are","not","cycling.	",
"	Where is my class?	", "	Where","is","my","class?	",
"	Where is he sitting?	", "	Where","is","he","sitting?	",
"	Where is my teacher?	", "	Where","is","my","teacher?	",
"	Where is my friend?	", "	Where","is","my","friend?	",
"	Where is my cookies?	", "	Where","is","my","cookies?	",
"	Where is my chips?	", "	Where","is","my","chips?	",
"	I'm in the classroom.	", "	I'm","in","the","classroom.	",
"	Dad in his room.	", "	Dad","in","his","room.	",
"	My apples are sweet.	", "	My","apples","are","sweet.	",
"	My lemons are sour.	", "	My","lemons","are","sour.	",
"	My cherries are sweet.	", "	My","cherries","are","sweet.	",
"	Cherries are not sour.	", "	Cherries","are","not","sour.	",
"	My ice-cream is cold.	", "	My","ice-cream","is","cold.	",
"	My soup is hot.	", "	My","soup","is","hot.	",
"	My rice is hot.	", "	My","rice","is","hot.	",
"	Mam, Let's eat ice-cream.	", "	Mam,","Let's","eat","ice-cream.	",
"	Is it cold or hot?	", "	Is it","cold","or","hot?	",
"	Is it green or red?	", "	Is it","green","or","red?	",
"	Is it girl or boy?	", "	Is it","girl","or","boy?	",
"	Is it sweet or sour?	", "	Is it","sweet","or","sour?	",
"	Is it big or small?	", "	Is it","big","or","small?	",
"	Is it long or short?	", "	Is it","long","or","short?	",
"	I don't like lemons.	", "	I","don't","like","lemons.	",
"	I don't like ice-cream.	", "	I","don't","like","ice-cream.	",
"	I don't like cherries.	", "	I","don't","like","cherries.	",
"	Please,  ask three questions.	", "	Please, ","ask","three","questions.	",
"	Play with a friend.	", "	Play","with","a","friend.	",
"	I talk about food.	", "	I","talk","about","food.	",
"	I can ask questions.	", "	I","can","ask","questions.	",
"	Listen check  and say.	", "	Listen","check"," and","say.	",
"	What's in your bag?	", "	What's","in","your","bag?	",
"	Do you have apples?	", "	Do","you","have","apples?	",
"	Do you have oranges?	", "	Do","you","have","oranges?	",
"	Do you have food?	", "	Do","you","have","food?	",
"	Do you have a bag?	", "	Do","you","have","a bag?	",
"	Do you have books?	", "	Do","you","have","books?	",
"	Listen point and say.	", "	Listen","point","and","say.	",
"	I'm sorry I don’t have.	", "	I'm","sorry","I don’t","have.	",
"	My brother has sandwiches.	", "	My","brother","has","sandwiches.	",
"	I like orange juice.	", "	I","like","orange","juice.	",
"	Please, ask your friend	", "	Please,","ask","your","friend	",
"	She doesn't have apples.	", "	She","doesn't","have","apples.	",
"	Whose hat is that?	", "	Whose","hat","is","that?	",
"	Whose book is that?	", "	Whose","book","is","that?	",
"	Whose iPad is that?	", "	Whose","iPad","is","that?	",
"	Pleaase ask and answer.	", "	Pleaase","ask","and","answer.	",
"	My brother can't come.	", "	My","brother","can't","come.	",
"	She's helping her brother.	", "	She's","helping","her","brother.	",
"	It is bath time.	", "	It","is","bath","time.	",
"	Please, go to school.	", "	Please,","go","to","school.	",
"	I cannot eat Iunch.	", "	I","cannot","eat","Iunch.	",
"	You cannot watch TV.	", "	You","cannot","watch","TV.	",
"	They are not sitting.	", "	They","are","not","sitting.	",
"	They are not writing.	", "	They","are","not","writing.	",
"	I am not cycling.	", "	I","am","not","cycling.	",
"	Please, write about food.	", "	Please,","write","about","food.	",


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