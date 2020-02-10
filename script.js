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

let mapLand = landFinder(islandMapTwo)

console.log(mapLand)