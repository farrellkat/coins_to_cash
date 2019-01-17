const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}

const quarterTest = (dollarAmount, value) => {
    if (dollarAmount % value === 0) {
        piggyBank.quarters = dollarAmount / value
    } else {
        if (dollarAmount % piggyBank.quarters !== 0) {
            remainder = dollarAmount % piggyBank.quarters
            piggyBank.quarters = Math.floor(dollarAmount / value)
            dollarAmount = dollarAmount - (piggyBank.quarters * value)
        }
    }
}
const dimeTest = (dollarAmount, value) => {
    if (dollarAmount % value === 0) {
        piggyBank.dimes = dollarAmount / value
    } else {
        if (dollarAmount % piggyBank.dimes !== 0) {
            remainder = dollarAmount % piggyBank.dimes
            piggyBank.dimes = Math.floor(dollarAmount / value)
            dollarAmount = dollarAmount - (piggyBank.dimes * value)
        }
    }
}
const nickelTest = (dollarAmount, value) => {
    if (dollarAmount % value === 0) {
        piggyBank.quarters = dollarAmount / value
    } else {
        if (dollarAmount % piggyBank.nickels !== 0) {
            remainder = dollarAmount % piggyBank.nickels
            piggyBank.nickels = Math.floor(dollarAmount / value)
            dollarAmount = dollarAmount - (piggyBank.nickels * value)
        }
    }
}
const penniesTest = (dollarAmount, value) => {
    if (dollarAmount % value === 0) {
        piggyBank.pennies = dollarAmount / value
    } else {
        if (dollarAmount % piggyBank.quarters !== 0) {
            remainder = dollarAmount % piggyBank.pennies
            piggyBank.pennies = Math.floor(dollarAmount / value)
            dollarAmount = dollarAmount - (piggyBank.pennies * value)
        }
    }
}

quarterTest(10, 0.25)

console.table(piggyBank)
