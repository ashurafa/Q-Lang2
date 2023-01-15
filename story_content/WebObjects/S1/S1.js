
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U1 Words: 72

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;
// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 72 ; 
//=========================================


var NumA=  5* (Math.floor(Math.random() * Words))+1;
var Words= [
"Keep like this.",


//=========================================

"	Look! It's a plastic bag!	", "	Look!","It's","a plastic","bag!	",
"	Look! It's a snake!	", "	Look!","It's","a","snake!	",
"	It is very beautiful!	", "	It","is","very","beautiful!	",
"	No, it's very long!	", "	No,","it's","very","long!	",
"	Practice, act and  talk.	", "	Practice,","act","and ","talk.	",
"	Show me the snake.	", "	Show","me","the","snake.	",
"	No, it's a long bag.	", "	No,","it's","a long","bag.	",
"	Yes, she's a long girl.	", "	Yes,","she's","a long","girl.	",
"	Yes, she's a short girl.	", "	Yes,","she's","a short","girl.	",
"	Yes, he's a long boy.	", "	Yes,","he's","a long","boy.	",
"	Yes, he's a short boy.	", "	Yes,","he's","a short","boy.	",
"	Listen, point, and say.	", "	Listen,","point,","and","say.	",
"	Show me the girl.	", "	Show","me","the","girl.	",
"	Show me the bag.	", "	Show","me","the","bag.	",
"	Show me the boy.	", "	Show","me","the","boy.	",
"	Look around and me.	", "	Look","around","and","me.	",
"	She is beautiful girl.	", "	She","is","beautiful","girl.	",
"	It is beautiful flower.	", "	It","is","beautiful","flower.	",
"	It is a small bag.	", "	It","is","a small","bag.	",
"	She is a quiet girl.	", "	She","is","a quiet","girl.	",
"	It is a noisy snake.	", "	It","is","a noisy","snake.	",
"	It is a weak bag.	", "	It","is","a weak","bag.	",
"	It is a gray mouse.	", "	It","is","a gray","mouse.	",
"	It is a red elephant.	", "	It","is","a red","elephant.	",
"	It is a yummy  cake.	", "	It","is","a yummy ","cake.	",
"	It is a noisy class.	", "	It","is","a noisy","class.	",
"	It is beautiful glass.	", "	It","is","beautiful","glass.	",
"	It is green grass.	", "	It","is","green","grass.	",
"	It is small cap.	", "	It","is","small","cap.	",
"	It is a short goat.	", "	It","is","a short","goat.	",
"	It is a gray gorilla.	", "	It","is","a gray","gorilla.	",
"	It is a big class.	", "	It","is","a big","class.	",
"	It is a strong car.	", "	It","is","a strong","car.	",
"	It is an ugly snake.	", "	It","is","an ugly","snake.	",
"	It is an ugly monster.	", "	It","is","an ugly","monster.	",
"	It is an ugly bag.	", "	It","is","an ugly","bag.	",
"	It is an ugly bag.	", "	It","is","an ugly","bag.	",
"	Listen, read and  write.	", "	Listen,","read","and ","write.	",
"	Sounds, Letters and  Words.	", "	Sounds,","Letters","and ","Words.	",
"	This  is  plastic bag!	", "	This ","is ","plastic","bag!	",
"	I  love the mountains.	", "	I ","love","the","mountains.	",
"	I  love the hills.	", "	I ","love","the","hills.	",
"	I  love the stars.	", "	I ","love","the","stars.	",
"	I  love the sky.	", "	I ","love","the","sky.	",
"	I sit and look.	", "	I","sit","and","look.	",
"	I look and smile.	", "	I","look","and","smile.	",
"	I'm under this sky.	", "	I'm","under","this","sky.	",
"	I'm happy and  strong.	", "	I'm","happy","and ","strong.	",
"	These are two ducks.	", "	These","are","two","ducks.	",
"	These are two flowers.	", "	These","are","two","flowers.	",
"	These are two snakes.	", "	These","are","two","snakes.	",
"	These are two noses.	", "	These","are","two","noses.	",
"	These are three hills.	", "	These","are","three","hills.	",
"	These are three dresses.	", "	These","are","three","dresses.	",
"	These are three faces.	", "	These","are","three","faces.	",
"	These are three cats.	", "	These","are","three","cats.	",
"	Months and Seasons Chant	", "	Months","and","Seasons","Chant	",
"	Listen, match and chant.	", "	Listen,","match","and","chant.	",
"	Back to school, it's fall.	", "	Back","to school,","it's","fall.	",
"	Name seasons and months.	", "	Name","seasons","and","months.	",
"	Listen, point, and say.	", "	Listen,","point,","and","say.	",
"	Shout opposites in groups.	", "	Shout","opposites","in","groups.	",
"	Fun time is good.	", "	Fun","time","is","good.	",
"	Nature is your home.	", "	Nature","is","your","home.	",
"	I talk about nature.	", "	I","talk","about","nature.	",
"	I draw something beautiful.	", "	I","draw","something","beautiful.	",
"	Find and circle 4 words.	", "	Find","and","circle","4 words.	",
"	Listen, point, and practice.	", "	Listen,","point,","and","practice.	",
"	Listen, read, and match.	", "	Listen,","read,","and","match.	",
"	It's big and strong.	", "	It's","big","and","strong.	",
"	It's small and gray.	", "	It's","small","and","gray.	",
"	Write the missing letters.	", "	Write","the","missing","letters.	",


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