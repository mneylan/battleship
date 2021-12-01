import { tests } from '../player.js'


test('create new player object with access to the gameBoard function. Should have an empty array of ships', () => {
  let player1 = tests.createPlayer()
  expect(player1.board.ships).toEqual([])
})

test('player should be able to place a ship on the board. Once placed it will be added to the ships array and have a length of 3.', () => {
  let player2 = tests.createPlayer()
  player2.board.placeShip(3, [[2, 1], [2, 2], [2, 3]])
  expect(player2.board.ships[0].length).toEqual(3)
})