// set up text to print, each item in array is new line
let text = [
  "share your files",
  "distribute your assets",
  "host your code"
];
let destination = document.getElementById("heading");
let textPos = 0;
let row = 0;
 
function typewriterOld(reset)
{
  content =  `The fastest way to ${text[row]}`;
  destination.innerHTML = content;
 
 destination.innerHTML = sContents + aText[iIndex].substring(0, textPos) + "<span style='background-color:var(--accent-color); width:10px;'></span>";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(()=>{
    iIndex = 0;
    iTextPos = 0; // initialise text position
    sContents = ''; // initialise contents variable
    iRow = null; // initialise current row
    destination.innerHTML = "";
    typewriter();console.log(destination); typewriter()
   }, 6000);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


function typewriter(){
  content = `The fastest way to ${text[row%text.length]}`;
}

setTimeout(()=>{
  typewriter();
}, 500);
