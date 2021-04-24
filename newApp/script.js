'use strict'

const account1 = {
    owner: 'Mohammed Usama',
    password: 1111,
    username: 'mu'
}
const account2= {
    owner: 'Usama',
    password: 2222,
    username: 'usa'
}

const accounts =[account1,account2];

const inputLoginUser = document.querySelector('.login_input--user');
const inputLoginPassword = document.querySelector('.login_input--password');

const buttonLogin = document.querySelector('.login_button');



let currentAccount;
buttonLogin.addEventListener('click', function (e) {
    e.preventDefault();
    let html='';
    currentAccount= accounts.find(account => account.username===inputLoginUser.value) 
    if (currentAccount?.password === Number(inputLoginPassword.value)) {
        window.open("admin.html","_parent");
        inputLoginUser.value="";
        inputLoginPassword.value="";
    }
    else {
        html =`
        <div>
            <p style="font-size: 2rem; text-align: center; color: rgba(235, 11, 11, 0.719);">Either Your Username or Password is Wrong</p>
        </div>`;
        buttonLogin.insertAdjacentHTML('afterend',html);
        inputLoginUser.value="";
        inputLoginPassword.value="";  

        //alert("❌ Either Username or Password is Incorrect ❌");
    }
    
});



