
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [

"Apples.",
"bath time.",
"bedtime.",
"boy.",
"carrots.",
"Cherries.",
"cockies.",
"cycling.",
"girl.",
"hat.",
"have lunch.",
"homework.",
"Ice-cream.",
"Lemons.",
"notebook.",
"peach.",
"pen.",
"pizza.",
"rice.",
"salad.",
"sandwiches.",
"school bus.",
"school teacher.",
"soup.",
"watch TV.",

]



var imageFiles = [

"[data-acc-text='Apples.jpg']",
"[data-acc-text='bath time.jpg']",
"[data-acc-text='bedtime.jpg']",
"[data-acc-text='boy.jpg']",
"[data-acc-text='carrots.jpg']",
"[data-acc-text='Cherries.jpg']",
"[data-acc-text='cockies.jpg']",
"[data-acc-text='cycling.jpg']",
"[data-acc-text='girl.jpg']",
"[data-acc-text='hat.jpg']",
"[data-acc-text='have lunch.jpg']",
"[data-acc-text='homework.jpg']",
"[data-acc-text='Ice-cream.jpg']",
"[data-acc-text='Lemons.jpg']",
"[data-acc-text='notebook.jpg']",
"[data-acc-text='peach.jpg']",
"[data-acc-text='pen.jpg']",
"[data-acc-text='pizza.jpg']",
"[data-acc-text='rice.jpg']",
"[data-acc-text='salad.jpg']",
"[data-acc-text='sandwiches.jpg']",
"[data-acc-text='school bus.jpg']",
"[data-acc-text='school teacher.jpg']",
"[data-acc-text='soup.jpg']",
"[data-acc-text='watch TV.jpg']",

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
 

 
