import { gameBoard} from "./gameboard"

export let placeComputerPatrolBoat = (array, obj) => {
  
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
      
      if (checkValid(availableCoordinates, secondCoordinate) == true) {
        valid = true
        
      }
    }
  }

  if (direction > 0) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid = checkValid(availableCoordinates, secondCoordinate)
      
      if (checkValid(availableCoordinates, secondCoordinate) == true) {
        valid = true
        
      }
    }
  }
  obj.placeShip(2, [firstCoordinate, secondCoordinate])
  
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())
  
  console.log(availableCoordinates)
  return availableCoordinates
    
} 

export let placeComputerSub = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array
  console.log(availableCoordinates)
  
  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], firstCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  

  if (direction < 1) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true) {
        valid = true
        
      }
    }
  }

  if (direction > 0) {

    while (!valid) {
     
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)

      if (valid1 == true && valid2 == true && valid3 == true) {
        valid = true
        
      }
    }
  }
  

  obj.placeShip(3, [firstCoordinate, secondCoordinate, thirdCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString())

  console.log(availableCoordinates)
  return availableCoordinates
  
 }

export let placeComputerBattleship = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array

  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
  let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  let valid4 = checkValid(availableCoordinates, fourthCoordinate)

  if (direction < 1) {

    while (!valid) {
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true) {
        valid = true
      }
      
    }
  }

  if (direction > 0) {

    while (!valid) {
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true) {
        valid = true
      }
      
    }
  }
  obj.placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

  console.log(availableCoordinates)
  return availableCoordinates
}

export let placeComputerCarrier = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array

  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
  let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
  let fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  let valid4 = checkValid(availableCoordinates, fourthCoordinate)
  let valid5 = checkValid(availableCoordinates, fifthCoordinate)
  

  if (direction < 1) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
      valid5 = checkValid(availableCoordinates, fifthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true && valid5 == true) {
        valid = true
      }
    }
  }
  if (direction > 0) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      fifthCoordinate = [fourthCoordinate[0] + 1, fourthCoordinate[1]]
      valid5 = checkValid(availableCoordinates, fifthCoordinate)

      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true && valid5 == true) {
        valid = true
      }
    }
  }

  obj.placeShip(5, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate, fifthCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString() && item != fifthCoordinate.toString())
  
  console.log(availableCoordinates)
  return availableCoordinates
}


let checkValid = (availableCoordinatesArr, coordinate) => {
  
  if (!itemInArray(availableCoordinatesArr, coordinate) == true) {
    return false
  }
   else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
    return false
  } else return true
}

let itemInArray = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
        return true;  
    }
}
return false; 
}

export let generateAllCoordinates = () => {
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

// let checkValid = (availableCoordinatesArr, coordinate) => {
  
//   if (!availableCoordinatesArr.toString().includes(coordinate.toString())) {
//     return false
//   } else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
//     return false
//   } else return true
// }

// export let placeComputerPatrolBoat = function(array, obj) {
  
//   let direction = Math.floor(Math.random() * 2)
  
//   let availableCoordinates = array

//   let valid = false
//   let firstCoordinate = generateFirstCoordinate()

//     let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//   if (direction < 1) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//       valid = checkValid(availableCoordinates, secondCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
//         valid = true
//       }
//     }
//   }

//   if (direction > 0) {
//     valid = false
//     firstCoordinate = generateFirstCoordinate()

//     secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
//       valid = checkValid(availableCoordinates, secondCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
//         valid = true
//       }
//     }
//   }
//   obj.placeShip(2, [firstCoordinate, secondCoordinate])
  
  
  
//   availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())
  
//   console.log(availableCoordinates)
//   return availableCoordinates
    
// } 


// export let placeComputerBattleship = (array, obj) => {
//   let direction = Math.floor(Math.random() * 2)
  
//   let availableCoordinates = array

//   let valid = false

//   let firstCoordinate = generateFirstCoordinate()

//   let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

//   let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

//   let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]


//   if (direction < 1) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       checkValid(availableCoordinates, firstCoordinate)
//       secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//       checkValid(availableCoordinates, secondCoordinate)
//       thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
//       checkValid(availableCoordinates, thirdCoordinate)
//       fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
//       checkValid(availableCoordinates, fourthCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
//         valid = true
//       }
      
//     }
//   }

//   if (direction > 0) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       checkValid(availableCoordinates, firstCoordinate)
//       secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
//       checkValid(availableCoordinates, secondCoordinate)
//       thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
//       checkValid(availableCoordinates, thirdCoordinate)
//       fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
//       checkValid(availableCoordinates, fourthCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
//         valid = true
//       }
      
//     }
//   }
//   obj.placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
  
//   availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

  
//   return availableCoordinates
// }