"use strict";

const account1 = {
  owner: "Mohammed Usama",
  password: 1111,
  username: "mu",
};
const account2 = {
  owner: "Usama",
  password: 2222,
  username: "usa",
};

const accounts = [account1, account2];

const openPage = document.querySelector(".open_page");
const mainContent = document.querySelector(".main__content");
const inputLoginUser = document.querySelector(".login_input--user");
const inputLoginPassword = document.querySelector(".login_input--password");

const buttonLogin = document.querySelector(".login_button");
const buttonRegister = document.querySelector(".register-button");

let currentAccount;
//Login button working: when clicked a new webpage will open for future database addition
buttonLogin.addEventListener("click", function (e) {
  e.preventDefault();
  let html = "";
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUser.value
  );
  if (currentAccount?.password === Number(inputLoginPassword.value)) {
    window.open("admin.html", "_parent");
    inputLoginUser.value = "";
    inputLoginPassword.value = "";
  } else {
    html = `
        <div>
            <p style="font-size: 2rem; text-align: center; color: rgba(235, 11, 11, 0.719);">Either Your Username or Password is Wrong</p>
        </div>`;
    buttonLogin.insertAdjacentHTML("afterend", html);
    inputLoginUser.value = "";
    inputLoginPassword.value = "";

    //alert("❌ Either Username or Password is Incorrect ❌");
  }
});

//REgister button working:   when click registor page opens
buttonRegister.addEventListener("click", function (event) {
  event.preventDefault();
  openPage.classList.add("hidden");
  mainContent.classList.remove("hidden");
});
