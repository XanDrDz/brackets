module.exports = function check(str, bracketsConfig) {
    let arrayBrack = bracketsConfig.map(function(str){return str.join("")});
    console.log(str)
    for (let i=0; i < arrayBrack.length; i++){
      if(str.includes(arrayBrack[i])){
        str = str.replace(arrayBrack[i], "");
        i = -1;
      }
    }
      if (str){
        return false;
      }else{
        return true;
       }
    }


