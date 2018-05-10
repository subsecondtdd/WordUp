const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('{Breaker} has joined {Maker}\'s game', async function (breaker, maker) {
  await maker.createGame({word: 'steak'})
  const {gameId} = maker.getCurrentGame()
  await breaker.join({gameId})
})

When('{Breaker} joins {Maker}\'s game', async function (breaker, maker) {
  const {gameId} = maker.getCurrentGame()
  await breaker.join({gameId})
})

When('{Breaker} makes a guess', async function (breaker) {
  await breaker.guess({word: 'stale'})
})

Then('{Breaker} should be waiting for a score', function (breaker) {
  assert.equal(breaker.getCurrentGame().state, 'waiting-for-score')
})