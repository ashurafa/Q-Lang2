


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wamar Jan 2023 G2 T2 U1 Words: 109

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 109 ; 
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

"10 إلى 100","10 to 100",
"11 إلى 22","11 to 22",
"كثيراً","a lot",
"أي محايات","any erasers",
"قط أسود","black cat",
"اتصل بي","call me",
"هل استطيع","Can I ",
"كتاب الشخصيات","comic book",
"عد الأرقام","Count numbers",
"طفل لطيف","cute baby",
"افعلها","Do it",
"لا تأتي","don't come",
"لا تقفز","don't jump",
"لا تنام","don't sleep",
"فتى سمين","fat boy",
"لي","for me",
"لنا","for us",
"لك","for you",
"من الان","from now",
"اعطيها","give it",
"أعطني","give me",
"اعطنا","give us",
"اشياء جيدة","good things",
"العناكب الرمادية","gray spiders",
"قصة سعيدة","happy story",
"منزله","His house",
"أملك","I have",
"انا يعجبني","I like",
"أتدرب","I practice",
"قرأت","I read ",
"انا اقول","I say ",
"انا اشاهد","I watch",
"أنا مستعد","I'm ready",
"دعنا","Let us",
"كلمات طويلة","long words",
"العديد من البرتقال","many oranges",
"حروف ناقصة","missing letters",
"ألعاب مفقودة","missing toys",
"مكتبي","my desk",
"محوراتي","my erasers",
"يدي","my hand ",
"قلمي","my pen",
"أقلام الرصاص.","my pencils.",
"أقلام","my pens",
"كرسي جميل","nice chair",
"الأرقام أو الحروف","numbers or letters",
"الكمبيوتر القديم","old computer",
"ألعاب برتقالية","orange toys",
"يرجى القراءة","Please, read",
"توقف أرجوك","Please, stop",
"أحمر اللون","red color",
"الشمس الحمراء","red sun",
"هي تشاهد","she watches",
"كلمات قصيرة","short words",
"لعبة صغيرة","small toy",
"بعض الألوان","some colors",
"غراء قوي","strong glue",
"خذ الحلوى","take candy",
"خذها","take it",
"تحدث معي","talk to me",
"تكلم معنا","talk to us",
"علمني","teach me",
"هذا أبي.","That's dad.",
"هناك أو هنا؟","there or here?",
"هؤلاء الاولاد","these boys",
"هؤلاء الفتيات","these girls",
"هذه الاشياء","these things",
"هم يتكلمون","they talk",
"هذه الحلوى","this candy",
"هذه السيارة","this car",
"هذه الدائرة","This circle",
"هذا الباب","This door",
"هذا البيت","This house",
"هذا الأسد","this lion",
"هذه المدرسة","this school",
"هذا المعلم","this teacher",
"هذا الوقت","this time",
"هذا المثلث","This triangle",
"ثلاثة كتب","three books",
"ثلاث فتيات","three girls",
"انتهى الوقت","time.over",
"إلي","to me",
"لك","to you",
"كتابين","two books",
"كرسيان","two chair",
"ألعاب قبيحة","ugly toys",
"استخدم الفرشاة","use brush",
"استخدم الكرسي","use chair",
"استخدم القلم","use pen",
"استخدم لوحة","use plate",
"مشاهدة التلفزيون","watch TV",
"نحن","we .or they",
"نحن نبتسم","we smile",
"ما هذا؟","What's that?",
"ما هذا؟","What's this?",
"لماذا أنت؟","why you?",
"معنا","with us",
"نعم تعال","Yes, come",
"نعم من فضلك","Yes, please",
"أنت تستطيع","You can ",
"انت لا تستطيع","You cannot",
"أنت أو هو","you or he",
"أنا أو أنت","you or I",
"أنت أو هي","you or she",
"أنت تقرأ","you read",
"أخوك","your brother",
"يدك","your hand ",
"أمك","your mother",
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