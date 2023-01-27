


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dafoor Jan 2023 G9 T2 U 7 380 Words

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 380 ; 
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

"قدرة","ability",
"قادر","able",
"حول","about",
"لهجة","accent",
"قبول","accept",
"قبول","accepting",
"فعل","act",
"عمل","action",
"أجراءات","actions",
"أنشطة","activities",
"في الحقيقة","actually",
"الكبار","adults",
"الإعلانات","advertisement",
"ضد","against",
"عمر","age",
"منذ","ago",
"يوافق على","agree",
"على حد سواء","alike",
"تكاد","almost",
"سابقا","already",
"رائعة حقا","amazing",
"الكاحلين","ankles",
"اخر","Another",
"إجابات","answers",
"أي أكثر من ذلك","anymore",
"حول","around",
"وصل","arrived",
"مقالة - سلعة","article",
"جانبا","aside",
"هجوم","attack",
"بعيد","away",
"الى الوراء","backward",
"كرة","ball",
"مصرف","bank",
"شاطئ بحر.","beach.",
"أصبح","became",
"لان","Because",
"تصبح","becoming",
"تصرف","behave",
"يجرى","being",
"ينتمي ل","belong",
"وراء - فى الجانب الاخر","beyond",
"الدراجات","bikes",
"المناظير","binoculars",
"فارغ","blank",
"أزرق","Blue",
"بوبي","Bobby",
"رابطة","bond",
"ممل","boring",
"وُلِدّ","born",
"على حد سواء","both",
"مُشترى","bought",
"بنى","brown",
"تفرش","brushed",
"يشترى","buy",
"الحرم الجامعي","campus",
"قضية","case",
"حالات","cases",
"اصطياد","catching",
"خلية - زنزانة","cell",
"سلسلة","chain",
"بطل","champion",
"فرصة","chance",
"جدول","chart",
"طفل","child",
"الأطفال","children",
"دائرة","Circle",
"كلاسيكي","classic",
"التقارب","closeness",
"مدرب حافلة ركاب","coach",
"صدفة","coincidence",
"كلية","College",
"زاهى الألوان","colorful",
"تواصل اجتماعي","Community",
"تنافس","compete",
"مسابقات","competitions",
"اكتمال","Complete",
"منجز","completed",
"تؤكد","confirm",
"الخلط","confuse",
"مشوش","confused",
"مربك","confusing",
"محادثة","conversation",
"يطبخ","cook",
"مطبوخ","cooked",
"صيح","correct",
"بلد","country",
"مسار","course",
"ولد عم","cousin",
"فضولي","curious",
"حالات الوفاة","deaths",
"حدد","define",
"بالتااكيد","definitely",
"رسم بياني","diagram",
"موت","die",
"مات","died",
"وجبة عشاء","dinner",
"مناقشة","Discuss",
"مناقشة","Discussion",
"انحدار","downhill",
"فستان","dress",
"خلال","During",
"كل","each",
"مبكرا","early",
"يتناول الطعام","eating",
"اقتصاديات","economics",
"إدي","Eddy",
"تأثير","effect",
"إما","either",
"آخر","else",
"عاطفي","emotional",
"التمتع","enjoy",
"بيئة","environment",
"البيئات","environments",
"إلخ.","etc.",
"حتى","even",
"حدث","event",
"أي وقت مضى","ever",
"كل","every",
"بالضبط","exactly",
"أمثلة","examples",
"تبادل","exchange",
"متحمس","excited",
"مُتوقع","expected",
"غالي","expensive",
"يشرح","explain",
"التعبيرات","Expressions",
"حقيقة","fact",
"مزيف","faking",
"المفضل","favorite",
"شعور","feeling",
"يسقط","fell",
"شعر","felt",
"الشكل","figure",
"ملء","Fill",
"أخيراً","Finally",
"يجد","finds",
"تم الانتهاء من","finished",
"أول","first",
"التالية","following",
"لحسن الحظ","Fortunately",
"وجدت","found",
"وظيفة","Function",
"كراج","garage",
"طيبة","Goodship",
"نمت","grew",
"مجموعة","group",
"مجموعات","groups",
"خمن","guess",
"يرشد","guide",
"يشنق","hang",
"يحدث","happen",
"حدث","happened",
"الصعب","hard",
"سمع","heard",
"قلب","heart",
"معلق","hold",
"بيت","house",
"فكرة","idea",
"تطابق","identical",
"المتطابقات","identities",
"فورا","immediately",
"الأهمية","important",
"عجز","inability",
"بدلاً من","instead",
"معلم","instructor",
"ذكي","intelligent",
"مقابلة","interview",
"المقابلات","interviewers",
"المقابلات","interviews",
"ترتيل","intonation",
"أدخلت","introduced",
"المقدمة","introduction",
"أيرلندا","Ireland",
"الأيرلندية","Irish",
"غير عادي","irregular",
"انضم","join",
"فقط","just",
"احتفظ","keep",
"الركبتين","knees",
"في وقت لاحق","later",
"ضحك","laughed",
"يتعلم","learn",
"التعلم","learning",
"الأقل","least",
"غادر","leave",
"مغادرة","leaving",
"رسالة","letter",
"يستمع","Listen",
"وحيد","lonely",
"ينظر","look",
"نظرت","looked",
"يبحث","looking",
"ضائع","lost",
"كثيرا","lot",
"الكثير","Lots",
"مجمع تجاري","mall",
"متزوج \ متزوجة","married",
"عود ثقاب","Match",
"الرياضيات","math",
"شيء","matter",
"وجبة","meal",
"المعنى","Meaning",
"ميداليات","medals",
"المسعفون","medics",
"يجتمع","meet",
"لقاء","meeting",
"التقى","met",
"مخطئ","mistaken",
"سوء فهم","misunderstanding",
"شهر","month",
"الشهور","months",
"صباح","morning",
"جبل","mountain",
"يتحرك","move",
"انتقل","moved",
"متحف","museum",
"المتاحف","Museums",
"قرب","near",
"يحتاج","need",
"نفي","negative",
"الجار","neighbor",
"ابن الأخ","nephew",
"صافي","net",
"جريدة","newspaper",
"الصحف","newspapers",
"ليل","night",
"تنويه","notice",
"إشعارات","notices",
"محيط","ocean",
"عرض","offer",
"ترتيب","order",
"أمر","ordered",
"التعبئة","packing",
"زوج","pair",
"الآباء","parents",
"منتزه","park",
"النعت","participle",
"المشاركين","participles",
"شريك.","partner.",
"يمر","Pass",
"ماضي","past",
"في احسن الاحوال","perfect",
"ربما","perhaps",
"شخصيات","personalities",
"نزهه","picnic",
"مكان","place",
"يخطط","Plan",
"المخطط","planned",
"شرطة","police",
"بأدب","politely",
"المستطاع","possible",
"حاجة","practice",
"مارس","practiced",
"إعداد","Prepare",
"حاضر","Present",
"تظاهر","pretended",
"السابق","previous",
"سعر","price",
"المحتمل","probably",
"تقدم","progress",
"تدريجي","progressive",
"المشروع","Project",
"نطق","Pronunciation",
"وضع","putting",
"سباق","racing",
"تمطر","raining",
"جاهز","ready",
"تدرك","realize",
"أدرك","realized",
"هل حقا","really",
"وصفة","recipe",
"رفض","refuse",
"رفض","refusing",
"ابحاث","research",
"رد","respond",
"استجابات","responses",
"مطعم","restaurant",
"حقا","right",
"سرقت","robbed",
"لعب الأدوار","Role-play",
"قال","said",
"تخفيض السعر","sale",
"مبيعات","sales",
"قعد","sat",
"منشار","saw",
"قل","say",
"العلماء","scientists",
"باع","sell",
"نصف السنة","semester",
"جملة","sentence",
"عديد","several",
"شارك","share",
"مشترك","shared",
"قميص","shirt",
"مشاهده","show",
"التشابه","similarities",
"بسيط","simple",
"حيث","Since",
"غير متزوج","single",
"الوضع","situation",
"لوح تزلج","skateboard",
"تزلج","ski",
"المتزحلق","skier",
"التزحلق","skiing",
"الزلاجات","skis",
"تحدث","speak",
"مميز","special",
"تحدث","spoken",
"رياضة","sport",
"درج","stairs",
"بداية","start",
"تنص على","States",
"البقاء","stay",
"ما يزال","still",
"قصص","stories",
"قصة","story",
"غريب","strange",
"شخص غريب","stranger",
"شارع","street",
"قوي","strong",
"طالب","student",
"درس","studied",
"دراسة","study",
"دراسة","studying",
"أشياء","stuff",
"النجاح","success",
"مثل","such",
"فجأة","suddenly",
"اقتراحات","suggestions",
"مناسب","suitable",
"الصيف","summer",
"بالتأكيد","Sure",
"مفاجئة","surprise",
"مفاجأة","surprising",
"سترة","sweater",
"حديث","talk",
"كثير الكلام","talkative",
"مهمة","task",
"يعلم","teach",
"مراهقون","teens",
"أسنان","teeth",
"فكر","thought",
"سويا","together",
"أخبر","told",
"هذه الليلة","tonight",
"استغرق","took",
"مؤثر","touching",
"المسابقة","tournament",
"التقليد","tradition",
"رحلة قصيرة","trip",
"ثلاثة توائم","triplets",
"صحيح","TRUE",
"دور","Turn",
"تحولت","turned",
"المنعطفات","turns",
"توأمان","twins",
"مظلة","umbrella",
"وحدة","Unit",
"متحد","United",
"غير عادي","unusual",
"تستخدم","used",
"أفعال","verbs",
"يزور","visit",
"استيقظ","wake",
"سير","walk",
"المشي","walking",
"يريد","want",
"يريد","wants",
"يلبس","wearing",
"أسبوع","week",
"نحن سوف","Well",
"معروف","well-known",
"ذهب","went",
"زوجة","wife",
"اكتب","write",
"جاري الكتابة","writing",
"خطأ","wrongly",
"سنين","years",
"في الامس","yesterday",



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