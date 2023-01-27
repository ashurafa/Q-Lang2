
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U4 Images

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [

"airport.",
"ambulance",
"baby duck",
"back bag",
"basic bicycle",
"big hospital",
"big ship",
"black color",
"blue color",
"blue dolphin",
"boy class",
"boy school",
"chips",
"clean bed",
"do not slip",
"flying bird",
"go to school",
"green car",
"green flag",
"hair brush",
"hand mirror",
"he sleeps",
"long bus",
"long train",
"nice motorbike",
"partners",
"police car",
"read a book",
"red light",
"red truck",
"school bus",
"school teacher",
"small dog",
"small plant",
"space station",
"STOP sign",
"sun glasses",
"toothbrush",
"train station",
"Wall clock",
"White blue airplane",
"white glass",
"white plate",
"white sheep",
"white taxi",
"yellow cheese",


]



var imageFiles = [

  "[data-acc-text='airport.jpg']",
 "[data-acc-text='ambulance.jpg']",
 "[data-acc-text='baby duck.jpg']",
 "[data-acc-text='back bag.jpg']",
 "[data-acc-text='basic bicycle.jpg']",
 "[data-acc-text='big hospital.jpg']",
 "[data-acc-text='big ship.jpg']",
 "[data-acc-text='black color.jpg']",
 "[data-acc-text='blue color.jpg']",
 "[data-acc-text='blue dolphin.jpg']",
 "[data-acc-text='boy class.jpg']",
 "[data-acc-text='boy school.jpg']",
 "[data-acc-text='chips.jpg']",
 "[data-acc-text='clean bed.jpg']",
 "[data-acc-text='do not slip.jpg']",
 "[data-acc-text='flying bird.jpg']",
 "[data-acc-text='go to school.jpg']",
 "[data-acc-text='green car.jpg']",
 "[data-acc-text='green flag.jpg']",
 "[data-acc-text='hair brush.jpg']",
 "[data-acc-text='hand mirror.jpg']",
 "[data-acc-text='he sleeps.jpg']",
 "[data-acc-text='long bus.jpg']",
 "[data-acc-text='long train.jpg']",
 "[data-acc-text='nice motorbike.jpg']",
 "[data-acc-text='partners.jpg']",
 "[data-acc-text='police car.jpg']",
 "[data-acc-text='read a book.jpg']",
 "[data-acc-text='red light.jpg']",
 "[data-acc-text='red truck.jpg']",
 "[data-acc-text='school bus.jpg']",
 "[data-acc-text='school teacher.jpg']",
 "[data-acc-text='small dog.jpg']",
 "[data-acc-text='small plant.jpg']",
 "[data-acc-text='space station.jpg']",
 "[data-acc-text='STOP sign.jpg']",
 "[data-acc-text='sun glasses.jpg']",
 "[data-acc-text='toothbrush.jpg']",
 "[data-acc-text='train station.jpg']",
 "[data-acc-text='Wall clock.jpg']",
 "[data-acc-text='White blue airplane.jpg']",
 "[data-acc-text='white glass.jpg']",
 "[data-acc-text='white plate.jpg']",
 "[data-acc-text='white sheep.jpg']",
 "[data-acc-text='white taxi.jpg']",
 "[data-acc-text='yellow cheese.jpg']"


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
var myImage = document.querySelector( randomFile1);

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
 

 
