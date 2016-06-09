var message= "";
var messageToArray= [];
var lines = [[],[],[],[],[],[],[],[]];
var translation = "";
var output = "";
var newString = [];

function decrypt(message) {
  debugger;
  messageToArray = message.split("");
  for (var i = 0; i <= message.length; i+=8) {
    lines[i].push(messageToArray.shift());
  }


  translation = line1.join('');

  var space = [[],[],[],[],[],[],[],[]]
  space[i] = translation.slice(0, 5); var lineB = translation.slice(5, 10);

  output = space[i] + " ";
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
      decrypt(formInput);
      $("#output").text(output);
    });
});
