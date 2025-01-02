=================== module 18-6-1 ========================= //
18_5-1 Store more than one value in a variable using Array.
STRUCTURE =============
const number = [12, 23, 43, 54, 54];
const name = ["akash", "bata", "hawya, am,"];
const  boolen = [true, false, true, false];
console.log(number[0]);

18_5-2 Visualize the concpet of an array.
Array কী?
একটি array হচ্ছে এমন একটি ডাটা স্ট্রাকচার, যেখানে একাধিক মান (values) রাখা যায়। এই মানগুলো সাধারণত এক ধরনের ডাটা (যেমন, সংখ্যা, স্ট্রিং, ইত্যাদি) হতে পারে এবং এগুলো একটি সুনির্দিষ্ট অর্ডারে থাকে। JavaScript-এ array হল একটি অবজেক্ট, যার মধ্যে একাধিক মান সংরক্ষণ করা যায়।

Array তৈরি করা
1. Array তৈরি করার উপায়
এখানে বিভিন্ন উপায়ে array তৈরি করা যায়।

Array literal (অধিক ব্যবহৃত):

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "mango"];
Array constructor method:

javascript
Copy code
const numbers = new Array(1, 2, 3, 4, 5);
তবে, সাধারণত array literal সবচেয়ে বেশি ব্যবহৃত হয় কারণ এটি সোজা এবং সহজ।

2. Array-তে ডাটা সংরক্ষণ
Array-তে যে কোনো ডাটা টাইপ থাকতে পারে, যেমন:

Number: [1, 2, 3, 4, 5]
String: ["apple", "banana", "mango"]
Boolean: [true, false, true]
Mixed data types: [1, "apple", true, [1, 2, 3]]
3. Array Index
Array-এর প্রতিটি মানকে index দ্বারা চিহ্নিত করা হয়। index শুরু হয় 0 থেকে। উদাহরণ:

javascript
Copy code
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
4. Array Length
Array-এর দৈর্ঘ্য বা সংখ্যার পরিমাণ জানার জন্য length প্রোপার্টি ব্যবহার করা হয়:

javascript
Copy code
const fruits = ["apple", "banana", "mango"];
console.log(fruits.length); // 3
Array Methods
Array-তে কাজ করার জন্য বেশ কিছু দরকারী মেথড আছে। কিছু গুরুত্বপূর্ণ মেথড নিচে দেওয়া হলো:

push() – নতুন উপাদান array-র শেষে যোগ করে:

javascript
Copy code
const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]
pop() – array-র শেষে থেকে একটি উপাদান মুছে দেয়:

javascript
Copy code
const fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits); // ["apple", "banana"]
shift() – array-র প্রথম উপাদান মুছে দেয়:

javascript
Copy code
const fruits = ["apple", "banana", "mango"];
fruits.shift();
console.log(fruits); // ["banana", "mango"]
unshift() – array-র শুরুতে একটি নতুন উপাদান যোগ করে:

javascript
Copy code
const fruits = ["banana", "mango"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "mango"]
concat() – দুটি বা ততোধিক array একত্রিত করে:

javascript
Copy code
const fruits = ["apple", "banana"];
const moreFruits = ["mango", "pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "mango", "pineapple"]
slice() – একটি নতুন array তৈরি করে, যেখানে নির্দিষ্ট অংশ নেওয়া হয়:

javascript
Copy code
const fruits = ["apple", "banana", "mango", "pineapple"];
const newFruits = fruits.slice(1, 3); // index 1 থেকে 3 পর্যন্ত (3 বাদ)
console.log(newFruits); // ["banana", "mango"]
splice() – একটি নির্দিষ্ট index থেকে উপাদান মুছে দিতে বা যোগ করতে ব্যবহার হয়:

javascript
Copy code
const fruits = ["apple", "banana", "mango", "pineapple"];
fruits.splice(2, 1, "kiwi"); // index 2 থেকে 1টি উপাদান মুছে দিয়ে "kiwi" যোগ করা
console.log(fruits); // ["apple", "banana", "kiwi", "pineapple"]
forEach() – প্রতিটি array element-এর ওপর একটি ফাংশন প্রয়োগ করতে:

javascript
Copy code
const fruits = ["apple", "banana", "mango"];
fruits.forEach(function(fruit) {
   console.log(fruit);
});
// apple
// banana
// mango
map() – array-এর প্রতিটি উপাদানের ওপর ফাংশন প্রয়োগ করে একটি নতুন array তৈরি করে:

javascript
Copy code
const numbers = [1, 2, 3];
const doubled = numbers.map(function(number) {
   return number * 2;
});
console.log(doubled); // [2, 4, 6]
filter() – array-এর কিছু উপাদান নির্বাচন করে একটি নতুন array তৈরি করে:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
   return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
reduce() – array-এর সমস্ত উপাদানকে একত্রিত করে একটি একক মানে পরিণত করে:

javascript
Copy code
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(total, number) {
   return total + number;
}, 0);
console.log(sum); // 10
Array-র Advantages
সহজে একাধিক মান সংরক্ষণ: Array ব্যবহার করে তুমি একাধিক মান একটি ভেরিয়েবলের মধ্যে সংরক্ষণ করতে পারো।
কাস্টম ডাটা ম্যানিপুলেশন: মেথড ব্যবহার করে array-এর উপাদান গুলি সহজে manipulate করা যায়।
সহজেই লুপ করা যায়: তুমি for বা forEach() ব্যবহার করে array-এর প্রতিটি উপাদানটি লুপ করতে পারো।
Array Example
ধরা যাক, তোমার কাছে কিছু ছাত্রের নাম এবং তাদের নম্বর সংরক্ষণ করতে হবে:

javascript
Copy code
const students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 90 },
  { name: "Rina", marks: 70 }
];

// লুপ দিয়ে প্রতিটি ছাত্রের নাম এবং নম্বর দেখাও
students.forEach(function(student) {
  console.log(student.name + " has scored " + student.marks);
});
Conclusion
Array একটি গুরুত্বপূর্ণ ডাটা স্ট্রাকচার যা একাধিক ডাটা একত্রে সংরক্ষণ, পরিচালনা এবং বিশ্লেষণ করার জন্য ব্যবহৃত হয়। JavaScript-এ array ব্যবহার করে তুমি সহজেই ডাটা সংরক্ষণ করতে পারো এবং বিভিন্ন মেথডের মাধ্যমে এদের অপারেশন করতে পারো।

আশা করি, এই ব্যাখ্যা তোমার কাছে পরিষ্কার হয়েছে! যদি আরও কিছু জানার প্রয়োজন হয়, তাহলে আমাকে বলতে পারো।






================================ module 18-6-3 ================================ //
18_5-3 Array length, index, Get and set by index.

//======== length =======//
const numbers = [12, 32, 43, 43, 53, 65];
console.log(numbers.length)

//======= index ========//
const number = [12, 32, 43, 43, 53, 65];
console.log(number[0]);

//====== get ==========//
const number = [12, 32, 43, 43, 53, 65];
const first = number[0];
console.log(first);

//======= set =========//
const number = [12, 32, 43, 43, 53, 65];
number[0] = 22; 
console.log(number);



================================ module 18-6-4 ================================ //
8_5-4 Add and remove elements from arrays using push, pop, shift and unshift.

//===== .push() =====//
const number = [12, 43, 3, 34, 34]
console.log(number)
number.push(22)
number.push(55)
number.push(44, 55, 66, 77)
console.log(number)

//===== .pop() =====//
const friends = ["balam", "kalam", "khilam", "ghumailam"];
console.log(friends);
friends.push("alam");
console.log(friends);

//===== .pop() =====//
const friends = ["balam", "kalam", "khilam", "ghumailam"];
// // console.log(friends);
friends.pop(); // seser theke ekta ekta kore komte thakbe
friends.pop(); // aro ekta komlo
friends.pop();  //aro ekta komlo 
console.log(friends);

//===== shift =====//
etar kaj hocche suru theke remove kora.
const friends = ["balam", "kalam", "khilam", "ghumailam"];
console.log(friends)
friends.shift();  // eta suru theke remove kore thake etar kaj ei eita.
console.log(friends)


//===== unShift =====//
etar kaj hocche suru te add kora kora.
const friends = ["balam", "kalam", "khilam", "ghumailam"];
// console.log(friends)
friends.unshift("alamin");  // eta suru theke remove kore thake etar kaj ei eita.
console.log(friends)




================================ module 18-6-5 ================================ //
18_5-5 All about basic array methods, isArray.

//===== includes =====//
kaw ke khuja
const friends = ["balam", "kalam", "khilam", "ghumailam"];
console.log(friends.includes("balam")) // result: true 

if(friends.includes("balam")){
      console.log("colo perty kori.");
}else{
      console.log("nah balam nai perty korum na.");
};

//===== indexOf =====//
// kono element er index khuje ber kora.
const friends = ["balam", "kalam", "khilam", "ghumailam"];
console.log(friends.indexOf("kalam"));    //
console.log(friends.indexOf("tomato"));   //

//===== .isArray() =====//
const friends = ["balam", "kalam", "khilam", "ghumailam"];
const num = [];
const food = "apple";
const age = 33;

console.log(Array.isArray(friends));   // result: true  //ache
console.log(Array.isArray(num));       // result: true  // ache    
console.log(Array.isArray(food));      // result: false // nai
console.log(Array.isArray(age));       // result: false // nai