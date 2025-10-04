const account = document.getElementById("account")
const cash = document.getElementById("cash")
const result = document.getElementById("result")
let current_account = 0
let current_cash = 0

function calc(x,y) {
    current_account += Number(x)
    current_cash += Number(y)
    const history_deploy =  `Current account balance : ${current_account}  , Current cash balance : ${current_cash}\n`
    result.value += history_deploy
}

let 
function money(x){

}