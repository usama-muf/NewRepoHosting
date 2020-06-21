//  let and const 

// ES5
 /*var name5="mohammed Usama";
var age5= 22;
name5="Mohammed Usama FArooqui";


console.log(name5+' '+age5);
*/

//ES6  (use const where value is fixed whereas use let where value may change, like will change every year )

/*const name6='Mohammed Usama';
let age6=22;
name6='farooqui';

console.log(name6);*/
//*******************************************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*--*-*-

// Drivers Licence ................ES5

/*function driverLicence(passTest){
    if(passTest)
        {
            var firstname='usama';
        var    age=22;
        }
    
    console.log(firstname+' '+age);
}
driverLicence(true);
*/

//// Drivers Licence ................ES6

//***************************************
//---------------*-*-*-------------------

//          Arrow 
//              ES5

/*const years=[1998,1930,2001,1987];

var age5= years.map(function(el){
    return 2020-el;
});
//console.log(age5);

let ages6=years.map(el=>2020-el);

ages6=years.map((el, index)=>`your age is ${2020-el} at index ${index+1}`);

ages6=years.map((el, index)=>{
    
    let now= new Date().getFullYear();
    let age=now-el;
    return `your age is ${age} at index ${index+1}`;
    
});




console.log(ages6);

*/
/*
const box66={
    button:'red',
    index:1,
    clickMe:()=>{
        document.querySelector('.btn-1').addEventListener('click',()=>{
            var src=`this is box ${this.index} and the color is ${this.button}`;  
            alert(src);
console.log(src);
});
    }
    
}
box66.clickMe();
*/
//                          ES5


/*function Person(name){
    this.name=name;
    
}

Person.prototype.myFriends=function(friends){
    
    var arr=friends.map(function(el){
        return this.name +' is friends with '+ el;
    }.bind(this));
    console.log(arr);
    
}
var friends=['John', 'mike' ];

new Person('usama').myFriends(friends);


*/






//                      ES6


/*

function Person(name){
    this.name=name;
}

Person.prototype.friends=function(friends){
    
    
    
 var arr=friends.map(el=>{
        return `${this.name} is friends with ${el}`
    });
    console.log(arr);
    
}
var friends=['John', 'mike' ];

new Person('usama').friends(friends);


*/


//--------------------------------------------
//-*****************************************--

//            Destructuring
/*

//ES5

var details=['usama', 22];
//var name=details[0];
//var age= details[1];



//  ES6


var [FirstName, SecondName]= ['Mohammed ', "usama"];
console.log(FirstName);
console.log(SecondName);

var getAgeAndRetirenent=function(year){
    
    const age= new Date().getFullYear()-year;
    return [age, 65-age];
    
}

const [age, retirement]=getAgeAndRetirenent(1998);



console.log(age);
console.log(retirement);

*/


//*******************************************
/*
var buttons= document.querySelectorAll(".btn");
//ES5
var btnArr5= Array.prototype.slice.call(buttons);
btnArr5.forEach(function(curr){ curr.style.backgroundColor= 'blue';
});

//ES6
const buttonArr6=Array.from(buttons);
Array.from(buttons).forEach(curr=>curr.style.backgroundColor='blue');

*/

//ES5
/*var ButtonArr5=Array.prototype.slice.call(buttons);

for(var i=0; i< btnArr5.length;i++ ){
    
    if(btnArr5[i].className==='btn blue'){
        continue;
    }
    else
    {btnArr5[i].textContent='I Changed My Color!';
     btnArr5[i].style.color='white';
    }
    
/
//    ES6


for(const curr of buttonArr6 ){
    
    if(curr.className.includes(' blue')){
        continue;
    }
    else
    {curr.textContent='I Changed My Color!';
     curr.style.color='white';
    }
    
}

}
//      ES5

var ages=[10,12,05,23,14,16, 47];
var full=[];
 full=ages.map(function(current){
    return current>=18; 
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//  findIndex Operator        ES6

console.log(ages.findIndex(curr=> curr>=18));
console.log(ages.find(curr=>curr>=18));
*/
//********************************************
//*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-



//spread operator
/*
function sumOfNum(a,b,c,d,e,f,g){
    return a+b+c+d+e+f+g;
    
}
 
var number=[30,24,20,142,8,19,30];
//ES5
var sum1=sumOfNum.apply(this, number)
console.log(sum1);

//ES6

const sum2= sumOfNum(...number);
console.log(sum2);

const family1=['cat','horse', 'rabbit'];
const family2=['lion','Rhino', 'snake'];

const familyall=[...family1, ...family2,...number];
console.log(familyall);



var h= document.querySelector('h1');
var btn= document.querySelectorAll('.btn');

var mix=[h,...btn];
Array.from(mix).forEach(cur=> cur.style.backgroundColor='Purple' );
Array.from(mix).forEach(cur=> cur.style.color='Red' );

*/

//--------------------------------------------
//**********************************************



//Rest Parameter 

/*function isFullAge(...years){
   //var now =Date().getFullYear();  
    years.forEach(curr=>console.log(2020-curr>=18));
    
}

isFullAge(2019,1990,1923);







//ES5

function isFullAge(limit){
    var argsaArr= Array.prototype.slice.call(arguments,1);
    
    argsaArr.forEach(function(curr){
        console.log((2020-curr)>=limit);
        
    });
}
isFullAge(0,2020,2030,2000);




//ES6
function isFull(limit, ...years){
    
    years.forEach(curr=> console.log((2020-curr)>=limit));
    
    
}
isFull(12,2020,2018,2000);


*/
//---------------------------------------
//***************************************


//Default
/*
function usamaFamily(firstName, yearOfBirth, lastName='usama', country='india'){
    this.firstname=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.country=country;
    
}
var mohammed= new usamaFamily('mohammed',1998,'umar' ,'america');
//console.log(usamaFamily('mohammed ', 1988));


*/

//////////////////////////////////////////////
//*******************************************


(function(){
var Questions= new Map();
Questions.set('ques', 'Which lake is the largest lake in the world?');
Questions.set(1,'lake baikal');
Questions.set(2,'lake superior');
Questions.set(3,'lake victoria');
Questions.set(4,'lake titicaca');
Questions.set('answer', 1);
Questions.set(true,'your Answer is Correct :D');
Questions.set(false,'your Answer is Wrong, Please try again');

console.log(Questions);

console.log(Questions.get('ques'));
var ansUser= parseFloat(prompt('Enter Your Answer Here'));

 
console.log((ansUser===Questions.get('answer'))?Questions.get(true):Questions.get(false));


/*Questions.delete(4);
console.log(Questions);
Questions.clear();
console.log(Questions);
*/

})();



























































