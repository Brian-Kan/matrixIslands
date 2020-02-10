const islandMapOne = [
    [0,  1,  0,  1,  0], 
    [0,  0,  1,  1,  1], 
    [1,  0,  0,  1,  0], 
    [0,  1,  1,  0,  0], 
    [1,  0,  1,  0,  1]
]

const islandMapTwo = [
    [0,  1,  0,  1,  0], 
    [0,  0,  0,  1,  1], 
    [1,  0,  1,  0,  0], 
    [0,  1,  0,  0,  0], 
    [1,  0,  1,  0,  1]
]

//should return: 10

const landMap = [
    [1,  1,  1,  1,  1], 
    [1,  1,  1,  1,  1], 
    [1,  1,  1,  1,  1], 
    [1,  1,  1,  1,  1], 
    [1,  1,  1,  1,  1]
]


const landFinder = function (map) {
    const land = []
    map.forEach(function (latitude) {
        for (i = 0; i < latitude.length; i++){
            if(latitude[i] === 1){
                land.push(1)
            }            
        }
    })
    return land.length
}

const islandFinder = function (map) {
    const island = []
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            console.log("i is: ", i)
            console.log("j is: ", j)
            console.log("map[i][j]:", map[i][j])

            const north = map[i + 1][j]
            console.log("north is: ", north)

            const south = map[i - 1][j]
            console.log("south is: ", south)

            const east = map[i][j + 1]
            console.log("east is: ", east)

            const west = map[i][j - 1]
            console.log("west is: ", west)


            if (map[i][j] === 1 && (north === 0 || undefined) && (south === 0 || undefined) && (west === 0 || undefined) && (east === 0 || undefined)){
                island.push(1)
            }
        }
    }
    return island.length
}

// islandMapOne
// islandMapTwo
// landMap

let mapLand = islandFinder(islandMapTwo)

console.log(mapLand)