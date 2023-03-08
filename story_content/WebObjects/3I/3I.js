
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [

"baby",
"bell",
"big cat",
"big sun",
"black gorilla",
"boat",
"boys class",
"bus",
"Camel",
"Elephant",
"flowers",
"geen snake",
"Gorilla",
"green grass",
"happy girl",
"Lion",
"long hands",
"mountains",
"noisy boy",
"noisy place",
"orange cap",
"plastic bag",
"quiet",
"shoes",
"short",
"small crab",
"small mouse",
"small",
"strong",
"two cats",
"two faces",
"two mountains",
"white goat",
"white moon",
"white snow",
"yellow cake",
"yellow snake",
"Zoo",

]



var imageFiles = [

"[data-acc-text='baby.jpg']",
"[data-acc-text='bell.jpg']",
"[data-acc-text='big cat.jpg']",
"[data-acc-text='big sun.jpg']",
"[data-acc-text='black gorilla.jpg']",
"[data-acc-text='boat.jpg']",
"[data-acc-text='boys class.jpg']",
"[data-acc-text='bus.jpg']",
"[data-acc-text='Camel.jpg']",
"[data-acc-text='Elephant.jpg']",
"[data-acc-text='flowers.jpg']",
"[data-acc-text='geen snake.jpg']",
"[data-acc-text='Gorilla.jpg']",
"[data-acc-text='green grass.jpg']",
"[data-acc-text='happy girl.jpg']",
"[data-acc-text='Lion.jpg']",
"[data-acc-text='long hands.jpg']",
"[data-acc-text='mountains.jpg']",
"[data-acc-text='noisy boy.jpg']",
"[data-acc-text='noisy place.jpg']",
"[data-acc-text='orange cap.jpg']",
"[data-acc-text='plastic bag.jpg']",
"[data-acc-text='quiet.jpg']",
"[data-acc-text='shoes.jpg']",
"[data-acc-text='short.jpg']",
"[data-acc-text='small crab.jpg']",
"[data-acc-text='small mouse.jpg']",
"[data-acc-text='small.jpg']",
"[data-acc-text='strong.jpg']",
"[data-acc-text='two cats.jpg']",
"[data-acc-text='two faces.jpg']",
"[data-acc-text='two mountains.jpg']",
"[data-acc-text='white goat.jpg']",
"[data-acc-text='white moon.jpg']",
"[data-acc-text='white snow.jpg']",
"[data-acc-text='yellow cake.jpg']",
"[data-acc-text='yellow snake.jpg']",
"[data-acc-text='Zoo.jpg']",

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
 

 
