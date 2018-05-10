const {When} = require('cucumber')

When('{Breaker} joins {Maker}\'s game', async function (breaker, maker) {
  const {gameId} = maker.getCurrentGame()
  await breaker.join({gameId})
})