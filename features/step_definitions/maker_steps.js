const assert = require('assert')
const {When, Then} = require('cucumber')

When('{maker} creates a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

Then('{maker} should be waiting for a breaker to join', function (maker) {
  assert(maker.isWaitingForBreakerToJoin())
})
