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


    let attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]


    return attack
    
  }


  return {board, shotsAvailable, populateShotsAvailable, computerAttack, humanAttack}
}

tests.createPlayer = createPlayer

