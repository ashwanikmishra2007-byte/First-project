let heading = document.querySelector(".heading");
let money = document.querySelector("#money");
let heads = document.querySelector(".heads");
let tails = document.querySelector(".tails");
let play = document.querySelector(".play");
let reset = document.querySelector(".reset");

let balance=100;

let choice;

$(reset).hide();

playgame();
function heads1() {
    choice="Heads";
    console.log("Heads choosen");
    playtime();
}

function tails1() {
    choice="Tails";
    console.log("Tails choosen");
    playtime();
}

function playgame() {
    heads.addEventListener('click', heads1, false);
    tails.addEventListener('click', tails1, false);
}

function playtime() {
    arr=["Heads", "Tails"];
    let rand = Math.floor(Math.random()*arr.length);
    let randbet=arr[rand];
    if(randbet==choice) {
        console.log("You Won");
        play.textContent="CONGRATULATIONS, You Won 100$";
        balance=balance+100;
        console.log(balance);
        money.textContent=balance;
    } else {
        console.log("You lost");
        play.textContent="SORRY, You Lost 100$";
        balance=balance-100;
        money.textContent=balance;
    }
    $(reset).show();
}

reset.addEventListener('click', resetgame, false);

function resetgame() {
    $(reset).hide();
    play.textContent="Choose heads or tails";
    balance=100;
    money.textContent=balance;
}






