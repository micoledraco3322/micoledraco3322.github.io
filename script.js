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
  "quote": "Java is to JavaScript what car is to Carpet.",
  "by": "- Chris Heilmann"
 }

]

var storeQ = "Text";
var storeA = "Text";

function randomizer() {

	const count = sample.length
	let intStore = 0

 	for (let i = 0; i <= count; i++)
 	{
    	  intStore=i
 	}

	randomInt = Math.floor((Math.random()*intStore)+1)

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

function generate() {
   randomizer();
   document.getElementById("text").innerHTML = storeQ;
   document.getElementById("by").innerHTML = storeA;
}

function beta() {
   document.getElementById("text").innerHTML = storeQ;
   document.getElementById("by").innerHTML = storeA;
}