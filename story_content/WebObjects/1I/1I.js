
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [


"bathroom",
"bedroom",
"behind the hand",
"behind the table",
"big tree",
"black mountain",
"blue house",
"dining room",
"french fries",
"frog",
"front door",
"green chair",
"in the hand",
"inside",
"kitchen",
"living room",
"mouse",
"next to the fridge",
"next to the hand",
"next to the tree",
"on the chair",
"on the hand",
"prize cup",
"red present",
"some books",
"some clouds",
"under the bed",
"under the hand",


]



var imageFiles = [

"[data-acc-text='bathroom.jpg']",
"[data-acc-text='bedroom.jpg']",
"[data-acc-text='behind the hand.jpg']",
"[data-acc-text='behind the table.jpg']",
"[data-acc-text='big tree.jpg']",
"[data-acc-text='black mountain.jpg']",
"[data-acc-text='blue house.jpg']",
"[data-acc-text='dining room.jpg']",
"[data-acc-text='french fries.jpg']",
"[data-acc-text='frog.jpg']",
"[data-acc-text='front door.jpg']",
"[data-acc-text='green chair.jpg']",
"[data-acc-text='in the hand.jpg']",
"[data-acc-text='inside.jpg']",
"[data-acc-text='kitchen.jpg']",
"[data-acc-text='living room.jpg']",
"[data-acc-text='mouse.jpg']",
"[data-acc-text='next to the fridge.jpg']",
"[data-acc-text='next to the hand.jpg']",
"[data-acc-text='next to the tree.jpg']",
"[data-acc-text='on the chair.jpg']",
"[data-acc-text='on the hand.jpg']",
"[data-acc-text='prize cup.jpg']",
"[data-acc-text='red present.jpg']",
"[data-acc-text='some books.jpg']",
"[data-acc-text='some clouds.jpg']",
"[data-acc-text='under the bed.jpg']",
"[data-acc-text='under the hand.jpg']",


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
 

 
