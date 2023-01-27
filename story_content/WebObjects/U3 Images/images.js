
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [

"bear",
"black circle",
"blue circle",
"book",
"boot",
"bread",
"brone circle",
"bus",
"Chimpanzees",
"Crocodiles",
"cup",
"darck brown circle",
"dresses",
"duck",
"elephant",
"food",
"foot",
"fox",
"green circle",
"head",
"Hippos",
"Lion",
"meat",
"monkey",
"moon",
"octopus",
"pinck circle",
"read",
"red circle",
"rope",
"snake",
"tiger",
"yellow circle",
"Zebras"


]



var imageFiles = [

 "[data-acc-text='bear.jpg']",
 "[data-acc-text='black circle.jpg']",
 "[data-acc-text='blue circle.jpg']",
 "[data-acc-text='book.jpg']",
 "[data-acc-text='boot.jpg']",
 "[data-acc-text='bread.jpg']",
 "[data-acc-text='brone circle.jpg']",
 "[data-acc-text='bus.jpg']",
 "[data-acc-text='Chimpanzees.jpg']",
 "[data-acc-text='Crocodiles.jpg']",
 "[data-acc-text='cup.jpg']",
 "[data-acc-text='darck brown circle.jpg']",
 "[data-acc-text='dresses.jpg']",
 "[data-acc-text='duck.jpg']",
 "[data-acc-text='elephant.jpg']",
 "[data-acc-text='food.jpg']",
 "[data-acc-text='foot.jpg']",
 "[data-acc-text='fox.jpg']",
 "[data-acc-text='green circle.jpg']",
 "[data-acc-text='head.jpg']",
 "[data-acc-text='Hippos.jpg']",
 "[data-acc-text='Lion.jpg']",
 "[data-acc-text='meat.jpg']",
 "[data-acc-text='monkey.jpg']",
 "[data-acc-text='moon.jpg']",
 "[data-acc-text='octopus.jpg']",
 "[data-acc-text='pinck circle.jpg']",
 "[data-acc-text='read.jpg']",
 "[data-acc-text='red circle.jpg']",
 "[data-acc-text='rope.jpg']",
 "[data-acc-text='snake.jpg']",
 "[data-acc-text='tiger.jpg']",
 "[data-acc-text='yellow circle.jpg']",
 "[data-acc-text='Zebras.jpg']",


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
 

 
