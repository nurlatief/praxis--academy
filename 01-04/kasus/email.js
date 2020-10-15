//  var Regex = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/ ;
 

// Cara menggunakan fungsi di atas
function isEmail () {
  var ngecek = document.getElementById ('imail').value;
  var Regex = /^[a-z]+[0-9]*\@[a-z]*\.[a-z]/i;

  var a =  /^[a-z 0-9]*/
  
  var b = /[a-z]*\.[a-z]*/

  var inpt = ngecek.match (Regex)
  var nm = ngecek.match(a)
  var dmn = ngecek.match(b)

  if (inpt) {
    alert(`selamat masuk ${nm} domainmu ${dmn}`)
  }
  else {
    alert(`email salah`)
  }

//     var OK = Regex.test(imailinput.value);
//     if (OK) {
//       document.write(' email anda benar'); 
//     }
//      else {
//       document.write('emailmu salah ka');
//  }
}



