const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('{Maker} is not playing a game', function (maker) {
  // noop - we just need a maker
})

Given('{Maker} has created a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

When('{Maker} creates a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

Then('{Maker} should be waiting for a breaker to join', function (maker) {
  assert.equal(maker.getCurrentGame().state, 'waiting-for-breaker-to-join')
})

Then('{Maker} should not be in a game', function (maker) {
  assert.equal(maker.getCurrentGame(), null)
})

Then('{Maker} should be waiting for a guess', function (maker) {
  assert.equal(maker.getCurrentGame().state, 'waiting-for-guess')
})