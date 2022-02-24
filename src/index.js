module.exports = function check(str, bracketsConfig) {
  let array = [];

  for (let i = 0; i < str.length; i++) {
    
    if (bracketsConfig.find(item => item[0] == str[i]) != undefined) {  //    |()|
 
      let pair = bracketsConfig.find(item => item[0] == str[i]);
      if(pair[0] == pair[1]) {
        if (array.includes(str[i]) == false) array.push(str[i]);
        else {
          if (str[i] != array[array.length - 1]) return false;
          else array.pop();
        }
      }
      else {
        array.push(str[i]); 
      }
    }
    else { 
      if (array.length === 0) return false;
      let curr = array.pop();
      let pair = bracketsConfig.find(item => item[0] == curr)[1];
      if (str[i] != pair) return false;
    }

  }

  if(array.length == 0) return true;
  else return false;

}