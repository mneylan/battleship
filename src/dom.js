import { createPlayer } from './player.js'
import { progressGame } from './index.js'

export let makeGameBoard = (board, player) => {
  
  let boardContainer = document.querySelector(`.${board}`)
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let div = document.createElement('div')
      div.setAttribute(`data-${player}-${i}-${j}`, `${i}-${j}`)
      div.setAttribute(`data-id`, `${i}-${j}`)
      boardContainer.appendChild(div)
    }
  }
}

export let renderHits = (player, obj) => {
  let arr = obj.ships

    arr.forEach(ship => {
      ship.hitPosition.forEach(position => {
        let ele = document.querySelector(`[data-${player}-${position[0]}-${position[1]}]`)

        ele.style.backgroundColor = "red"
      })
    })
    
  
}

export let renderMisses = (player, obj) => {
  let arr = obj.missedShots
    
    arr.forEach(miss => {
      
      let ele = document.querySelector(`[data-${player}-${miss[0]}-${miss[1]}]`)
      
      ele.style.backgroundColor = "white"
    })
}

export let attackEventListener = (player, obj) => {
  let boardCoordinate = document.querySelectorAll(`.board${player} > *`)

  boardCoordinate.forEach(item => {
    item.addEventListener('click', obj.humanAttack, {once: true})
  })
}

export let clearBoard = () => {
  let board2 = document.querySelectorAll('.board2 > *')
  let board1 = document.querySelectorAll('.board1 > *')
  let winner = document.querySelector('.winner')
  let newGameBtn = document.querySelector('.btn-newgame')
  board2.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
  board1.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
  winner.remove()
  newGameBtn.remove()
}

export let showWinner = (otherPlayer) => {
  let body = document.body
  let div = document.createElement('div')
  div.classList = "winner"
  div.textContent = `${otherPlayer} is the winner!`
  body.appendChild(div)
}

export let removeGameListener = () => {
  let gridItems = document.querySelectorAll('.board2 > *')

  gridItems.forEach(item => 
    item.removeEventListener('click', progressGame))
}

export let newGameButton = () => {
  let body = document.body
  let btn = document.createElement('btn')
  btn.classList = "btn-newgame"
  btn.textContent = "New Game"
  body.appendChild(btn)
}