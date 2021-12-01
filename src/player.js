import { gameBoard } from './gameboard.js'

export let tests = {}

export let createPlayer = () => {
  let board = gameBoard()
  
  let shotsAvailable = []

  let populateShotsAvailable = () => {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        shotsAvailable.push([i, j])
      }
    }
  }

  let computerAttack = () => { 

    let random = Math.floor((Math.random() * shotsAvailable.length))
    let randomAttack = shotsAvailable[random]
    
    shotsAvailable = shotsAvailable.filter(item => item != randomAttack)

    

    return randomAttack
    
  }

  let humanAttack = (item) => {
    
    let coordinate = item.target.dataset.id
    

    let attack = [10, 10]

    if (coordinate[0] + coordinate[1] == 10 && coordinate[3] + coordinate[4] == 10) {
      attack = [10, 10]
    }

    else if (coordinate[0] + coordinate[1] == 10) {
       attack = [parseInt(coordinate[0] + coordinate[1]), parseInt(coordinate[coordinate.length - 1])]
    
    } else if  (coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1] == 10) {
       attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1])]
    } else {
    
     attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]
    }
    
    return attack
    
  }


  return {board, shotsAvailable, populateShotsAvailable, computerAttack, humanAttack}
}

tests.createPlayer = createPlayer


// let humanAttack = (item) => {
    
//   let coordinate = item.target.dataset.id
//   console.log(coordinate)

//   let attack = [10, 10]

//   let attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]
  
//   if (coordinate[0] + coordinate[1] == 10 && coordinate[3] + coordinate[4] == 10) {
//     attack = [10, 10]
//   }

//   if (coordinate[0] + coordinate[1] == 10) {
//      attack = [parseInt(coordinate[0] + coordinate[1]), parseInt(coordinate[coordinate.length - 1])]
  
//   }

//   if (coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1] == 10) {
//     attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1])]
//   }
  
  
//   return attack
  
// }