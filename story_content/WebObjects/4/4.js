


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dafoor Jan 2023 G9 T2 U 8 255 Words

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 255 ; 
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
"حادثة","accident",
"الحوادث","accidents",
"مضيفا","adding",
"صفة","adjective",
"الصفات","Adjectives",
"بالغ","adult",
"ظرف","adverb",
"الضمائر","adverbs",
"النصيحة","advice",
"خائف","afraid",
"ضد","against",
"عمر","age",
"عنيف","aggressive",
"يوافق على","agree",
"مطار","airport",
"تكاد","almost",
"وحده","alone",
"دائماً","always",
"قديمة جدا","ancient",
"إجابه","Answer",
"إجابات","answers",
"مساحة","Area",
"يصل","arrive",
"الانتباه","attention",
"جذب","attract",
"السلطات","authorities",
"تلقائي","automatic",
"المساعدون","Auxiliaries",
"تجنب","Avoid",
"لان","because",
"يصبح","become",
"قبل","before",
"خلف","behind",
"يصدق","believe",
"حزام","belt",
"أحزمة","belts",
"أفضل","better",
"ما بين","between",
"نفخ","Blow",
"مجلس","board",
"بريطاني","British",
"شقيق","brother",
"الباصات","BUSES",
"اتصل","called",
"موجه","cause",
"التحدي","Challenge",
"يتغير","change",
"وصف","characterize",
"الرسوم البيانية","charts",
"الشيك","Check",
"بعناية","closely",
"المستعمرات","colonies",
"آت","coming",
"الأوامر","Commands",
"شائع","common",
"قارن","Compare",
"اكتمال","Complete",
"استيعاب","Comprehension",
"هَم","concern",
"الالتباس","confusion",
"غزت","conquered",
"بالتالي","Consequently",
"اتصل","contact",
"سياق الكلام","Context",
"محادثة","conversation",
"المحادثات","conversations",
"الكونتليز","countlies",
"الدول","countries",
"بلد","country",
"مهذب","courteous",
"العبور","Crossing",
"خطر","Danger",
"خطير >> صفة","dangerous",
"بشكل خطير","dangerously",
"اندفاع","dash",
"الدفاع","defend",
"الاقلاع","departure",
"يصف","describes",
"موت","die",
"مختلف","different",
"صعوبات","difficulties",
"مباشرة","direct",
"اتجاه","direction",
"الكفر","disbelief",
"مناقشة","Discuss",
"مناقشة","Discussion",
"قيادة","drive",
"سائق","driver",
"السائقين","drivers",
"محركات","drives",
"القيادة","driving",
"قاد","drove",
"مبكرا","early",
"مصرية","Egyptian",
"يواجه .. ينجز","encounter",
"إنكلترا","England",
"إنجليزي","English",
"متحمس","enthusiastic",
"دخول","Entry",
"السلالم المتحركة","escalators",
"دليل","evidence",
"خبرة","experience",
"تفسيرات","explanations",
"التعبير","express",
"الخارج","EXTERIOR",
"قليل","few",
"يقاتل","fight",
"تجد","find",
"فلاش","flash",
"شكل","form",
"رَسمِيّ","formal",
"تشكلت","formed",
"نماذج","forms",
"غاز","gas",
"إيماءات","gestures",
"عالمي","global",
"تخرج","graduated",
"قواعد","Grammar",
"حدث","happened",
"المصباح","headlight",
"أعلى","higher",
"الطريق السريع","highway",
"التاريخ","history",
"معلق","hold",
"خيل","horses",
"المئات","hundreds",
"عجل","hurry",
"فكرة","idea",
"الأفكار","ideas",
"تعريف","Identify",
"يتجاهل","Ignore",
"الأهمية","important",
"معلومة","information",
"معلم","instructor",
"يستفد","interested",
"دولي","International",
"يفتش","Investigate",
"عطوف","kind",
"لغة","Language",
"متأخر","late",
"في وقت لاحق","later",
"قانون","law",
"قوانين","laws",
"الأقل","least",
"غادر","leave",
"اليسار","left",
"أقل","less",
"درس","lesson",
"رخصة","license",
"الترخيص","licensing",
"ضوء","light",
"أضواء","lights",
"حد","limit",
"حدود","limits",
"يستمع","Listen",
"الاستماع","Listening",
"قمامة","LITTER",
"ينظر","look",
"تخسر","lose",
"ضائع","lost",
"رائد","major",
"صنع","make",
"طريقة","manner",
"عود ثقاب","Match",
"تعني","mean",
"قد","might",
"محضر جلسة","minutes",
"مرآة","mirror",
"يغيب","miss",
"وسيط","Modal",
"أكثر","more",
"عظم","most",
"أم","mother",
"دراجة نارية","motorcycle",
"دراجات نارية","motorcycles",
"سائقي السيارات","motorists",
"يتحرك","move",
"يجب","must",
"بشكل طبيعي","normally",
"الرسمية","official",
"غالباً","often",
"عكس","opposite",
"أمر","ordered",
"خلال","over",
"خاصة","own",
"زوج","Pair",
"فقرة","paragraph",
"أقواس","parentheses",
"منتزه","park",
"موقف سيارات","Parking",
"شريك","partner",
"يمر","pass",
"تم الاجتياز بنجاح","passed",
"المرور","Passing",
"ماضي","past",
"مشاة","Pedestrian",
"لكل","per",
"الطيارين","pilots",
"لاعب","player",
"يلعب","plays",
"وفرة","plenty",
"جمع","popular",
"التمركز","positioning",
"حاجة","practice",
"إعداد","prepare",
"مشكلة","problem",
"مشاكل","problems",
"وضوح","pronounced",
"نطق","Pronunciation",
"يحذب","pull",
"أسرع","quicker",
"بسرعة","quickly",
"هادئ","quiet",
"جرى","ran",
"جاهز","ready",
"هل حقا","really",
"رؤية خلفية","rearview",
"السبب","reason",
"أسباب","reasons",
"متهور","reckless",
"بتهور","recklessly",
"أحمر","red",
"ردود الفعل","reflexes",
"تقرير","Report",
"الإبلاغ","Reporting",
"الطلبات","Requests",
"استجابة","response",
"اعادة كتابة","Rewrite",
"حقا","right",
"مخاطرة","risk",
"ركب","rode",
"دور","Role",
"القاعدة","rule",
"قواعد","rules",
"يركض","run",
"المتسابقين","runners",
"ركض","running",
"مقدس","scared",
"بدا","seem",
"جمل","sentences",
"جدي","serious",
"درع","shield",
"صرخ","shouted",
"تبين","Show",
"يظهر","shown",
"جانب","side",
"رصيف","sidewalk",
"لافتة","sign",
"علامات","signs",
"الوضع","situation",
"مواقف","situations",
"بطيء","Slow",
"ببطء","slowly",
"المحلول","solution",



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