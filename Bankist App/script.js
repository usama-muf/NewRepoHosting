'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Mohammed Usama',
  movements: [5000, 1000, 10000, -5050, -990],
  interestRate: .1,
  pin: 5555
};

const accounts = [account1, account2, account3, account4,account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
const displayMovements =function(movements) {
  containerMovements.innerHTML='';
  movements.forEach(function (mov, i) {

    const type = mov>0?'deposit':'withdrawal'
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov} ₹</div>
    </div>`;
      containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

const calcDisplayBalance = function(movements) {
  //let total=0;
  const total = movements.reduce((pval, currval) =>pval+currval,0);
  console.log(total);
  labelBalance.textContent=`${total} ₹`;

}

const calcSummary = function (account) {

const inSummary =  account.movements.filter(mov =>mov>0).reduce((pval, currval) => pval+currval,0);
console.log(inSummary);
labelSumIn.textContent=`${inSummary} ₹`;

const outSummary =  account.movements.filter(mov =>mov<0).reduce((pval, currval) => pval+currval,0);
console.log(outSummary);
labelSumOut.textContent=`${Math.abs(outSummary)} ₹`;

const interest = inSummary/account.move
//account.interestRate.filter(mov => mov>0).reduce((pval,currval) => pval+currval,0).reduce()
}


//////////////////////////////////////////
//addding username in account objects

/////////////////////
for (const acc of accounts) {
  acc.username=
  acc.owner
  .toLowerCase()
  .split(' ')
  .map(function(t) { return t[0] })
  .join('');

}

//login button working
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount=accounts.find(acc => acc.username===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)) {
    containerApp.style.opacity=100;
  }
  displayMovements(currentAccount.movements);

  calcDisplayBalance(currentAccount.movements);

  calcSummary(currentAccount);


});
console.log(currentAccount);

