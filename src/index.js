module.exports = function check(str, bracketsConfig) {
    const brack = "(){}[]"; // перечень скобок
    let arr = []; // новый массив
    for (let i=0; i<str.length; i++) {
        let symb = str[i]; //i - ый символ
        let ind = brack.indexOf(symb); // поиск символа в скобках
        if (ind === -1) {
            continue
        };
        if (ind % 2 === 0) {
            arr.push(ind + 1) 
        } else {
            if (arr.pop() !== ind) {
                return false;
            }
        }
}
return arr.length === 0;
} 
