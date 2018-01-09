var code;

function areaCode(phoneNum) {
  //turn number input to string
  phoneNum = phoneNum.toString();
  //get first three numbers of phone number
  codeStr = phoneNum.substring(0, 3);
  aCode = parseInt(codeStr);
  //traverse areaCodes for a match
  for (var i in areaCodes) {
    for (var j in areaCodes[i].codes) {
      if (aCode === areaCodes[i].codes[j]) {
        return code = areaCodes[i].state;
        //return state name
      } else {
        code = "NOTHING AND NOWHERE!";
      }
    }
  }
}

$("form").on("submit", function(event) {
  event.preventDefault();
  var value = $('input[name="num"]').val();
  areaCode(value);
  $(".result").text("That area code belongs to " + code + "!").show();
});
