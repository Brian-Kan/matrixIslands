const islandArray = [
    [1,1,0,0,0], 
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
]


// Part A
// Count the amount of land segments for any size grid.  1 = land

const island = function (array) {
    const islandCount = []
    for (i = 0; i < array.length; i++) {
       
        for (j = 0; j < array[i].length; j++) {
            
            // console.log("array[i][j] is: ", array[i][j])
            if ( array[i][j] === 1) {
                islandCount.push(1)
            }

        }
    }
    return islandCount.length
        
}

console.log(island(islandArray))


// Part B
// 