var box = document.getElementById('display');

//toScreen - user input gets shown in box aka display
function toScreen(x) {
  //+= to chain numbers next to each other x=x+x+....
  box.value += x;
  if (x === 'c') {
    box.value = '';
  }
}

function answer() {
  x = box.value;
  x = eval(x);
  //evaluates strings as math eval(string)
  box.value = x;
}

function power() {
  x=box.value;
  x=eval(x*x);
  box.value = x;
}

function backspace() {
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}
//sss
