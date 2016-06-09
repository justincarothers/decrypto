var message= "";
var messageToArray= [];
var line1 = [];
var line2 = [];
var line3 = [];
var line4 = [];
var line5 = [];
var line6 = [];
var line7 = [];
var line8 = [];
var line9 = [];



function decrypt(message) {
  debugger;
  messageToArray = message.split("");

  for (var i = 0; i <= message.length; i+=8) {
    line1.push(messageToArray.shift());
    line2.push(messageToArray.shift());
    line3.push(messageToArray.shift());
    line4.push(messageToArray.shift());
    line5.push(messageToArray.shift());
    line6.push(messageToArray.shift());
    line7.push(messageToArray.shift());
    line8.push(messageToArray.shift());
  }
}

function logMe() {

  console.log(line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8);

}


// decrypt("dontcompareyourselftootherscompareyourselftothepersonyouwereyesterday")
