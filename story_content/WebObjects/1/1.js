


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wamar Jan 2023 G2 T2 U1 Words: 149

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 149 ; 
//=========================================



var arr = [];
while(arr.length < 8)
{
    var r = Math.floor(Math.random()*Words+1)*2;
    if(arr.indexOf(r) === -1) arr.push(r);
}


var NumA=  arr[1];
var NumA1= arr[2];
var NumA2= arr[3];
var NumA3= arr[4];
var NumA4= arr[5];



var Words= [
"Free Answer for You",

//=========================================

"حول","about",
"فعل","act",
"فعل","Action",
"أجراءات","actions",
"بعد","after",
"تكرارا","again",
"الكل","all",
"و","and",
"نكون","are",
"حول","around",
"في","at",
"خلف","back",
"كيس","bag",
"يكون","be",
"جميل","Beautifull",
"يبدأ","begin",
"كبير","big",
"بواسطة","by",
"كيك","cake",
"نار المخيم","campfire",
"يستطيع","can",
"قبعة","cap",
"قط","cat",
"قطط","cats",
"نشيد","chant",
"دائرة","circle",
"فصل","class",
"لون","color",
"برودة","cooler",
"أيام","days",
"يصف","describe",
"يفعل","do",
"رسم","draw",
"بط","ducks",
"فيل","elephant",
"وجوه","faces",
"خريف","fall",
"تجد","find",
"زهرة","flower",
"زهور","flowers",
"أربعة","four",
"لعبة","game",
"فتاة","girl",
"اذهب","go",
"هدف","GOAL",
"ماعز","goat",
"غوريلا","gorilla",
"رمادي","gray",
"مجموعات","groups",
"خمن","guess",
"سعيد","happy",
"قبعة","hat",
"هنا","here",
"تلال","hills",
"معلق","hold",
"بيت","home",
"لو","if",
"انا","I'm",
"داخل","in",
"هو","is",
"هو - هي","it",
"إنه","It's",
"حروف","Letters",
"يستمع","Listen",
"استمع","listened",
"استماع","Listening",
"طويل","long",
"نظرة","look",
"حب","love",
"يخفض","lowers",
"صنع","make",
"تحضير","making",
"وصل","match",
"أنا","me",
"مسخ","monster",
"شهور","months",
"جبال","mountains",
"الفأر","mouse",
"اسم","name",
"طبيعة","nature",
"جديد","new",
"رقم","no",
"مزعج","noisy",
"أنوف","noses",
"رقم","number",
"موضوع","object",
"من","of",
"واحد","one",
"عكس","opposite",
"معاكسات","opposites",
"أو","or",
"خارج","out",
"زوج","pair",
"أزواج","pairs",
"صورة","picture",
"بلاستيك","plastic",
"مساءً","PM",
"نقطة","point",
"ممارسة","practice",
"هادئ","quiet",
"اقرأ","read",
"قل","say",
"يقول","says",
"مدرسة","school",
"مواسم","seasons",
"قصيرة","short",
"يصرخ","shout",
"يجلس","sit",
"سماء","sky",
"صغير","small",
"ابتسامة","smile",
"ثعبان","snake",
"ثعابين","snakes",
"شيئا ما","something",
"اصوات","sounds",
"ينبوع","spring",
"النجوم","stars",
"بداية","start",
"قوي","strong",
"صيف","summer",
"يتحدث","talk",
"محادثات","talks",
"معلم","teacher",
"أقول","tell",
"الذي - التي","that",
"ال","the",
"ثم","then",
"هذه","this",
"وقت","time",
"ل","to",
"أثر","trace",
"اثنين","two",
"بشع","ugly",
"تحت","under",
"وحدة","Unit",
"فوق","up",
"ضعيف","weak",
"أسبوع","week",
"ماذا ","what",
"متى","when",
"من الذى","who",
"شتاء","winter",
"مع","with",
"كلمة","word",
"كلمات","words",
"اكتب","write",
"لك","your",
"نفسك","yourself",
"لذيذ","Yummy",


//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var WordA = Words[NumA-1];
var WordQ = Words[NumA];

var WordA1 = Words[NumA1-1];
var WordQ1 = Words[NumA1];

var WordA2 = Words[NumA2-1];
var WordQ2 = Words[NumA2];

var WordA3 = Words[NumA3-1];
var WordQ3 = Words[NumA3];

var WordA4 = Words[NumA4-1];
var WordQ4 = Words[NumA4];



// Setting values to SL

player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

			
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