// 1 + 2

const logIn = (firstName, isLoggedIn) => {
    isLoggedIn == true ? console.log(`Hello ${firstName}!`) : console.log(`Please log in.`)
}

logIn(`ali`, false)
logIn(`ali`, true)

console.log('\n')

// 3

const calcArea = (length, width, rate, downP) => {
    let sqft = length*width
    console.log((sqft*rate)+downP)
}

calcArea(20,30,1.45,100)

console.log('\n')

// 4

const students = [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe'
  ]

  const studentListing = (array) => {
    for (let i = 0; i < array.length; i++){
        let firstName = array[i]
        let nameLength = array[i].length
        console.log(`${firstName} has ${nameLength} characters.`)
    }
  }

  studentListing(students)

  console.log(`\n`)

  // 5

const numLog = (limit) => {
    for (let i = 1; i <=limit; i++){
        if (i%3 == 0 && i%5 == 0){
            console.log(`FizzBuzz`)
        } else if (i%3 == 0){
            console.log(`Fizz`)
        } else if (i%5 == 0){
            console.log(`Buzz`)
        } else {
            console.log(i)
        }
    }
}



numLog(100)

console.log(`\n`)

// 6

const boardSize = 8

const checkerBoard =() => {
    for(i = 1; i <= boardSize; i++){
        pattern = ` #`
        let board = pattern.repeat(boardSize/2)
        if (i%2==0){
            console.log(board.substring(1))
        } else {
            console.log(board)
        }
    }
   
}

checkerBoard()
