// Code your solution in this file!
//grabs first 2 drivers of array
const returnFirstTwoDrivers = array => array.slice(0,2)
//grabs last 2 drivers of array
const returnLastTwoDrivers = array => array.slice(array.length - 2, array.length)
//selecting drivers is an array of 2 functions
//allows us to invoke either function from the array
//example of invoking: const result1 = selectingDrivers[0](driversArray);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//takes multiplier as parameter, then creates a new anonymous function hat multiplies the amount by the multiplier
//requirement was one initial parameter, otherwise couldve done both
const createFareMultiplier = multiplier => amount => amount * multiplier;

//longer way of writing same thing:
// const createFareMultiplier = multiplier => {
//     return function(amount) {
//         return amount * multiplier
//     }
// }

//doubles fare amount
//for example, fareDoubler(4) = 8
const fareDoubler = createFareMultiplier(2)
//triples
const fareTripler = createFareMultiplier(3)

//takes an array and one of the 2 functions in selectingDrivers array as parameters
//would be called as selectDifferentDrivers(["Alice", "Bob", "Charlie", "Dave", "Eve"], returnFirstTwoDrivers)
const selectDifferentDrivers = (array,selectingFunction) => selectingFunction(array)