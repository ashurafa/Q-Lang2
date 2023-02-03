function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YCwaWuKYPq":
        Script1();
        break;
      case "61Nj5KhGMul":
        Script2();
        break;
      case "6S4mzs3CTPz":
        Script3();
        break;
      case "5dOVtQykcfR":
        Script4();
        break;
      case "61KJhrVCwFL":
        Script5();
        break;
      case "6PcDeshiOch":
        Script6();
        break;
      case "6ANZ8o865dd":
        Script7();
        break;
      case "6JN5iiWzbYE":
        Script8();
        break;
      case "68EUsCtiCtJ":
        Script9();
        break;
      case "6g66YPWrCK7":
        Script10();
        break;
      case "6AbXiajlrYC":
        Script11();
        break;
      case "6rKsXeJTFyY":
        Script12();
        break;
      case "6MXwwiB5eCI":
        Script13();
        break;
      case "5zPPnvAk3KO":
        Script14();
        break;
      case "6TYE78Iqpb4":
        Script15();
        break;
      case "5b06LowxN9q":
        Script16();
        break;
      case "6WMkvduZriY":
        Script17();
        break;
      case "6qxysAEFdaA":
        Script18();
        break;
      case "6a4OmxpqUk1":
        Script19();
        break;
      case "5spsftIlBtF":
        Script20();
        break;
      case "5zYtMg48i2J":
        Script21();
        break;
      case "5VatojHSgjN":
        Script22();
        break;
      case "5iuseqSi3b5":
        Script23();
        break;
      case "67dAgudXu8Y":
        Script24();
        break;
      case "66mABWCIUlf":
        Script25();
        break;
      case "6rGNLCqHL6y":
        Script26();
        break;
      case "6L3GGaRCiFg":
        Script27();
        break;
      case "5edVQ2PtkUi":
        Script28();
        break;
      case "6ewg3685heo":
        Script29();
        break;
      case "6gLsSHgZZVi":
        Script30();
        break;
      case "6jf6UpsPm6p":
        Script31();
        break;
      case "5Wzrb11rQ1V":
        Script32();
        break;
      case "6iiODK0VumV":
        Script33();
        break;
      case "5iYJ3B5U8MW":
        Script34();
        break;
      case "5oS9w2IcWHt":
        Script35();
        break;
      case "6W9gVZ18RGL":
        Script36();
        break;
      case "5VSTSldtRLh":
        Script37();
        break;
      case "6neSa5tJCz0":
        Script38();
        break;
      case "6CId9LjilBH":
        Script39();
        break;
      case "6fFKCp9E56V":
        Script40();
        break;
      case "6O3K4VMwzyG":
        Script41();
        break;
      case "65ePXyrrK6q":
        Script42();
        break;
      case "67IXpplots5":
        Script43();
        break;
      case "6dSezUBUOTY":
        Script44();
        break;
      case "5nzGFmeiXvK":
        Script45();
        break;
      case "5VQcCtMAiya":
        Script46();
        break;
      case "5gfKWU9gNVR":
        Script47();
        break;
      case "5wiUTgPw4Fm":
        Script48();
        break;
      case "5zfC3x2noFo":
        Script49();
        break;
      case "5xdZ7PyaVRL":
        Script50();
        break;
      case "5iw8E7dXAvy":
        Script51();
        break;
      case "6fRG86GzF3L":
        Script52();
        break;
      case "5hRRbHdm3AY":
        Script53();
        break;
      case "5i2G6ciojtc":
        Script54();
        break;
      case "6EWxwyaK0iL":
        Script55();
        break;
      case "6OFe05zEITu":
        Script56();
        break;
      case "62bBnNc9oR6":
        Script57();
        break;
      case "5YpJXc3gfke":
        Script58();
        break;
      case "5WweMd5CZ67":
        Script59();
        break;
  }
}

function Script1()
{
  Listen();


}

function Script2()
{
  // Say();
}

function Script3()
{
  // getting variables from SL for the dimenssions scaleX and scaleY. Both scaleX and scaleY are SL numeric variables.

let player = GetPlayer();

// connecting SL's object  to gsap through accessiblity text

var QBox = document.querySelector("[data-acc-text='QBox']");

// applying gsap animation functions ob the object

gsap.to( QBox , { duration:1.0, scale: 1.1, ease: "elastic.out(1.5, 0.15)" });

}

function Script4()
{
  SayQ4();
}

function Script5()
{
  SayQ3();
}

function Script6()
{
  SayQ2();
}

function Script7()
{
  SayQ1();
}

function Script8()
{
  SayQ();
}

function Script9()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script10()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script11()
{
  Listen();
English();

}

function Script12()
{
  Say();
}

function Script13()
{
  // getting variables from SL for the dimenssions scaleX and scaleY. Both scaleX and scaleY are SL numeric variables.

let player = GetPlayer();

// connecting SL's object  to gsap through accessiblity text

var QBox = document.querySelector("[data-acc-text='QBox']");

// applying gsap animation functions ob the object

gsap.to( QBox , { duration:1.0, scale: 1.1, ease: "elastic.out(1.5, 0.15)" });

}

function Script14()
{
  Say();
}

function Script15()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script16()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script17()
{
  RandImages();
}

function Script18()
{
  SayQ1();
}

function Script19()
{
  SayQ();

}

function Script20()
{
  SayQ3();
}

function Script21()
{
  SayQ2();
}

function Script22()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script23()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script24()
{
  RandImages();
}

function Script25()
{
  SayQ1();
}

function Script26()
{
  SayQ();

}

function Script27()
{
  SayQ3();
}

function Script28()
{
  SayQ2();
}

function Script29()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script30()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script31()
{
  RandImages();
}

function Script32()
{
  SayQ1();
}

function Script33()
{
  SayQ();

}

function Script34()
{
  SayQ3();
}

function Script35()
{
  SayQ2();
}

function Script36()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script37()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script38()
{
  // To set the date of today

var player = GetPlayer();
var d = new Date();
var datestring =  (d.getMonth()+1) + "-" +  d.getDate() + "-" + d.getFullYear();
player.SetVar ("Date",datestring);
}

function Script39()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/4/4.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script40()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/4/4.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script41()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/U4 Images/images.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script42()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/4S/4S.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script43()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/3/3.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script44()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/3/3.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script45()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/U3 Images/images.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script46()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/3S/3S.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script47()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2/2.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script48()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2/2.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script49()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2S/2S.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script50()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2I/images.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script51()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1/1.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script52()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1/1.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script53()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1S/1S.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script54()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1S/1S.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script55()
{
  Listen();
English();

}

function Script56()
{
  Say();
}

function Script57()
{
  Say();
}

function Script58()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script59()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

