
import { tests } from '../ship.js'

const { TestWatcher } = require('@jest/core')
// const shipTest = require('../ship.js')

test('create new ship object with a length of 3', () => {
  expect(tests.createShip(3).length).toBe(3)
})

test('create new ship object with a sunk value of false', () => {
  expect(tests.createShip(3).sunk).toBeFalsy()
})

test('with a new ship the isSunk function should return false', () => {
  expect(tests.createShip(3).isSunk()).toBeFalsy()
})