
// // console.log("%cHello,Priya","color:red; font-size:40px");

// // var petDog="Rex";
// // var petCat="Pepper";
// // console.log(petDog);
// // console.log(petCat);

// // console.log("My pet dog's name is: ", petDog);
// // console.log("My pet cat's name is: ", petCat);

// // var catSound="purr";
// // var dogSound="woof";

// // console.log(petDog,"says",dogSound);
// // console.log(petCat,"says",catSound);

// // var catSound="meow";

// // console.log(petCat,"now says",catSound);


// // var num1=2;
// // var num2=5;
// // var test1=num1%2;
// // var test2=num2%2;
// // var result1=test1!=0;
// // var result2=test2!=0;

// // console.log("IS",num1,"an even number?",result1);
// // console.log("IS",num2,"an even number?",result2);


// //if else
// var age=10;
// if(age>=65){
//  console.log("You get your income from your pension.");
// }
// else if(age<65 && age>=18){
//     console.log("Each month you get a salary.");

// }else if(age<18){
//     console.log("You get an allowance.")
// }else{
//     console.log("The value of the age variable is not numerical.")
// }

// //Switch case

// var day="Sunday";

// switch (day){
//     //add your conditions....
//   case "Monday":
//     console.log("Do something");
//     break;

//   case "Tuesday":
//     console.log("Do something");
//     break;
//   case "Wednesady":
//     console.log("Do something");
//     break;
//   case "Thrusday":
//     console.log("Do something");
//     break;
//   case "Friday":
//     console.log("Do something");
//     break;
//   case "Satday":
//     console.log("Do something");
//     break;
//   case "Sunday":
//     console.log("Do something");
//     break;
//  default:
//     console.log("Do something");
//     break;


// }

// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

// var i=1;
// switch(i){
//     case 1:
//         console.log("Gold medal");
//         break;
//     case 2:
//         console.log("Silver medal");
//         break;
//     case 3:
//         console.log("Bronze medal");
//         break;
    
//     default:
//         console.log(i);
//         break;
// }

// function

// function letterFinder(word,match){
//     for(var i=0;i=word.length();i++){
//         if(word[i]==match){
//             word[i];
//         console.log('Found the', match, 'at', i)
//         }else{
//         console.log('---No match found at', i)
//         }
//     }
// }

// letterFinder("test","t");

// var clothes=[];
// clothes.push("jeans");
// clothes.push("Tops");
// clothes.push("Saare");
// clothes.push("Kurti");
// clothes.push("Skirts");

// clothes.pop();

// clothes.push("Blazer");
// console.log(clothes[2]);

// var favCar={};
// favCar.color="red";
// favCar.covertible="true";
// console.log(favCar);

// function addTwoNums(a,b){
//    try{
//     if(typeof(a)!="number"){
//         throw new ReferenceError("the first arguent is not a number");
//     }else if(typeof(b)!="number"){
//         throw new ReferenceError("the second argument is not a number.");
//     }else{
//         console.log(a+b);
//     }
//        console.log(a+b);
//    }catch(err){
//        console.log("Erroe!",err);
//    }
// }

// addTwoNums(5,"5");
// console.log("It still works");

// output
// Error! ReferenceError: the second argument is not a number.
//     at addTwoNums (file:///tmp/wqjmf/submission.mjs:16:15)
//     at file:///tmp/wqjmf/submission.mjs:26:1
//     at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
//     at async Loader.import (internal/modules/esm/loader.js:178:24)
//     at async Object.loadESM (internal/process/esm_loader.js:68:5)
//     at async handleMainPromise (internal/modules/run_main.js:59:12)
// It still works

// function letterFinder(word, match) {
//     var condition1=typeof(word)=="string" && word.length>=2;
//     var condition2=typeof(match)=="string" && match.length==1;
//     if(condition1 && condition2){
//     for(var i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }else{
//     console.log("Please pass correct arguments to the function.");
// }
// }

// letterFinder([],[]);
// letterFinder("cat","c");


class Human{
    eat(){
       console.log("Human can eats.");
    }
}

class Teacher extends Human{
    teaches(){
    super.eat()
    console.log("Teacher can teaches")
    }
}

class Doctor extends Human{
    teatment(){
        super.eat()
        console.log("Doctor can treat the patients.")
    }
}

var TutorTeacher=new Teacher();
var PetDoctor=new Doctor();
TutorTeacher.eat();
PetDoctor.eat();