// set up text to print, each item in array is new line
var aText = [
"The fastest way to distribute your assets", 
"Those who understand binary, and those who don't"
];
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var destination = document.getElementById("heading");
 
function typewriter(reset)
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span style='background-color:var(--accent-color); width:10px;'></span>";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(()=>{destination.innerHTML = ""; console.log(destination); typewriter()}, 2000);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();