


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wamar Jan 2023 G2 T2 U1 Words: 111

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 111 ; 
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

" مكان كبير"," big place",
"الساعة 8","8 o’clock",
"عن الطعام","about food",
"عن المنزل","about house",
"بعدي","after me",
"بعدك","after you",
"أي غداء","any lunch",
"خلف الأبواب","behind doors",
"تلفزيون كبير","big TV",
"خبز اسمر","brown bread",
"رجل اعمال","businessman",
"دائرة ومربع","circle and square",
"سرير نظيف","clean bed",
"أكواب نظيفة","clean cups",
"باب نظيف","clean door",
"تنظيف الجلد","clean skin",
"اسنان نظيفة","clean teeth",
"الغيوم في السماء","clouds in sky",
"غائم","cloudy",
"تعال في 6","come at 6",
"ليلا و نهارا","day and night",
"سجادة قذرة","dirty rug ",
"أسنان قذرة","dirty teeth",
"هل تأكل؟","Do you eat?",
"هل تقرأ؟","Do you read?",
"هل تشاهد؟","Do you watch?",
"هل تكتب؟","do you write?",
"لا تتحدث","don't talk",
"لا تشاهد","don't watch",
"كل الطعام","eat food",
"أكل شطيرة","eat sandwich",
"كل يوم","everyday",
"استيقظ","get up ",
"مدرسة البنات","girls school",
"أعطني","give me",
"سلطة خضراء","green salad",
"شجرة خضراء","green tree",
"هو و هي","he and she",
"هو يستطيع","he can",
"هو هنا.","he is here.",
"كتابه","his book",
"حار وبارد","hot and cold",
"الخبز الساخن","hot bread",
"اللحوم الساخنة","hot meat",
"أنا سعيد.","I'm happy.",
"أنا حسن.","I'm Hasan.",
"أنا هنا.","I'm here.",
"أنا حزين.","I'm sad.",
"أنا مدرس.","I'm teacher.",
"أنا زينب.","I'm Zainab.",
"عند المساء","in the evening",
"يمكن","It can ",
"هذا ممتع","it's funny",
"إنه هنا.","It's here.",
"انها ليست هنا.","It's not here.",
"إنه ريني.","It's rainey.",
"انها تثلج.","It's snowy.",
"الطقس مشمس.","It's sunny.",
"آخر مرة","last time",
"لنتحدث.","Let's talk.",
"منذ وقت طويل","long time",
"انظر واستمع.","Look and listen.",
"ألواني","my colors",
"عائلتي","my family",
".أصدقائي","my friends",
"بيتي","my house",
"أختى","my sister",
"مدينتي","my town",
"المرة التالية","next time",
"شعر جميل","nice hair",
".صورة جميلة","nice picture",
"لا طعام","no food",
"لا وقت","no time",
"ليس الآن","not now",
"الآن أم آجلاً؟","now or later?",
"اللعب القفز","play jumping",
"لعب سوني","play Sonny",
"إستمع من فضلك","please, listen",
"قل شيئا","say something",
"باص المدرسة","school bus",
"مدرس المدرسة","school teacher",
"انها لديها","She has ",
"خروف جيدا","sheep well",
"صغيرة وكبيرة","small and big",
"كلب صغير","small dog",
"بعض المال","some money",
"مكتب المعلم","teacher's office",
"أخبرني","tell me",
"المركز التجاري","the mall ",
"الحديقة.","the park.",
"الشتاء","the winter",
"الشتاء.","the winter.",
"حافلةهم","their bus",
"مدرستهم","their school",
"يستطيعون","they can",
"إنهم يمشون","they walk",
"هذا الولد","this boy",
"هذه الفتاة","this girl",
"ثلاثة حيوانات","three animals",
"حار جدا","very hot",
"نقفز","we jump",
"نحن نسبح","we swim",
"نمشي","we walk",
"متى؟","What time?",
"ما هذا؟","What's that?",
"ما هذا؟","What's this?",
"جدار أبيض","white wall",
"البيت الابيض","white.house",
"اعمل الان","work now",
"أنت وأنا","you and me",
"أصدقائك","your friends",


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