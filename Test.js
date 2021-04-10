/*function describeIndia(country, population, capital) {
    return `${country} has ${population} peoples and the capital is ${capital}`;
}
describeIndia= describeIndia('India', '2 Billion', 'Delhi');
console.log(describeIndia);

function percentOfWorld1 (country) {
    const totalPopulation=600;
    return `Percentage of population is ${country*100/totalPopulation}%`
}
const perInd= percentOfWorld1(4);
console.log(perInd);
const population1=[10, 20, 30, 40];
console.log(population1.length===5);
const percent =[percentOfWorld1(population1[0]), percentOfWorld1(population1[1]), percentOfWorld1(population1[2]), percentOfWorld1(population1[3]),]
console.log(percent)

const neighbours =['Russia', 'India', 'Indonesia'];
if(neighbours.includes('India')) {
    console.log('Probably Asia ');
}

neighbours[neighbours.indexOf('Indonesia')]='Republic of Indonesia';
console.log(neighbours);
*/
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    population: 1400,
    language: 'Hindi' ,
    
    rando: function() {
        document.write(`${this.country} is my country `);
    }
};
myCountry.rando();
/*console.log(this.language);

const listOfNeighbours = [
    ['Bangle','sri'],['china'],['nepal','tibet']
];
console.log(listOfNeighbours[0][1]);
*/

function submitfn () {
    setTimeout(alert("Thank you, Your form is submitted 👍 "), 300);
    
    
}
/*var DOMstrings= {
    fieldname1 :'entry.775039777'
}*/
function checkform(form) {
    //fieldname1 =    document.getElementById('entry.775039777');
    val = document.getElementById('entry.775039777').value;
    if(val==""){
        alert("Error: Input field empty");
        document.getElementById('entry.775039777').focus();
        return false;
    }
    alert("Thank you, Your form is submitted 👍 ");
    return true;
}

//document.querySelector('.heading').textContent=10;

document.querySelector('.entbut').addEventListener('click',function newf() {
    var numb= Number(document.querySelector('.inpclass').textContent=10);
//     document.querySelector('.heading').textContent=numb;
});

console.log(newf);
/*
document.querySelector('.entbut').addEventListener('click',function () {
    document.querySelector('.heading').textContent= prompt("What's your name ? ");
});*/