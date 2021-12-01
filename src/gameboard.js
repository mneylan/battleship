import { createShip } from "./ship"
import { clearBoard, showWinner, removeGameListener } from "./dom"

export let tests = {}

export let gameBoard = () => {
  let ships = []
  let missedShots = []

  let placeShip = (length, coordinates) => {
    let ship = createShip(length, coordinates )
    ships.push(ship)
  }

  let placeAllShips = () => {
    let lengths = [2, 3, 3, 4, 5 ]
    let coordinates = [
      [[1, 1], [1, 2]],
      [[2, 1], [2, 2], [2, 3]],
      [[3, 1], [3, 2], [3, 3]],
      [[4, 1], [4, 2], [4, 3], [4, 4]],
      [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]
    
    ]

    for (let i = 0; i < lengths.length; i ++) {
      let ship = placeShip(lengths[i], coordinates[i])
    }
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
      return true
    }
  }

  let placeComputerPatrolBoat = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array
  
    let valid = false
    let firstCoordinate = generateFirstCoordinate()
  
      let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        valid = checkValid(availableCoordinates, secondCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
          valid = true
        }
      }
    }
  
    if (direction > 0) {
      valid = false
      firstCoordinate = generateFirstCoordinate()
  
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        valid = checkValid(availableCoordinates, secondCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
          valid = true
        }
      }
    }
    placeShip(2, [firstCoordinate, secondCoordinate])
    
    
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())

    return availableCoordinates
      
  } 

  let placeComputerSub = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true ) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true ) {
          valid = true
        }
        
      }
    }
    placeShip(3, [firstCoordinate, secondCoordinate, thirdCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString())

    
    return availableCoordinates
    
  }
  
  let placeComputerBattleship = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
        checkValid(availableCoordinates, fourthCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
        checkValid(availableCoordinates, fourthCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
          valid = true
        }
        
      }
    }
    placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

    console.log(availableCoordinates.length)
    return availableCoordinates
  }

  let placeComputerCarrier = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]

    let fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
        checkValid(availableCoordinates, fourthCoordinate)
        fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true && checkValid(availableCoordinates, fifthCoordinate) == true) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
        checkValid(availableCoordinates, fourthCoordinate)
        fifthCoordinate = [fourthCoordinate[0] + 1, fourthCoordinate[1]]
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true && checkValid(availableCoordinates, fifthCoordinate) == true) {
          valid = true
        }
        
      }
    }
    placeShip(5, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate, fifthCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString() && item != fifthCoordinate.toString())

    console.log(availableCoordinates.length)
    return availableCoordinates
  }

  let checkValid = (availableCoordinatesArr, coordinate) => {
    
    if (!availableCoordinatesArr.toString().includes(coordinate.toString())) {
      return false
    } else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
      return false
    } else return true
  }
  
  let generateAllCoordinates = () => {
    let array = []
  
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        array.push([i, j])
      }
    }
    
    return array
  }
  
  let generateFirstCoordinate = () => {
    
    let firstNumber = Math.floor((Math.random() * 10) + 1)
    let secondNumber = Math.floor((Math.random() * 10) + 1)
  
    return [firstNumber, secondNumber]
  }
  
  return {placeShip, placeAllShips, receiveAttack, ships, missedShots, checkSunk, placeComputerPatrolBoat, placeComputerSub, placeComputerBattleship, placeComputerCarrier, checkValid, generateAllCoordinates, generateFirstCoordinate}
}

let newGame = gameBoard()
newGame.placeShip(3, [[1, 1], [1, 2], [1, 3]])
newGame.receiveAttack([1, 1])
newGame.receiveAttack([1, 2])
newGame.receiveAttack([1, 3])

newGame.checkSunk()

// newGame.checkSunk()

tests.gameBoard = gameBoard




