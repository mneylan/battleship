import './main.sass'
import './ship.js'
import './gameboard.js'
import { createPlayer } from './player.js'
import { makeGameBoard, renderHits, renderMisses, attackEventListener, clearBoard } from './dom.js'



let playerOne = createPlayer()
let playerTwo = createPlayer()

let playerOneBoard = playerOne.board
let playerTwoBoard = playerTwo.board




makeGameBoard("board1", "player1")
makeGameBoard("board2", "player2")
playerOne.populateShotsAvailable()
playerTwo.populateShotsAvailable()

// playerOneBoard.placeAllShips()
// playerTwoBoard.placeAllShips()

// let compShipOne = playerTestBoard.placeComputerPatrolBoat(playerTestBoard.generateAllCoordinates())
// let compShipTwo = playerTestBoard.placeComputerSub(compShipOne)
// let compShipThree = playerTestBoard.placeComputerSub(compShipTwo)
// let compShipFour = playerTestBoard.placeComputerBattleship(compShipThree)
// let compShipFive = playerTestBoard.placeComputerCarrier(compShipFour)

playerOneBoard.placeAllComputerShips()
playerTwoBoard.placeAllComputerShips()
// console.log(playerOneBoard.ships)




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

let compVsComp = () => {
  for (let i = 0; i < 100; i++){
    let attackP1 = playerOne.computerAttack()
  
    let receiveP2 = playerTwoBoard.receiveAttack(attackP1)
    let renderP1Hits = renderHits("player2", playerTwoBoard)
    let renderP1Misses = renderMisses("player2", playerTwoBoard)
    let sunkP2 = playerTwoBoard.checkSunk("Player 1")
      if (sunkP2 == true) {
        
      return
    }
  
  let attackP2 = playerTwo.computerAttack()
  
  let receiveP1 = playerOneBoard.receiveAttack(attackP2)
  let renderP2Hits = renderHits("player1", playerOneBoard)
  let renderP2Misses = renderMisses("player1", playerOneBoard)
  let sunkP1 = playerOneBoard.checkSunk("Player 2")
    if (sunkP1 == true) {
      
    return
  }
  }
}

export let newGame = () => {
  let btn = document.querySelector('.btn-newgame')

  btn.addEventListener('click', () => {
    clearBoard()
    playerOne = createPlayer()
    playerTwo = createPlayer()
    playerOneBoard = playerOne.board
    playerTwoBoard = playerTwo.board
    playerOne.populateShotsAvailable()
    playerTwo.populateShotsAvailable()

    playerOneBoard.placeAllComputerShips()
    playerTwoBoard.placeAllComputerShips()
    
    compVsComp()
  })
}

// compVsComp()


//Computer picking coordinates
// Math.floor((Math.random() * 10) + 1);