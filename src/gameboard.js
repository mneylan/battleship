import { createShip } from "./ship"
import { clearBoard, showWinner, removeGameListener, newGameButton } from "./dom"
import { placeComputerPatrolBoat, placeComputerSub, placeComputerBattleship, placeComputerCarrier, generateAllCoordinates } from "./cpuShipPlacement.js"
import { newGame } from "./index.js"

export let tests = {}

export let gameBoard = () => {
  let ships = []
  let missedShots = []

  let placeShip = (length, coordinates) => {
    let ship = createShip(length, coordinates )
    ships.push(ship)
  }

  let placeAllComputerShips = function() {
    
    let patrol = placeComputerPatrolBoat(generateAllCoordinates(), this)
    
    let sub1 = placeComputerSub(patrol, this)
    let sub2 = placeComputerSub(sub1, this)
    let battleship = placeComputerBattleship(sub2, this)
    let carrier = placeComputerCarrier(battleship, this)
    
  }

  let receiveAttack = (coordinates) => {
    
    for (let i = 0; i < ships.length; i++) {
      let ship = ships[i]
      for (let j = 0; j < ship.length; j++) {
        if (ship.boardPositions[j].toString() == coordinates.toString()) {
          ship.hit(coordinates)
          
          return
        }
      }
    }
    missedShots.push(coordinates) 
    
  }

  let checkSunk = (otherPlayer) => {
    let newships = [...ships]
    
    let allSunk = newships.filter(ship => ship.isSunk())
    if (allSunk.length == 5) { 
      console.log(`All ships are sunk, ${otherPlayer} wins!`)
      
      showWinner(otherPlayer)
      removeGameListener()
      newGameButton()
      newGame()
      return true
    }
  }

  
  return {placeShip, placeAllComputerShips, receiveAttack, ships, missedShots, checkSunk}
}

// let newGame = gameBoard()
// newGame.placeShip(3, [[1, 1], [1, 2], [1, 3]])
// newGame.receiveAttack([1, 1])
// newGame.receiveAttack([1, 2])
// newGame.receiveAttack([1, 3])

// newGame.checkSunk()

// newGame.checkSunk()

tests.gameBoard = gameBoard



// let placeAllShips = () => {
  //   let lengths = [2, 3, 3, 4, 5 ]
  //   let coordinates = [
  //     [[1, 1], [1, 2]],
  //     [[2, 1], [2, 2], [2, 3]],
  //     [[3, 1], [3, 2], [3, 3]],
  //     [[4, 1], [4, 2], [4, 3], [4, 4]],
  //     [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]
    
  //   ]

  //   for (let i = 0; i < lengths.length; i ++) {
  //     let ship = placeShip(lengths[i], coordinates[i])
  //   }
  // }
