// //TASK NO. 1
// function findLeapYear(){
//    // Get full year from Date Class
//     let currentYear = new Date().getFullYear()
//    //  chack for leap year
//     if ( currentYear % 4 == 0 && currentYear % 100 !== 0 || currentYear % 400 === 0)
//     {
//         console.log( currentYear + " is a leap year.");   
//     }
//     else {
//         console.log( currentYear + " is not a leap year.");   
//      }
// }
// findLeapYear()


// TASK NO. 2: Find leap years in upcoming 10 years
// function findNextLeapYears(year){
//     let currentYear = new Date(). getFullYear()
//     // Create an empty array to store leap years
//     let leapYears = []

//     // Itrate loop to find leap years from current year to user desired year
//      for ( let i = currentYear; i <+ year; i++){
//         if ( i % 4 == 0 && i % 100 !== 0 || i % 400 === 0)
//             {
//                 // Push leap year into Array
//                 leapYears.push(i)
//             }
//      }
//      console.log(`list of leap years from ${currentYear} to ${year} :\n [${leapYears}]`)
// }
// findNextLeapYears(2033)


// TASK NO. 3: Create a function to generate 5 digit otp.
// function OTP (){
//     let otp = ""

//     run for loop to generate 6 random number
//     for (i = 0 ; i < 6 ; i++)
//     {
//         Generate random number 0 to 9
//         let digit = Math.floor(Math.random() * 10)
//         otp += digit
//     }

//     console.log(`Your OTP is : ${otp}`)
// }

// OTP()


// TASK NO. 4 : Create function to convert string into capital form
    // function stringConversetion(ChangeString){
    //     return string.toUpperCase()
    // }
    // let string = "Bano Qabil"
    // console.log(stringConversetion(string))

// Task No. 5: Create an Age colculator. This calculator tell you exact age.
// function ageCalculator(dob) {
//     let currentDate = new Date()
//     let birthDate = new Date(dob)
//     let Year = currentDate.getFullYear() - birthDate.getFullYear()
//     let month = currentDate.getMonth() - birthDate.getMonth()
//     let day = currentDate.getDate() - birthDate.getDate()
//     // chack it the month is greater then current mont or it month is equal to current month and days are  days 
//     if (month < 0 || (month === 0 && day < 0)) {Year
//         // Decrease one
//         Year--
//         // Add 12 in month then it come to your acual month
//         month += 12
//     }
//     // If only days is greater then 31
//     if (day < 0) {

//         let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0)
//         day += prevMonth.getDate()
//         month--
//     }
//     return `Your age is ${Year} Years, ${month} Months and ${day} Days`
// }

// let BirthDay = prompt("Enter your age in form of (MM-DD.YYYY)")
// console.log(ageCalculator(BirthDay))