let a = 10
console.log(a*9)
let b = 7 * a
console.log(b)

const MAX = 57
let actual = 10
percentage = actual/MAX
console.log(percentage)

const string = 'The revolution will not be televised.';
console.log(string);
const badString = string;
console.log(badString);

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

const myString = '123';
console.log(typeof myString);
let mystring = "lower case string";
mystring.toUpperCase();
console.log(mystring);
// 'LOWER CASE STRING'
console.log(mystring.length)
// 17

function squared(num) {
    return num * num;
  }
  
  function cubed(num) {
    return num * num * num;
  }
  
  function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }
  

  input.addEventListener('change', () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = 'You need to enter a number!';
    } else {
      para.textContent = `${num} squared is ${squared(num)}. `;
      para.textContent += `${num} cubed is ${cubed(num)}. `;
      para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
  });
  