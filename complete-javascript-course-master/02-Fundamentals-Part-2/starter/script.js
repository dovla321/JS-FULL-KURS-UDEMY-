'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

const interface = 'Audio';


function logger(name,years) {
	const person = `My name is ${name}, and i am ${years} old`
	return person;
}

const osoba1 = logger('Milan',18);
const osoba2 = logger('Ivan',20);
console.log(osoba1);
console.log(osoba2);





function fruitProcessor(apples, oranges) {
  
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleAndOrangesJuice = fruitProcessor(4, 6);
console.log(appleAndOrangesJuice);



// function declaration


function calcAge1(birthYear){
	
	return 2037 - birthYear;
}

const person1 = calcAge1(1991);


//function expresion

const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}
const person2 = calcAge2(2021);
console.log(person1,person2);






//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const person3 = calcAge3(2000);
console.log(person3);

const yearsUntilRetirement = (birthYear,firstName) => {
	const age = 2037 - birthYear;
	const retirenment = 65 - age;
	//return retirenment;
	return `${firstName} have ${retirenment} years until retirenment.`
} 

console.log(yearsUntilRetirement(1991,'Vlado'));
console.log(yearsUntilRetirement(1984,'Ivan'));




function cutFruit(fruit){
	return fruit * 7;
}

function fruitProcessor(apples, oranges) {

	const applePeaces = cutFruit(apples);
	const orangePeaces = cutFruit(oranges);
  
  const juice = `Juice with ${applePeaces} pieces of  apples and ${orangePeaces} pieces of oranges.`;
  return juice;
 
}
console.log(fruitProcessor(2, 3));

let shake1 = fruitProcessor(3,4);
console.log(shake1);

let shake2 = fruitProcessor(5,8);
console.log(shake2);



const calcAge =  function (birthYear) {
	return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear,firstName) {



	const age = calcAge(birthYear);
	const retirenment = 65 - age;
	

	if(retirenment > 0) {
		console.log(`${firstName} have ${retirenment} years until retirenment.`);
		return retirenment;
		
	}else{
		console.log(`${firstName} has already retired`);
		return -1;
		
	}
	//return `${firstName} have ${retirenment} years until retirenment.`
} 
console.log(yearsUntilRetirement(1991,'Milenko'));
console.log(yearsUntilRetirement(1950,'Ivan'));


*/
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀





const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolhins,avgKoalas){
	if(avgDolhins >= 2 * avgKoalas){
		console.log(`Dolphins win with ${avgDolhins} vs ${avgKoalas}`);
	}else if (avgKoalas >= 2 * avgDolhins) {
		console.log(`Koalas win with ${scoreKoalas} vs ${avgDolhins}`);
	} else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576,111);
checkWinner(111,611)
*/
//**************************************************************************************


/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(){
	if(scoreDolphins >= 2 * scoreKoalas){
		console.log(`Dolphins win with ${scoreDolphins} vs ${scoreKoalas}`);
	}else if (scoreKoalas >= 2 * scoreDolphins) {
		console.log(`Koalas win with ${scoreKoalas} vs ${scoreDolphins}`);
	} else {
    console.log('No team wins...');
  }
}
//checkWinner(scoreDolphins, scoreKoalas);
checkWinner();
checkWinner();




const friend1 = 'MIchael';
const friend2 = 'Stephen';
const friend3 = 'Peter';


const friends = ['MIchael','Stephen','Peter'];
console.log(friends);


//const years = new Array(1991,1983,2020,2021);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]) // uzimamo zadnji elemenat u nizu

friends[2] = 'Jay';

console.log(friends);


const firstName = 'Jonas';
const jonas = [firstName,'Schvmed',2037 -1991,'teacher',friends];

console.log(jonas);
console.log(jonas.length);


//Exercises

const calcAge = function (birthYear) {
	return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1);
console.log(age2);
console.log(age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);



const friends = ['MIchael','Stephen','Peter'];

//ADD ELEMENT
const newLenght = friends.push('Jay'); //ADD LAST ELEMENT
console.log(newLenght);

friends.unshift('John'); //ADD FIRST ELEMENT
console.log(friends);

//REMOVE ELEMENTS

friends.pop(); // remove last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('Stephen'));// Izbaci poziciju elementa

friends.push(23);
console.log(friends.includes('Stephen'))
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
friends.push('Milenko');

if(friends.includes('Milenko')){
	console.log('You have new friend');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀






//***********************************

  //let bills = 150;
	
	//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const calcTip = function (billValue){
	let tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
	return tip
	console.log(tip);
}

const bills = [125,555,44];

/*const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);
console.log(tip1);
console.log(tip2);
console.log(tip3);
*/

/*
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tips);

let total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(total);



const jonasArray = [
	'Jonas',
	'Shwmed',
	2037 - 1991,
	'teacher',
	['Michael','Peter','Steven']
];


const jonas = {
	
	firstName:'Jonas',
	lastName:'Shwadm',
	age:2037 - 1991,
	job:'teacher',
	friends:['Michael','Peter','Steven']

};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interstedIn = prompt('What do you want to know abaut Jonas? Choose between firstName, lastName, age, job and friends');

console.log(jonas[interstedIn]);

if(jonas[interstedIn]){
	console.log(jonas[interstedIn]);
}else{
	console.log('Wrong request!')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedman';
console.log(jonas);

jonas.car ='Mercedes';


//Chalenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


const jonas = {
	
	firstName:'Jonas',
	lastName:'Shwadm',
	birthYear:1991,
	job:'teacher',
	friends:['Michael','Peter','Steven'],
	hasDriversLicense:true,
	

	//calcAge: function(birthYear){
		//return 2037 - birthYear ;
	//}

	//calcAge: function(){
		//return 2037 - this.birthYear ;
	//}
  
	calcAge: function(){
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	jonasSummary: function(){
		jonas.calcAge();
		if(this.hasDriversLicense === true) {
			this.summary = `${this.firstName} is a ${this.age} years old ${this.job},and he has a driver s licence`;
			return this.summary;
		}else{
			this.summary =`${this.firstName} is a ${this.age} years old ${this.job},and he does not have driver s licence`;
			return this.summary; 
		}
		
	}


	


};


console.log(jonas.jonasSummary());

console.log(jonas.calcAge());

console.log(jonas.age);
*/

//console.log(jonas.age);

//Challenge

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


const markMiller = {
	fullName:'Mark Miller',
	mass:78,
	height:  1.69,

	calcBMI: function () {
		this.bmiValue = this.mass / this.height ** 2;
		return this.bmiValue;
	}
};


const johnSmith = {
	fullName:'John Smith',
	mass:92,
	height:  1.95,

	calcBMI: function () {
		this.bmiValue = this.mass / (this.height ** 2);
		return this.bmiValue;
		
	}
};
markMiller.calcBMI();
johnSmith.calcBMI();


if(markMiller.bmiValue > johnSmith.bmiValue){
	console.log(`${markMiller.fullName} BMI is ${markMiller.bmiValue} and it s heiger then  ${johnSmith.fullName} BMI of ${johnSmith.bmiValue}`);
}else{
	console.log(`${johnSmith.fullName} BMI is ${johnSmith.bmiValue} and it s heiger then  ${markMiller.fullName} BMI of ${markMiller.bmiValue}`);
}


//for loop keeps running while condition is true
for(let rep = 1; rep<=10; rep ++){
	console.log(`Lifting weights repetition ${rep}`)
}


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonas.length; i++){
	console.log(jonas[i],typeof jonas[i]);

	//types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
}

console.log(types);



const years = [1991,2007,1969,2020];

const ages =[];

for(let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('----ONLY STRINGS------')
for(let i = 0; i < jonas.length; i++){
	if(typeof jonas[i] !== 'string') continue;
	console.log(jonas[i],typeof jonas[i]);

}

console.log('----BREAKS------')
for(let i = 0; i < jonas.length; i++){
	if(typeof jonas[i] === 'number') break;
	console.log(jonas[i],typeof jonas[i]);

}
*/