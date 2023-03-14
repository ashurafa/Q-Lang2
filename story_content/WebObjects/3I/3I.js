
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [


"architect",
"astronaut",
"bedroom",
"big tree",
"bread",
"businessman",
"cloudy",
"computer technician",
"cook",
"doctor",
"eleven",
"family",
"farmer",
"fat cat",
"firefighter",
"foot",
"head",
"many colors",
"meat",
"monkey",
"mouse",
"nine",
"pair of boys",
"pilot",
"rainy",
"read",
"seven",
"sheep",
"sleep",
"smart phone",
"snowy",
"sunny",
"teacher",
"three",
"tooth",
"twelve",
"ugly spider",

]



var imageFiles = [


"[data-acc-text='architect.jpg']",
"[data-acc-text='astronaut.jpg']",
"[data-acc-text='bedroom.jpg']",
"[data-acc-text='big tree.jpg']",
"[data-acc-text='bread.jpg']",
"[data-acc-text='businessman.jpg']",
"[data-acc-text='cloudy.jpg']",
"[data-acc-text='computer technician.jpg']",
"[data-acc-text='cook.jpg']",
"[data-acc-text='doctor.jpg']",
"[data-acc-text='eleven.jpg']",
"[data-acc-text='family.jpg']",
"[data-acc-text='farmer.jpg']",
"[data-acc-text='fat cat.jpg']",
"[data-acc-text='firefighter.jpg']",
"[data-acc-text='foot.jpg']",
"[data-acc-text='head.jpg']",
"[data-acc-text='many colors.jpg']",
"[data-acc-text='meat.jpg']",
"[data-acc-text='monkey.jpg']",
"[data-acc-text='mouse.jpg']",
"[data-acc-text='nine.jpg']",
"[data-acc-text='pair of boys.jpg']",
"[data-acc-text='pilot.jpg']",
"[data-acc-text='rainy.jpg']",
"[data-acc-text='read.jpg']",
"[data-acc-text='seven.jpg']",
"[data-acc-text='sheep.jpg']",
"[data-acc-text='sleep.jpg']",
"[data-acc-text='smart phone.jpg']",
"[data-acc-text='snowy.jpg']",
"[data-acc-text='sunny.jpg']",
"[data-acc-text='teacher.jpg']",
"[data-acc-text='three.jpg']",
"[data-acc-text='tooth.jpg']",
"[data-acc-text='twelve.jpg']",
"[data-acc-text='ugly spider.jpg']",

];
//------------------------

// Generate a random index between 0 and the number of files in the folder

var arr = [];
while(arr.length < 8)
{
    var r = Math.floor(Math.random()*imageFiles.length);
    if(arr.indexOf(r) === -1) arr.push(r);
}

var Rand1 = arr[1];
var Rand2 = arr[2];
var Rand3 = arr[3];
var Rand4 = arr[4];



// Use the random index to select a file from the list


var randomFile1 = imageFiles[Rand1] ;

var randomName1 = names [Rand1] ;
var randomName2 = names [Rand2] ;
var randomName3 = names [Rand3] ;
var randomName4 = names [Rand4] ;

// alert(Rand1 + Rand2 + Rand3 + Rand4);


// alert(randomName1 + randomName2 + randomName3 + randomName4);


// connecting SL's object  to gsap through accessiblity text
var myImage = document.querySelector(randomFile1);

gsap.to(myImage, { x: 300, y: 80, duration: 1, ease: "bounce.out" });

player.SetVar("WordA", randomName1 );
player.SetVar("WordA1", randomName2 );
player.SetVar("WordA2", randomName3 );
player.SetVar("WordA3", randomName4 );


	
}


 
 
// Code to say WordQ the English word in the Question
var SayQ =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
// Code to say WordQ1 the English word in the Question
var SayQ1 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA1");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 // Code to say WordQ2 the English word in the Question
var SayQ2 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA2");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 
 // Code to say WordQ2 the English word in the Question
var SayQ3 =function(){
var player = GetPlayer();
var MyText = player.GetVar("WordA3");
		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }
 

 
