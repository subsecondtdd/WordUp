const assert = require('assert')
const {Given, When, Then} = require('cucumber')

Given('{maker} is not playing a game', function (maker) {
  // noop - we just need a maker
})

When('{maker} creates a game', async function (maker) {
  await maker.createGame({word: 'steak'})
})

Then('{maker} should be waiting for a breaker to join', function (maker) {
  assert(maker.isWaitingForBreakerToJoin())
})

Then('{maker} should not be waiting for a breaker to join', function (maker) {
  assert(!maker.isWaitingForBreakerToJoin())
});
