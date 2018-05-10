const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('{maker} is not playing a game', function (maker) {
  // noop - we just need a maker
})

Given('{maker} has created a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

When('{maker} creates a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

Then('{maker} should be waiting for a breaker to join', function (maker) {
  assert.equal(maker.getCurrentGame().state, 'waiting-for-breaker-to-join')
})

Then('{maker} should not be in a game', function (maker) {
  assert.equal(maker.getCurrentGame(), null)
})

Then('{maker} should be waiting for a guess', function (maker) {
  assert.equal(maker.getCurrentGame().state, 'waiting-for-guess')
})