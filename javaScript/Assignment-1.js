// TASK NO. 1
// let zakatPersentage = 0.025;
// let totalAssest = +prompt("Please enter your total assests")
// // This line count the persentage of zaket?
// let result = (totalAssest * zakatPersentage)/ 100
// // this line convert zaket persantage from actual value and write it on document windows.
// alert(`Your ZAKAT value is Rs.${result * 100}`)


// TASK NO. 2:
// let familyMembers = +prompt("Welcome to Fitrah Calculation please enter your family members:")
// let fitrahMathod = +prompt("Please a mathod for Sadqaat Fitrah to pay.\n1. Money\n2. Kahjoor\n3. Wheat")
// let moneyPerPerson = 170;
// let kahjoorPerePerson = 0.62
// let wheatPerPerson = 1.38;
// let total = 0

// if (fitrahMathod === 1){
//     total = moneyPerPerson * familyMembers
//     alert("Total Fitrah = "+ total + " Pkr.")
// }
// else if (fitrahMathod === 2){
//     total = kahjoorPerePerson * familyMembers
//     alert("Total Fitrah = "+ total + " Kg kahjoor.")

// }
// else if  (fitrahMathod === 3){
//     total = wheatPerPerson * familyMembers
//     alert("Total Fitrah = "+ total + " Kg Wheat.")
// }
// else{
//     alert("Sorry wron selection.")
// }



// TASK NO. 3:
// this line generate random number from one to 10
// let secretNumber = Math.round(Math.random()*10)
// console.log(secretNumber)
// // console.log(secretNumber);
// let userInput = +prompt("Please guess a number between 1 to 10.")
// if (userInput === secretNumber)
// [
//     alert("Congratulations! You guessed the secret number")
// ]
// else {
//     alert("You guess wrong number! Please try again.")
// }


// TASK NO. 4:
// let myName = prompt("Enter your name:").toUpperCase()
// let firstLetter = myName.slice(0,1)
// console.log(`Your name is ${firstLetter}${myName.slice(1).toLowerCase()}`);


// TASK NO. 5:
// let contactName = []
// let contacktNumber = []

// // Run for loop to take name and contact No. from user
//  for (let i = 0; i < 3; i++)
//  {
//     let cname = prompt("Enter your name:")
//     let cnumber = +prompt("Enter your contact number:")
//     // push value into array
//     contactName.push(cname)
//     contacktNumber.push(cnumber)
//  }
// //  Run for loop to extract value from array
// for (let i = 0; i < contactName.length;i++)
// {
//     console.table(`Name: ${contactName[i]}  Contact No.: ${contacktNumber[i]}`)
// }


// TASK NO. 6:
// let foodProduct = ["grain", "wheat", "rye", "oats", "corn", "rice"]

// let userInput = prompt(`We have an array of these products : ${foodProduct}.\nplease enter position  of product to remove from array. `).toLowerCase()
// // remove desired item form array
// let removItem = foodProduct.splice(userInput-1,1)
// console.log(`Removed item is : ${removItem}`);
// console.log(`Remaining items in array are : ${foodProduct}`);


// TASK NO. 7:
// let nationality = prompt("Please enter your nationality to vote.").toLowerCase()
// if (nationality === "pakistani" || nationality === "indian") {
//     let genter = +prompt("Please enter your gender. \n1, Male\n 2. Female")
//     if (genter === 1 ) {
//         let mage = +prompt("Please enter your age.")
//         if (mage >= 18) {
//             alert("Congratulations! you are eligible to vote.")
//         }
//         else {
//             alert("Sorry! you are under 18 and you are not eligibl to vote")
//         }
//     }
//     else if (genter === 2) {
//         let fage = +prompt("Please enter your age.")
//         if (fage >= 18) {
//             let meritalStatus = +prompt("Are you Marreid?\n1. Yes\n2, No")
//             if (meritalStatus === 1) {
//                 alert("Congratulations! you are eligible to vote.")
//             }
//             else {
//                 alert("Sorry! your are no eligible to vote.")
//             }
//         }
//         else {
//             alert("Sorry! your are no eligible to vote.")
//         }
//     }
//     else {
//         alert("Sorry! your are no eligible to vote.")
//     }
// }
// else {
//     alert("Sorry! your are no eligible to vote.")
// }


// TASK NO. 8
let worldCupSquad = ["Babar Azam", "Shadab Khan", "Faheem Ashraf", "Fakhar Zaman", "Haris Rauf", "Iftikhar Ahmed", "Ihsanullah", "Imad Wasim", "Mohammad Haris", "Naseem Shah", "Mohammad Rizwan", "Shaheen Shah Afridi", "Shan Masood", "Zaman Khan", "Saim Ayub"]

let squad11 = []
for (let i = 0; i < 11; i++) {
    let select = +prompt("select squad for tomorrow match in the following array.")
    let selectPlayer = worldCupSquad.splice(select-1,1)
    squad11.push(selectPlayer)
}
console.log(`Your selected squada is:\n ${squad11}`)