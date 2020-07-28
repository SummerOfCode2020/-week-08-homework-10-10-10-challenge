// function to compare two arrays quickly in my console.asserts
const matchArrays = ([arrayOneFirst, ...arrayOneRest], [arrayTwoFirst, ...arrayTwoRest]) => {
    if (arrayOneFirst !== arrayTwoFirst) return false

    if (arrayOneRest.length == 0 && arrayTwoRest.length == 0) return true

    return matchArrays(arrayOneRest, arrayTwoRest)
}

/*
@Challenge 01 - Write a function named 'everyonesFavorites' where you will be tasked to traverse through nested objects 
within an array to get everyones favorite things.
@Example - Your terminal should show something like "George's favorite color is green, his favorite animal is a Buffalo and his favorite sport is Football".
You could take it a step further and have each persons favorites be listed as shown above.
@Test - Make a function call of everyonesFavorites().
let everyone = [{
    person: 'George',
    favorites: {
        color: 'Green',
        animal: 'Buffalo',
        sport: 'Football'
    }
}, {
    person: 'Kristi',
    favorites:{
        color: 'Blue',
        animal: 'Dog',
        sport: 'Hockey'
    }
}, {
    person: 'Tiffany',
    favorites: {
        color: 'Purple',
        animal: 'Cat',
        sport: 'Basketball'
    }
}
]
*/
let everyone = [{
    person: 'George',
    favorites: {
        color: 'Green',
        animal: 'Buffalo',
        sport: 'Football'
    }
}, {
    person: 'Kristi',
    favorites: {
        color: 'Blue',
        animal: 'Dog',
        sport: 'Hockey'
    }
}, {
    person: 'Tiffany',
    favorites: {
        color: 'Purple',
        animal: 'Cat',
        sport: 'Basketball'
    }
}]

const everyonesFavorites = array => {
    let returnArray = []
    array.forEach(person => {
        const name = person.person
        const favColor = person.favorites.color
        const favAnimal = person.favorites.animal
        const favSport = person.favorites.sport
        const output = `${name}'s favorite color is ${favColor}, their favorite animal is a ${favAnimal}, and their favorite sport is ${favSport}`
        returnArray.push(output)
        console.log(output)
    })
    return returnArray
}

const expectedResult1 = [
    "George's favorite color is Green, their favorite animal is a Buffalo, and their favorite sport is Football",
    "Kristi's favorite color is Blue, their favorite animal is a Dog, and their favorite sport is Hockey",
    "Tiffany's favorite color is Purple, their favorite animal is a Cat, and their favorite sport is Basketball"
]

console.assert(matchArrays(everyonesFavorites(everyone), expectedResult1) === true, "Expected arrays to match")

/*
@Challenge 02 - Write a function named 'lottoWinner' Where if the numbers given match "05, 16, 28, 07, 54" you will get 
a notification that you have won. If it does not match you will get a notification saying you have lost.
@Example - If the numbers match you should see something like "Congrats! You're our next Lotto winner!!" and if they do not match "Better luck next time!"
@Test - Make a function call of lottoWinner().
*/

const lottoWinner = ([firstNum, ...rest]) => {
    const winningNumbers = [5, 16, 28, 7, 54]
    if (winningNumbers.filter(winningNumber => winningNumber === firstNum).length === 0) return 'Better luck next time, not a winner.'

    if (rest.length === 0) return 'You Won!'

    return lottoWinner(rest)
}

const goodNumbers = [5, 16, 28, 7, 54]
const badNumbers = [6, 17, 29, 8, 55]

console.assert(lottoWinner(goodNumbers) === 'You Won!', 'Expected a winner, got a loser.')
console.log(lottoWinner(goodNumbers))

console.assert(lottoWinner(badNumbers) === 'Better luck next time, not a winner.', 'Expected a loser, got a winner')
console.log(lottoWinner(badNumbers))
/*
@Challenge 03 - Write a function named 'characterCreation' Using our array from last weeks challenges this time you will be tasked with creating your own character.
Create your character and add it to the current array. Then have two players select who they want to play as.
@Example - After you add your new character you should get something like: Player one chose [New Character], Player two chose Dr Doof.
@Test - Make a function call characterCreation().
let player = [{
    character: {
        name: 'Mr Maximus',
        power: 'Psychic abilities'
    }
    }, {
    character: {
        name: 'Dr Doof',
        power: 'Mediocre tech skills'
    }
    }, {
        character: {
            name: 'Mad Margret',
            power: 'Super strength'
        }
    }
]
*/
const player = [{
    character: {
        name: 'Mr Maximus',
        power: 'Psychic abilities'
    }
}, {
    character: {
        name: 'Dr Doof',
        power: 'Mediocre tech skills'
    }
}, {
    character: {
        name: 'Mad Margret',
        power: 'Super strength'
    }
}]

const characterCreation = (array, playerOneChoice, playerTwoChoice) => {
    array.push({
        character: {
            name: 'Batman',
            power: 'Large bank account'
        }
    })

    const playerOneCharacter = array[playerOneChoice].character.name
    const playerTwoCharacter = array[playerTwoChoice].character.name

    const output = `Player one chose ${playerOneCharacter}, Player two chose ${playerTwoCharacter}.`

    console.log(output)
    return output

}
const expectResult3 = 'Player one chose Dr Doof, Player two chose Batman.'
console.assert(characterCreation(player, 1, 3) === expectResult3, 'Players did not choose the right characters')


/*
@Challenge 04 - Create a function called 'stringToNumArray' that takes in a single string of numbers and returns an array of numbers. 
@Example - A string of '42, 03, 54, 10' should come back as [42, 03, 54, 10].
@Test - Make a function call stringToNumArray()
*/
const stringToNumArray = (string) => {
    const array = string.split(", ")
    console.log(array)
    return array
}
const inputString4 = '42, 03, 54, 10'
const expectedResult4 = ['42', '03', '54', '10']
console.assert(matchArrays(stringToNumArray(inputString4), expectedResult4) === true, 'Arrays did not match')
/*
@Challenge 05 - Create a function called 'sumOfOnlyOdd' that takes an array and returns the sum of all the odd values.
@Example - An array of [10, 7, 5, 6, 3] should return 15.
@Test - Make a function call sumOfOnlyOdd()
*/
const sumOfOnlyOdd = array => {
    const result = array.filter(number => number % 2 === 1).reduce((acc, number) => acc + number)
    console.log(result)
    return result
}
const inputArray5 = [10, 7, 5, 6, 3]
console.assert(sumOfOnlyOdd(inputArray5) === 15, 'Expected 15')

/*
@Challenge 06 - Create a function called 'oddBall' where you take an array of numbers and filters out the odd numbers, then squares those numbers.
@Example - An array of [2, 3] would take the 3 out of the array then square it to equal 9.
@Test - Make a function call oddBall().
*/
const oddBall = array => {
    const result = array.filter(number => number % 2 === 1).reduce((acc, num) => acc + Math.pow(num, 2), 0)
    console.log(result)
    return result
}
const inputArray6 = [2, 3]
console.assert(oddBall(inputArray6) === 9, 'Expected 9')
/*
@Challenge 07 - Crete a function called 'checkObjectForProperty' that takes two parameters, the first is an object the second is a string.  
The function should check to see if the object, first parameter, has a property with the name of the second parameter. If it does it returns the value of the value in that property. 
If it doesn't exist then add the second parameter, as a property, to the object and set its value to "new record" and then returns that new value.
@Example - let obj = {stringParam}, let stringParam = 'This is my string': since our "obj" variable has a property within it with the same name as our string variable,
we expect it to return "This is my string" within our terminal. but if let obj = {noMatch} then you must add "stringParam" to that obj variable.
@Test - Make a function call checkObjectForProperty(object, string).
*/

const checkObjectForProperty = (object, string) => {
    if (object.hasOwnProperty(string)) {
        console.log(object[string])
        return object[string]
    }

    object[string] = 'New record'
    console.log(object[string])
    return object[string]

}

const testObject7 = {
    stringParam: 'This is my string'
}
const testNew7 = 'newParam'
const testExisting7 = 'stringParam'
console.assert(checkObjectForProperty(testObject7, testExisting7) === 'This is my string', "Output did not match")
console.assert(checkObjectForProperty(testObject7, testNew7) === 'New record', "Output did not match")
/*
@Challenge 08 - Create a 'numbers.js' file and create an array variable called 'numbers' within that file.
Then import the array 'numbers' from the file 'numbers.js' into the 'index.js' file. Then create a function called 'displayNumbers' that logs the "numbers" variable to the console.
@Example - in your numbers.js file you should have an array like [1,2,3,4] and after creating your function in your index.js file you should get 1, 2, 3, 4 to return in your terminal.
@Test - Make a function call displayNumbers() and be sure to set up your imports and exports between your two files.
*/
const numbersArray8 = require('./numbers')
const {
    indexOf
} = require('./numbers')

const displayNumbers = numbersArray => {
    const result = numbersArray.toString()
    console.log(result)
    return result
}

console.assert(displayNumbers(numbersArray8) === '1,2,3,4,5,6,7,8', "Output did not match")

/* 
@Challenge 09 - Create a function called 'tigersOnTheFarm' where you are given an array of farm animals and you need to remove the ones that do not belong
using the .pop() method. The .pop() removes the last item in the array, so you will have to make sure the element that you have to remove is in the last spot of the array.
@Example - You need to change the 'farmAnimals' array to be ['Cow', 'Chicken', 'Pig', 'Tiger']
@Test - Make a function call tigersOnTheFarm()
*/
let farmAnimals = ['Cow', 'Tiger', 'Chicken', 'Pig']

const tigersOnTheFarm = array => {
    let tigerIndex = array.indexOf('Tiger')
    array.push(array[indexOf])
    array.splice(tigerIndex, 1)
    array.pop()

    console.log(array)
    return array
}
const expectedResult8 = ['Cow', 'Chicken', 'Pig']
console.assert(matchArrays(tigersOnTheFarm(farmAnimals), expectedResult8) === true, 'Arrays did not match')
/* 
@Challenge 10 - Create a function called 'ultimateReversal' where if a palindrome is sent through it it will return true, and will return false otherwise.
@Example - A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. So if a word like 'Eye' is
sent through the function you should get a return of true because if you spell it backwards it still says Eye, but a word like Orange should return false.
@Test - Make a function call ultimateReversal()
*/

const ultimateReversal = string => {
    const reverseString = string.split("").reverse().join("").toLowerCase()
    const lowerString = string.toLowerCase()

    console.log(reverseString == lowerString)
    return reverseString == lowerString
}

const testValid10 = 'Eye'
const testInvalid10 = 'Orange'

console.assert(ultimateReversal(testValid10) === true, "Expected test to be true")
console.assert(ultimateReversal(testInvalid10) === false, "Expected test to be false")