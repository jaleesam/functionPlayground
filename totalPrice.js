// calculating the price of phone purchases
// keep buying the same phone purchase until you run out money
// also buy a phone case to go with this phone

const bestPhone = 250.00;
const tax = 0.08;
let bankBalance = 1100.00;
const phoneCase = 20.00;
let total = 0;
let  totalPhoneCost = 0;
let newTotal = 0;

function totalCost() {
    totalTax= bestPhone * tax;
    total = bestPhone + totalTax;
    total= "$" + total.toFixed(2);
    console.log(total);
    return total;    
}



function phoneAndTax() {
    totalPhoneCost = totalCost();
    totalPhoneCost = Number(totalPhoneCost.substr(1));
    return totalPhoneCost;
}

function buyAcces() {
    totalPhoneCost = phoneAndTax();
    totalAcces = phoneCase * tax;
    newTotal = totalPhoneCost + totalAcces;
    if (bankBalance > newTotal) {
        console.log("Yes, I want the case.")
        bankBalance = bankBalance - newTotal;
        return bankBalance;
    }
    else {
        console.log("No I thank you. I don't want a case.");
    }
};



function buyMultiPhones() {
    while (bankBalance > newTotal) {
        buyAcces();
        console.log("New bank balance: $"+ bankBalance.toFixed(2));
    }
};

buyMultiPhones();
