//List of quotes

const sample =

[

 {
  "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "by": "- Martin Fowler"
 },
 
 {
  "quote": "First, solve the problem. Then, write the code.",
  "by": "- John Johnson"
 },

 {
  "quote": "Experience is the name everyone gives to their mistakes.",
  "by": "- Oscar Wilde"
 },

 {
  "quote": "In order to be irreplaceable, one must always be different",
  "by": "- Coco Chanel"
 },

 {
  "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "by": "- Martin Luther King Jr."
 },
 
 {
  "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "by": "- Mahatma Gandhi"
 },
 
 {
  "quote": "I have not failed. I've just found 10,000 ways that won't work.",
  "by": "- Thomas A. Edison"
 },
 
 {
  "quote": "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
  "by": "- Albert Einstein"
 },
 
 {
  "quote": "It is never too late to be what you might have been.",
  "by": "- George Elliot"
 },
 
 {
  "quote": "There is no greater agony than bearing an untold story inside you.",
  "by": "- Maya Angelou"
 },
 
 {
  "quote": "Life isn't about finding yourself. Life is about creating yourself.",
  "by": "- George Bernard Shaw"
 }

]

//Text/value holder a.k.a "Global variable"
var storeQ = "Text";
var storeA = "Text";


//Functions for storing the text and displaying the text
function randomizer() {
	//Count how many quotes are there in the list
	const count = sample.length

	//Generate random number for generating random text/quote base on the list
	randomInt = Math.floor((Math.random()*count)+1)
	
	//removes the "undefined" from the list
	//avoids from displaying "undefined"
	if (typeof sample[randomInt] === "undefined")
	{
	  randomizer()
	}
	else {
	  storeQ = sample[randomInt].quote
	  storeA = sample[randomInt].by
	}
}
randomizer()

//Generate and display new text upon pressing the button
function generate() {
   randomizer();
   document.getElementById("text").innerHTML = storeQ;
   document.getElementById("by").innerHTML = storeA;
}

//Display text in "div.quote"
function show() {
   document.getElementById("text").innerHTML = storeQ;
   document.getElementById("by").innerHTML = storeA;
}