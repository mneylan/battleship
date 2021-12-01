


export let tests = {}

export let createShip = (length, boardPositions = [], hitPosition = [], sunk = false) => {

  let hit = (position) => {
    hitPosition.push(position)

    // if (hitPosition.length == length) { 
    //   sunk = true
    //   console.log('we sunk')
    // }
    
  }

  let isSunk = () => {
    return hitPosition.length == length 
  }

  return {length, boardPositions, hitPosition, sunk, hit, isSunk}
}

// let fiveShips = () => {
//   let numbers = [2, 3, 3, 4, 5]
//   for (i = 0; i < 5; i++) {
//     let ship = createShip(numbers[i])
//     ships.push(ship)
//   }
// }



tests.createShip = createShip






