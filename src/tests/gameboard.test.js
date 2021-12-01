import { tests } from '../gameboard.js'


test('create new gameBoard object with an empty array of ships', () => {
  expect(tests.gameBoard().ships).toEqual([])
})

test('after placing one ship on the gameboard the ships array length should be one.', () => {
  let newGame = tests.gameBoard()
  newGame.placeShip(3, [[1, 1], [1, 2], [1, 3]])
  expect(newGame.ships.length).toEqual(1)
})