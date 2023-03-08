


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wamar Jan 2023 G2 T2 U1 Words: 150

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 150 ; 
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

"ْعَنِّي","about me",
"حولك","about you",
"حول المنزل","around the house",
"حول. المدرسة","around.the school",
"ورائي","behind me",
"طائرة كبيرة","big airplane",
"منزل كبير","big house",
"الجبل الكبير","big mountain",
"فأر كبير","big mouse",
"الأسود","black.table",
"صبي أو فتاة","boy or girl",
"أخ و أخت","brother and sister",
"محطة الباص","bus station",
"اتصل بي","call me",
"هل تستطيع","can you ",
"نظف الحمام","clean bathroom",
"مطبخ نظيف","clean kitchen",
"ماء بارد","cold water",
"ادخل","come in",
"لا تأكل","don't eat",
"لا تذهب","don't go",
"الباب الأمامي","front door",
"وقت مرح","fun time",
"أعطني","give me",
"كرسي جيد","good chair",
"ولد جيد","good.boy",
"هو و هي","he and she",
"هو وهم","he and they",
"يكرر","he repeats",
"هنا وهناك","here and there",
"كرسيه","his chair",
"الطعام الساخن","hot food",
"البطاطا المقلية الساخنة","hot fries",
"الشمس الحارقة","hot sun",
"أسرع - بسرعة","hurry up",
"لقد نسيت","I forget",
"وجدت","I found",
"أملك","I have",
"انا يعجبني","I like",
"انا اسمع","I listen",
"أنا أحب","I love",
"اتحدث","I talk",
"في الداخل والخارج","in and out",
"في الصندوق","in the box",
"في الفصل","in the class",
"في المنزل","in the house",
"فى الداخل أو فى الخارج","inside or outside",
"فئة الاستماع","listening class",
"حروف ناقصة","missing letters",
"أمي أو أبي","mum or dad",
"أمي ، تعال","Mum, come",
"سريري","my bed",
"غرفة نومي","my bedroom",
"كتابي","my book",
"أخي","my brother",
"صفي","my class",
"ابي","my dad",
"عائلتي","my family",
"ابي","my father",
"بيتي","my house",
"أمي","my mother",
"شريكى","my partner",
"جائزتي","my prize",
"مدرستي","my school",
"أساتذتي","my teachers",
"فرشاة الأسنان الخاصة بي","my toothbrush",
"لعبتي","my toy",
"جبنة جديدة","new cheese",
"أقلام جديدة","new pens",
"قطار جديد","new train",
"البيت التالي","next house",
"بجانبي","next to me",
"مطبخ جميل","nice kitchen",
"غرفة جميلة","nice room",
"غرفة جميلة","nice room",
"غير نظيف","not clean",
"ليس هنا","not here",
"ليس انا","not me",
"رجل عجوز","old man",
"الأغنام القديمة","old sheep",
"الجدول القديم","old table",
"على الطاولة","on the table",
"أصدقاء لدينا","our freinds",
"مدرستنا","our school",
"ألعب لعبة","play game",
"إستمع من فضلك","please, listen",
"نقطة هناك","point there",
"الممارسات","practices",
"اقرا و اكتب","read and write",
"طعام أحمر","red food",
"معلمي المدارس","school teachers",
"وقت المدرسة","school time",
"شاهدني","see me",
"تتحدث","she talks ",
"أرِنِي","show me ",
"اعرض لنا","show us",
"وقت النوم","sleep time",
"حمام صغير","small bathroom",
"بعض الكتب","some books",
"نظارة شمسيه","sun glasses",
"تحدث معي","talk to me",
"طاولة طويلة","tall table",
"شكرًا لك","thank you",
"ذلك الولد","that boy",
"تلك الفتاة","that girl",
"ذلك المنزل","that house",
"الحمام","the bathroom",
"الكتاب","the book ",
"الصندوق","the box",
"السيارة","the car",
"القط","the cat",
"الفأر","the mouse",
"الأزواج","the pairs",
"هم يعجبهم","they like",
"هذا السرير","this bed",
"هذا الكتاب","this book",
"هذا الجدار","this wall",
"ثلاث رسائل","three letters",
"إلى المنزل","to home",
"الى المدرسة","to school",
"فتاتان","two girls",
"يدين","two hands",
"الضفادع القبيحة","ugly frogs",
"جدار قبيح","ugly wall",
"تحت السماء","under the sky",
"كبير جدا","very big",
"أين وماذا","where and what",
"أين ومتى","where and when",
"أين ومن","where and who",
"اين ولماذا","where and why",
"الأبيض والأزرق","white and blue",
"جبن أبيض","white cheese",
"لوحة بيضاء","white plate",
"سيارة أجرة بيضاء","white taxi",
"معي","with me",
"غرفة صفراء","yellow room",
"أنت وهم","you and they",
"أنت الثلاجة","you fridge",
"تحب","you like",
"تحب","you like ",
"أنت لست","you not he",
"مرحباً بك","you welcome",
"غرفة النوم الخاصة بك","your bedroom",
"سيارتك","your car",
"حلمك","your dream",
"يدك","your hand",
"منزلك","your house",
"حاضرك","your present",
"غرفتك","your room",
"أختك","your sister",

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
 
 
 
 
  // Code to say Arabic Word in the Question
var SayA =function(){
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();    
var lang1="ar" 
msg.voice =voices[2]; 
msg.lang=lang1; 

msg.text = WordQ;

window.speechSynthesis.speak(msg);
}