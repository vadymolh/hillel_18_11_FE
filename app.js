// Оголошення змінних

let someValue1 = "myname"; //ініціалізація
var someValue2 = "anonimous";

let prodStoreHouseCap = 100;
let n, x, a, b, c;

// Константи 
const DAYS_IN_YEAR = 365;

const masiv = [43, 33, 0, 1, 0, 1];
console.log("Masyv constanta", masiv);

masiv[1] = 100;
console.log("Masyv constanta", masiv);


// ------------------------- Типи даних JS --------------------------------
// Primitives   основна властивість - Imutable
    /*
        String
        Number
        BigInt
        Boolean
        Undefined
        Null
        Symbol
     */

// Objects
    /*
        Object
        Array
        Function
        Date
    */

// NaN - це властивість глобального об'Єкта
// Number.NaN
let notNumber = 4/0;
console.log(notNumber);
notNumber = notNumber/"3text"; //NaN
console.log(notNumber);


// Number
let x1 = 55;
let x2 = 5.05;

// BigInt
let bigNum = 3424234399939999999992377777n;
console.log(bigNum);

// String
let text = "Cytation: \"This apple is great!\" "
console.log(text);

let text2 = "\tMulti \n line \n text";
console.log(text2);

// null
let unknownValue = null;

//  Object
let user = {
	name: 'Nataly',
	age: 30
}

console.log(user);


// Boolean type 
let teza1 = true; // 1
let teza2 = false;  // 0
console.log(1 + teza2);

// let enter = prompt("Enter your name");
// enter = Number.parseInt( enter);
// console.log(`Перетворення в Boolean ${enter} типу ${typeof enter}:`, Boolean(enter));

// JS мова зі слабкою типізацією
let num; // undefined
console.log(typeof num);

num = 100;
console.log(typeof num);

num = '100';
console.log(typeof num);

num = true;
console.log(typeof num);



// Increment ++

// Префіксний інкримент
let num1 = 5; 
let result = ++num1  //num = num+1; result=num1
console.log("Result of Increment:", result);

// Постфіксний інкримент
num1 = 5; 
result = num1++   // result=num1; num = num+1;
console.log("Result of Increment:", result);

// Decrement --      num = num-1


//----------- Математичні операції
console.log("Піднесемо в степінь 3", result**3);
console.log("Result of % остача від ділення:", result%3);


let bnum = 3;

bnum *= 2; // bnum = bnum*2
bnum %= 2; // bnum = bnum%2
bnum /= 2; // bnum = bnum/2

// -------------Оператори порівняння
//  < > <= >=  != !==     ==   ===

//  === строге , а == не строге(не порівнює типи)
if (result === '5') {
	alert(result);
} else if (result > 5) {
    console.log("RESULT більше 5!");

} else if (result === 0){
    console.log("RESULT IS Zero!")
} 
else {
	console.log("Умова не справджується");
}


// -------------Тернарний оператор 
//  [1Yмова] ? [1 operand] : [2 operand] 

let number_ = 105;
console.log(number_ < 100 ? "Так менший ста" : "Так більший ста або рівний")



