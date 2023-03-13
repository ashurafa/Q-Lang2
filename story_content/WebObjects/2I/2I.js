
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Qamar Jan 2023 G2 T2 U2 Words: 88

var RandImages =function(){
	
  // To randomly select image file, disply its image and name. Also gnerate other 3 names for the wronge choices.

let player = GetPlayer();


// Get a list of all the files in the "images" folder

//------------------------

var names = [


"a lot of papers",
"bedroom",
"big bug",
"big tree",
"black wallet",
"colorfull candy",
"comic book",
"cure smile",
"fat cat",
"fat fox",
"fat hen",
"four wallets",
"green chair",
"hand watch",
"It is a snail",
"kitchen",
"many colors",
"MP3 player",
"MP3 players",
"new scissors",
"red sweater",
"six pencils",
"small animal",
"smart phone",
"snack",
"spoort",
"swing",
"this is a glue",
"three smart phones",
"three watches",
"two comic books",
"two erasers",
"ugly spider",


]



var imageFiles = [

"[data-acc-text='a lot of papers.jpg']",
"[data-acc-text='bedroom.jpg']",
"[data-acc-text='big bug.jpg']",
"[data-acc-text='big tree.jpg']",
"[data-acc-text='black wallet.jpg']",
"[data-acc-text='colorfull candy.jpg']",
"[data-acc-text='comic book.jpg']",
"[data-acc-text='cure smile.jpg']",
"[data-acc-text='fat cat.jpg']",
"[data-acc-text='fat fox.jpg']",
"[data-acc-text='fat hen.jpg']",
"[data-acc-text='four wallets.jpg']",
"[data-acc-text='green chair.jpg']",
"[data-acc-text='hand watch.jpg']",
"[data-acc-text='It is a snail.jpg']",
"[data-acc-text='kitchen.jpg']",
"[data-acc-text='many colors.jpg']",
"[data-acc-text='MP3 player.jpg']",
"[data-acc-text='MP3 players.jpg']",
"[data-acc-text='new scissors.jpg']",
"[data-acc-text='red sweater.jpg']",
"[data-acc-text='six pencils.jpg']",
"[data-acc-text='small animal.jpg']",
"[data-acc-text='smart phone.jpg']",
"[data-acc-text='snack.jpg']",
"[data-acc-text='spoort.jpg']",
"[data-acc-text='swing.jpg']",
"[data-acc-text='this is a glue.jpg']",
"[data-acc-text='three smart phones.jpg']",
"[data-acc-text='three watches.jpg']",
"[data-acc-text='two comic books.jpg']",
"[data-acc-text='two erasers.jpg']",
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
 

 
