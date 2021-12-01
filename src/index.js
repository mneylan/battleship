import './main.sass'
import './ship.js'
import './gameboard.js'
import { createPlayer } from './player.js'
import { makeGameBoard, renderHits, renderMisses, attackEventListener, clearBoard } from './dom.js'



const playerOne = createPlayer()
const playerTwo = createPlayer()
const playerTest = createPlayer()
const playerOneBoard = playerOne.board
const playerTwoBoard = playerTwo.board
const playerTestBoard = playerTest.board



makeGameBoard("board1", "player1")
makeGameBoard("board2", "player2")
playerOne.populateShotsAvailable()
playerTwo.populateShotsAvailable()

playerOneBoard.placeAllShips()
playerTwoBoard.placeAllShips()

let compShipOne = playerTestBoard.placeComputerPatrolBoat(playerTestBoard.generateAllCoordinates())
let compShipTwo = playerTestBoard.placeComputerSub(compShipOne)
let compShipThree = playerTestBoard.placeComputerSub(compShipTwo)
let compShipFour = playerTestBoard.placeComputerBattleship(compShipThree)
let compShipFive = playerTestBoard.placeComputerCarrier(compShipFour)



console.log(playerTestBoard.ships)

let game = () => {
  newGamePlayer1()
    
}

let humanPlayerAttack = (coordinate) => {
  let attackP1 = playerOne.humanAttack(coordinate)
  let receiveP2 = playerTwoBoard.receiveAttack(attackP1)
  let renderP1Hits = renderHits("player2", playerTwoBoard)
  let renderP1Misses = renderMisses("player2", playerTwoBoard)
  let sunkP2 = playerTwoBoard.checkSunk("Player 1")
    if (sunkP2 == true) {
      
    return
  }

}

let computerPlayerAttack = () => {
  let attackP2 = playerTwo.computerAttack()
    let receiveP1 = playerOneBoard.receiveAttack(attackP2)
    let renderP2Hits = renderHits("player1", playerOneBoard)
    let renderP2Misses = renderMisses("player1", playerOneBoard)
    let sunkP1 = playerOneBoard.checkSunk("Player 2")
    if (sunkP1 == true) {
      
    return
  }
}


let newGamePlayer1 = () => {
  let gridItems = document.querySelectorAll('.board2 > *')

  gridItems.forEach(item => { 
    item.addEventListener('click', progressGame, {once: true})
  })

}

export let progressGame = (item) => {
  
  humanPlayerAttack(item)
  computerPlayerAttack()
}



// let game = () => {
//   let eitherSunk = () => {
//     if (playerTwoBoard.checkSunk("Player 1") == true ||playerOneBoard.checkSunk("Player 2") == true) {
//       return true
//     } else {
//       return false
//     }
//   }
//   newGamePlayer1()
//   while (eitherSunk == false) {
//     eitherSunk()
//     progressGame()

//   }
  
// }

// let newGamePlayer2 = () => {
//   let gridItems = document.querySelectorAll('.board1 > *')

//   gridItems.forEach(item => { 
//     item.addEventListener('click', gamePlayer2, {once: true})
//   })

// }

game()

//Computer picking coordinates
// Math.floor((Math.random() * 10) + 1);