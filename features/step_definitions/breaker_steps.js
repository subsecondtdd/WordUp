const {When} = require('cucumber')

When('{breaker} joins {maker}\'s game', async function (breaker, maker) {
  const {gameId} = maker.getCurrentGame()
  await breaker.join({gameId})
})