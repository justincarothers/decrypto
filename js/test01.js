var message= "";
var messageToArray= [];
var line = [];

var translation = "";
var output = "";
var lineA = "";
var newString = [];

function decrypt(message) {
  // debugger;
  messageToArray = message.split("");

  for (var i = 0; i <= message.length; i++) {
    line[i].push(messageToArray.shift());
  }



  translation = line.join('')
  newString = translation.split('');

  var lineA = translation.slice(0, 5);
  var lineB = translation.slice(5, 10);
  var lineC = translation.slice(10, 15);
  var lineD = translation.slice(15, 20);
  var lineE = translation.slice(20, 25);
  var lineF = translation.slice(25, 30);
  var lineG = translation.slice(30, 35);
  var lineH = translation.slice(35, 40);
  var lineI = translation.slice(40, 45);
  var lineJ = translation.slice(45, 50);
  var lineK = translation.slice(50, 55);
  var lineL = translation.slice(55, 60);
  var lineM = translation.slice(60, 65);
  var lineN = translation.slice(65, 70);

  output = lineA + lineB
  //  + lineB.join('') + " " + lineC.join('') + " " + lineD.join('') + " " + lineE.join('') + " " + lineF.join('') + " " + lineG.join('') + " " + lineH.join('') + " " + lineI.join('') + " " + lineJ.join('') + " " + lineK.join('') + " " + lineL.join('') + " " + lineM.join('') + " " + lineN.join('');
}



function logMe() {

  console.log(line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8);

}


// decrypt("dontcompareyourselftootherscompareyourselftothepersonyouwereyesterday")
