function myRandumImages() {
// Assume the local folder containing the images is named "images" and is in the same directory as the HTML file
// Get a reference to the <img> element on the webpage where the image will be displayed
var img = document.getElementById("myImg");
// Get a list of all the files in the "images" folder
var imageFiles = [
//------------------------
"	boot.	"	,
"	bread.	"	,
"	brone circle.	"	,
"	bus.	"	,
"	Chimpanzees.	"	,
"	Crocodiles.	"	,
"	cup.	"	,
"	darck brown circle.	"	,
"	dresses.	"	,
"	duck.	"	,
"	elephant.	"	,
"	food.	"	,
"	foot.	"	,
"	fox.	"	,
"	green circle.	"	,
"	head.	"	,
"	Hippos.	"	,
"	Lion.	"	,
"	meat.	"	,
"	monkey.	"	,
"	moon.	"	,
"	octopus.	"	,
"	pinck circle.	"	,
"	read.	"	,
"	red circle.	"	,
"	rope.	"	,
"	snake.	"	,
"	tigerr.	"	,
"	yellow circle.	"	,
"	Zebras.	"	,
"	bear.	"	,
"	black circle.	"	,
"	blue circle.	"	,
"	book.	"
//------------------------
];
// Generate a random index between 0 and the number of files in the folder
var randomIndex = Math.floor(Math.random() * imageFiles.length);
// Use the random index to select a file from the list
var fileExt = "jpg";
var randomFile = imageFiles[randomIndex] ;
var randomFileExt = randomFile + fileExt;
// Set the "src" attribute of the <img> element to the randomly selected file
img.src = randomFileExt;
document.getElementById("fileName").innerHTML = randomFile;
let utterance = new SpeechSynthesisUtterance(randomFile);
 speechSynthesis.speak(utterance);
 

}