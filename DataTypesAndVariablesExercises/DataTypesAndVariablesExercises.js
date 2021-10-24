// 1.	To convert Celsius to Fahrenheit, you can use the following formula:
// F=C×1.8+32

const celsius = 12 ;
const fahrenheit = celsius * 1.8 + 3;
console.log(fahrenheit);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);

//2. Favourite Food.
const favouriteFood = 'Gizdo';
console.log(favouriteFood);

//3. String Equality
const answer = "ALL Strings are CrEaTeD equal".toLowerCase == "All STRINGS are CrEaTED Equal".toLowerCase;
console.log(answer);

// 4. All tied up
var joke = `Why couldn't the shoes go out and play?
They were all "tied" up!
`;
console.log(joke);

// 5. Yosa Bosun
const haiku = "Blowing from the west\r\nFallen leaves gather\r\nIn the east.\r\n"
console.log(haiku);

//6. What’s my name?
var fullName = `Adebayo Alimi Bolakale`;
console.log(fullName);

//7. Out to Dinner
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
total = total.toFixed(2);
console.log(total);

// 8. Mad Libs
let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";

let madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}.  I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);

// 9. One Awesome message
let firstName = 'julia';
let interest = 'cat';
let hobby = 'play video games';

let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest} In my spare time, I like to ${hobby}`;
console.log(awesomeMessage);