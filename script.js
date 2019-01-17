// let dollarAmount = 0

// const piggyBank = {
//     quarters: 20,
//     dimes: 34,
//     nickels: 55,
//     pennies: 234
// }

// const teller = function (piggyBank) {
// dollarAmount += (piggyBank.quarters * 0.25)
// dollarAmount += (piggyBank.dimes * 0.10)
// dollarAmount += (piggyBank.nickels * 0.05)
// dollarAmount += (piggyBank.pennies * 0.01)
// return dollarAmount
// }

// teller(piggyBank)
// console.log(dollarAmount)

let dollarAmount = 1
let remainder = 0

const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}

// Now with Functions

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



// const changeMaker = (dollarAmount) => {
//     quarterTest(dollarAmount, 0.25)
//     if (dollarAmount === 0) {

//     }
//     dimeTest(dollarAmount, 0.10)
//     if (dollarAmount === 0) {
        
//     }
//     nickelTest(dollarAmount, 0.05)
//     if (dollarAmount === 0) {
        
//     }
//     penniesTest(dollarAmount, 0.01)
//     if (dollarAmount === 0) {
       
//     }
// }


// changeMaker(dollarAmount)
// console.log(piggyBank)


SUCCESS!
const changeMaker = (dollarAmount) => {

    if (dollarAmount % 0.25 === 0) {
        piggyBank.quarters = dollarAmount / 0.25
    } else {
        if (dollarAmount % piggyBank.quarters !== 0) {
            remainder = dollarAmount % piggyBank.quarters
            piggyBank.quarters = Math.floor(dollarAmount / 0.25)
            dollarAmount = dollarAmount - (piggyBank.quarters * 0.25)
        }
        if (remainder % 0.10 === 0) {
            piggyBank.dimes = dollarAmount / 0.10
        } else {
            if (dollarAmount % piggyBank.dimes !== 0) {
                remainder = dollarAmount % piggyBank.dimes
                piggyBank.dimes = Math.floor(dollarAmount / 0.10)
                dollarAmount = dollarAmount - (piggyBank.dimes * 0.10)
            }
            if (remainder % 0.05 === 0) {
                piggyBank.nickels = dollarAmount / 0.05
            } else {
                if (dollarAmount % piggyBank.nickels !== 0) {
                    remainder = dollarAmount % piggyBank.nickels
                    piggyBank.nickels = Math.floor(dollarAmount / 0.05)
                    dollarAmount = dollarAmount - (piggyBank.nickels * 0.05)
                }
                if (remainder % 0.01 === 0) {
                    piggyBank.pennies = dollarAmount
                } else {
                    if (dollarAmount % piggyBank.pennies !== 0) {
                        remainder = dollarAmount % piggyBank.pennies
                        piggyBank.pennies = Math.floor(dollarAmount / 0.01)
                        dollarAmount = dollarAmount - (piggyBank.pennies * 0.01)
                    }
                }
            }


        }

    }

}


// changeMaker(dollarAmount)
// console.log(piggyBank)
