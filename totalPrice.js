// calucing the price of phone purchases
// keep buying the same phone purchase until you run out money
// also buy 

const bestPhone = 250.00;
const tax = 0.08;
let bankBalance = 1100.00;
const phoneCase = 20.00;
let total = 0;

function totalCost() {
    totalTax= bestPhone * tax;
    total = bestPhone + totalTax;
    total= "$" + total.toFixed(2);
    return total;
}


function phoneAndTax() {
    totalPhoneCost = totalCost();
    totalPhoneCost = Number(totalPhoneCost.substr(1));
    return totalPhoneCost;
}

function buyAcces() {
    
}


