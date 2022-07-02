/*let js = 'amazing';
   
      console.log(40+7+5-5);

console.log("Jonas");
console.log(23);

let firstName = "jonas";
let first = 'jonas';



console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions

let myFirstJob = 'programer';
let myCurrentJob = 'teacher';



let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "javascriptIsFun");

javascriptIsFun = 'YES';

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null)


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1999;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
//console.log(ageSarah);

console.log(ageJonas * 2, ageJonas/ 10, 2 ** 3);


const firstName = 'Jonas';
const lastName = 'Schmed';

console.log(firstName +' '+ lastName);

//Assigment operators
let x = 10 + 5;
x += 10;//
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comperison operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x,y;
x = y = 25-10-5;
console.log(x,y);

const avargeAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avargeAge);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBmi = markWeight / markHeight ** 2 ;
let johnBmi = johnWeight / johnHeight ** 2 ;


const markHigherBMI = markBmi > johnBmi; 



console.log(markBmi +' '+'kg',johnBmi + ' ' +'kg',markHigherBMI);



let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2 ;
let johnBmi = johnWeight / johnHeight ** 2 ;


const markHigherBMI = markBmi > johnBmi; 



console.log(markBmi +' '+'kg',johnBmi + ' ' +'kg',markHigherBMI);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037; 

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);  

const jonasNew = `I'm ${firstName} , a ${year - birthYear} jears old ${job} !`

console.log(jonasNew);



const age = 15;

if(age >=18){
      console.log('sarah can start driving lecenses')
}else{
      const yearsLeft = 18 - age;
      console.log(`Sarah have left ${yearsLeft} years until start driving`);
}


const birthYear = 2001;
let century;

if(birthYear <= 2000){
       century = 20;
}else{

       century = 21;
}

console.log(century);
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀



let markName = 'Mark';
let johnName = 'John';
/*let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBmi = markWeight / markHeight ** 2 ;
let johnBmi = johnWeight / johnHeight ** 2 ;


let messageBMI;

if(markBmi > johnBmi) {
      messageBMI = `${markName} BMI is (${markBmi}) and it is heigher then ${johnName} s BMI, whitch is (${johnBmi}) `;
}else{
      messageBMI = `${johnName} BMI is (${johnBmi}) and it is heigher then ${markName} s BMI, whitch is (${markBmi}) `;
}

console.log(messageBMI);


 
// type conversion
 let inputYear = '1991';
 inputYear = Number(inputYear);
 console.log(inputYear + 18);

 console.log(Number('jonas'));

 console.log(String(23),23);


 // type coercion

 console.log('I am ' + 23 + ' years old')
 console.log('23' - '10' - 3 )
 console.log('23' / '2')


 let n = '1' + 1;
 n = n - 1;
 console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));


const money = 10;
if(money) {
      console.log("Don't spend it all;");
}else{
      console.log('You should get a job! ')
}


let height = 0;

if(height){
      console.log('YAY Height is definde!')
}else{
      console.log('Height is not defined')
}


const age = '18';
if(age === 18) {
      console.log('You just become an adult (strick)')
}else {
     console.log('You are not 18 yet') 
}


if(age == 18) {
      console.log('You just become an adult (loose)')
}else {
     console.log('You are not 18 yet') 
}


const favourite = Number(prompt("What is your favourite namber"));
console.log(favourite);

if(favourite === 23) {
      console.log('Cool, 23 is amezing');
}else if(favourite === 7) {
      console.log('Cool, 7 is amezing');
}else if(favourite === 3) {
      console.log('Cool, 3 is amezing');
}else {
      console.log('Number is not 23 or 7');
}

if(favourite !== 23) {
      console.log('why not 23? ');
}

*/
/*
const hasDriversLicence = true;
const hasGodVision = true;

console.log(hasDriversLicence && hasGodVision);

console.log(hasDriversLicence || hasGodVision);

console.log(!hasDriversLicence);



if(hasDriversLicence && hasGodVision) {
      console.log('Sarah should drive');
}else{
      console.log('Sarah is not able to drive');
}

const isTired = false;

console.log(hasDriversLicence && hasGodVision && isTired);

if(hasDriversLicence && hasGodVision && !isTired) {
      console.log('Sarah should drive');
}else{
      console.log('Sarah is not able to drive');
}

*/

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


//let avargeScorDolphins = (96 + 108 + 89) / 3;//
//let avargeScorKoalas = (88 + 91 + 110) / 3;//

//let avargeScorDolphins = (97 + 112 + 101) / 3;
//let avargeScorKoalas = (109 + 95 + 123) / 3;

let avargeScorDolphins = (97 + 112 + 80) / 3;
let avargeScorKoalas = (109 + 95 + 50) / 3;
console.log(avargeScorDolphins,avargeScorKoalas);


if(avargeScorDolphins > avargeScorKoalas && avargeScorDolphins >= 100){
      console.log(`Dolphins avarge score is ${avargeScorDolphins}, which means that they have better score then Koalas which is ${avargeScorKoalas} , and Koalas are the winners`)
}else if (avargeScorDolphins === avargeScorKoalas && avargeScorDolphins >= 100 && avargeScorKoalas >= 100){
      console.log(`The bouth team have the same avarge score of ${avargeScorKoalas},and that means it is draw`)
}else if(avargeScorKoalas > avargeScorDolphins && avargeScorKoalas >= 100){
    console.log(`Koalas avarge score is ${avargeScorKoalas}, which means that they have better score then Dolphins which is ${avargeScorDolphins}, and Koalas are the winners`)  

}else{
      console.log('Neither team has won ')
}


const day = 'friday';

switch (day) {
      case 'monday':
            console.log('Plan course structure');
            console.log('Go to coding meetup');
            break;
      case 'tuesday':
            console.log('Prepare theory videos');
            break;
      case 'wednsday':
      case 'thursday':
            console.log('Write code examples');
            break;
      case 'friday':
            console.log('Record videos');
            break;
      case 'saturday':
      case 'sunday':
            console.log('Enjoj the weekend');
            break;
      default:
            console.log('Not a valid') 
          
}

if(day === 'monday') {
      console.log('Plan course structure');
      console.log('Go to coding meetup');
}else if(day === 'tuesday') {
      console.log('Prepare theory videos');
}else if(day === 'wednsday' || day === 'thursday') {
      console.log('Write code examples');
}else if(day === 'friday') {
      console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday') {
      console.log('Enjoj the weekend');
}else{
     console.log('Not a valid day')  
}



const age = 6;
//age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water') 

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age>=18){
      drink2 = 'wine';
}else{
      drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀

let bill = 40;
let tip = bill * 0.20;



console.log(`The bill is ${bill}, and tip is ${bill >= 50 && bill <= 300 ? tip : tip }, and complete bill is ${bill + tip}`);
*/


