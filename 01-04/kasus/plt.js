var plat = /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$/

function platnomor(platinput) {
    var OK = plat.test(platinput.value);
    if (OK) {
      document.write(' plat benarrrrrr'); 
    }
     else {
      document.write('plat salah');
 }
}

