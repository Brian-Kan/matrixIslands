const islandArray = [
    [1,1,0,0,0], 
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
]


// Part A
// Count the amount of land segments for any size grid.  1 = land

const islandTestA = function (array) {
    const islandCount = []
    for (i = 0; i < array.length; i++) {
       
        for (j = 0; j < array[i].length; j++) {

            console.log("array[i] is: ", array[i])
            console.log("array[i][j] is: ", array[i][j])
            if ( array[i][j] === 1) {
                islandCount.push(1)
            }

        }
    }
    return islandCount.length
        
}

// console.log(islandTestA(islandArray))


// Part B
// Count the amount of island segments for any size grid.

const islandTestB = function (array) {
    const islandCount = []
    for (i = 0; i < array.length; i++) {
       
        for (j = 0; j < array[i].length; j++) {

            // console.log("array[i] is: ", array[i])
            // console.log("array[i][j] is: ", array[i][j])

            // array[i + 1][j] === 0 || undefined
            // array[i - 1][j] === 0 || undefined
            // array[i][j + 1] === 0 || undefined
            // array[i][j - 1] === 0 || undefined

            // array[i + 1][j] !== 1
            // array[i - 1][j] !== 1
            // array[i][j + 1] !== 1
            // array[i][j - 1] !== 1

            // console.log(array[i + 1][j])
            // console.log(array[i - 1][j])
            // console.log(array[i][j + 1])
            // console.log(array[i][j - 1])

            if (array[i][j] === 1 && array[i + 1][j] !== 1 && array[i - 1][j] !== 1 && array[i][j + 1] !== 1 && array[i][j - 1] !== 1) {

                console.log(array[i][j])
                islandCount.push(1)
            }

        }
    }
    return islandCount.length
}

// console.log(islandTestB(islandArray))

// Part C
// Count the amount of island segments
// Recursion may be the key


// We need to check for '0's for cut off points
// We need to check for '1's for attachment points



const islandTestC = function (array) {
    const islandCount = []

    // Outer array
    for (i = 0; i < array.length; i++){
        for (j = 0; j < array[i].length; j++) {
            // check for 1s in an array
            if (array[i][j] === 0) {
                return "You have reached water"
            } else {
                // islandTestC()
            }

        }


    }


    // check if the array below has any adjacent 1s 

    // Consider all 1's in an array AND in adjacent arrays to be a single land mass
}

// IF recursion is to be made the following basics must be adhered to:
// It is an if statement
// The first condition of the if statement will STOP the recursion (STOP condition)
// The final condition will call itself.

// The first recursion function is to keep counting unknown until an uknown number of 1s is followed by a 0
