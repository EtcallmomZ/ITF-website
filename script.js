

const account = document.getElementById("account")
const cash = document.getElementById("cash")
const result = document.getElementById("result")
let current_account = 0
let current_cash = 0

function calc(x,y) {
    current_account += Number(x)
    current_cash += Number(y)
    const history_log =  `Current account balance : ${current_account}, Current cash balance : ${current_cash}\n`
    result.value += history_log
}

function operator() {
    const type = document.getElementById("money").value
    const amount = Number(document.getElementById("amount").value)
    if (type == "Deposite"){
        current_account += amount
        current_cash -= amount
        const history_log = `Deposit : ${amount}, Currect account balance : ${current_account}, Current cash balance : ${current_cash}\n`
        result.value += history_log
    }
    else if (type == "Withdraw"){
        current_account -= amount
        current_cash += amount
        const history_log = `Withdraw : ${amount}, Currect account balance : ${current_account}, Current cash balance : ${current_cash}\n`
        result.value += history_log
    }
}

document.getElementById("convert").addEventListener("click")