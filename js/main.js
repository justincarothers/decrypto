var message= "";
var messageToArray= [];
var line1 = []; var line2 = []; var line3 = []; var line4 = [];
var line5 = [];var line6 = []; var line7 = []; var line8 = []; var line9 = [];
var translation = "";
var output = "";
var lineA = "";
var newString = [];

function decrypt(message) {
  message=message.replace(/\s/g,'');
  messageToArray = message.split("");
  for (var i = 0; i <= message.length; i+=8) {
    line1.push(messageToArray.shift()); line2.push(messageToArray.shift());
    line3.push(messageToArray.shift()); line4.push(messageToArray.shift());
    line5.push(messageToArray.shift()); line6.push(messageToArray.shift());
    line7.push(messageToArray.shift()); line8.push(messageToArray.shift());
  }

  translation = line1.join('') + line2.join('')
  + line3.join('') + line4.join('') + line5.join('')
  + line6.join('') + line7.join('') + line8.join('');
  newString = translation.split('');

  var lineA = translation.slice(0, 5); var lineB = translation.slice(5, 10);
  var lineC = translation.slice(10, 15); var lineD = translation.slice(15, 20);
  var lineE = translation.slice(20, 25); var lineF = translation.slice(25, 30);
  var lineG = translation.slice(30, 35); var lineH = translation.slice(35, 40);
  var lineI = translation.slice(40, 45); var lineJ = translation.slice(45, 50);
  var lineK = translation.slice(50, 55); var lineL = translation.slice(55, 60);
  var lineM = translation.slice(60, 65); var lineN = translation.slice(65, 70);

  output = lineA + " " + lineB + " " + lineC + " " + lineD + " " + lineE + " "
  + lineF + " " + lineG + " " + lineH + " " + lineI + " " + lineJ + " " + lineK
  + " " + lineL + " " + lineM  + " "  + lineN;
}
function logMe() {
  console.log(line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8);
}
$(document).ready(function() {



  $("#output").hide();

  $("form#roman").submit(function(event) {
    event.preventDefault();
    var formInput = $("input#numberinput").val();
    $("#output").fadeIn(15000), 9000;

    // $("#output").hide().animate({ marginRight: '+=5000'},0);
      decrypt(formInput);
      $("#output").text(output);
    });
});
