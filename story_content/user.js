function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60ryosHAvWN":
        Script1();
        break;
      case "6I6m7A7Qla2":
        Script2();
        break;
      case "5YJZhA7OYds":
        Script3();
        break;
      case "5mfIgJQ6c9z":
        Script4();
        break;
      case "6DFFo7ZhvBi":
        Script5();
        break;
      case "5qeuXPTttBX":
        Script6();
        break;
      case "6OUEILkwGqQ":
        Script7();
        break;
      case "6jrV8ABIP8G":
        Script8();
        break;
      case "5aOmKTMSeuD":
        Script9();
        break;
      case "6lpLBgyOC6v":
        Script10();
        break;
      case "66Q4TTwYLgE":
        Script11();
        break;
      case "5iDRSPOM2gH":
        Script12();
        break;
      case "6c9KzO4kAbn":
        Script13();
        break;
      case "6b14lbJw6xc":
        Script14();
        break;
      case "5fY35pp0xL9":
        Script15();
        break;
      case "5vazFt5RyUJ":
        Script16();
        break;
      case "67yp2lgNPI1":
        Script17();
        break;
      case "6gc4oAhMcxU":
        Script18();
        break;
      case "6gw2kCJUJja":
        Script19();
        break;
      case "6MBXX6UxSOJ":
        Script20();
        break;
      case "5wegSlfsUgi":
        Script21();
        break;
      case "6pN1vNym4it":
        Script22();
        break;
      case "6c7XASxsVIt":
        Script23();
        break;
      case "6OtCvrbigyK":
        Script24();
        break;
      case "6KUQKacDXkl":
        Script25();
        break;
      case "67rAvJObm42":
        Script26();
        break;
      case "6O1fd6G7Gga":
        Script27();
        break;
      case "6ZFXnUYZDb1":
        Script28();
        break;
      case "6AznrfzA2Le":
        Script29();
        break;
      case "6YKtem9tLe5":
        Script30();
        break;
      case "6Hkwzvp3Y8n":
        Script31();
        break;
      case "5pRbt2BIITj":
        Script32();
        break;
      case "6d9tC5GH9p6":
        Script33();
        break;
      case "5pDVcQZFnH8":
        Script34();
        break;
      case "6ThWgNUIRwN":
        Script35();
        break;
      case "6Lya1HvzHnV":
        Script36();
        break;
      case "5gY5FE9XKC4":
        Script37();
        break;
      case "6OIj6gaVqX0":
        Script38();
        break;
      case "5qBMmptQs0L":
        Script39();
        break;
      case "6CZnbMCCMFT":
        Script40();
        break;
      case "5vp7V7Xpz8O":
        Script41();
        break;
      case "6NQXxwEC7Rv":
        Script42();
        break;
      case "5grOeTmsMly":
        Script43();
        break;
      case "6ktAX9CAY2Z":
        Script44();
        break;
      case "6VxH5EmHQHw":
        Script45();
        break;
      case "68hObywz7MT":
        Script46();
        break;
      case "5lHREs7vzXb":
        Script47();
        break;
      case "6rMoPgpSCT8":
        Script48();
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
  // To set the date of today

var player = GetPlayer();
var d = new Date();
var datestring =  (d.getMonth()+1) + "-" +  d.getDate() + "-" + d.getFullYear();
player.SetVar ("Date",datestring);
}

function Script32()
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

function Script33()
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

function Script34()
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

function Script35()
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

function Script36()
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

function Script37()
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

function Script38()
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

script.src = 'story_content/WebObjects/1S/1S.js';

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

script.src = 'story_content/WebObjects/2S/2S.js';

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

script.src = 'story_content/WebObjects/U3 Images/images.js';

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

script.src = 'story_content/WebObjects/U4 Images/images.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script44()
{
  Listen();
English();

}

function Script45()
{
  Say();
}

function Script46()
{
  Say();
}

function Script47()
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

function Script48()
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

