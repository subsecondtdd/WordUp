module.exports = class Maker {
  constructor({engine, subscriber}) {
    this._engine = engine
    this._subscriber = subscriber
    this._currentGame = null
  }

  async createGame({word}) {
    const gameId = 'game-123' // TODO: generate the ID
    await this._subscriber.subscribe(gameId, async () => {
      this._currentGame = await this._engine.getGame({gameId})
    })
    await this._engine.createGame({gameId, word})
  }

  async score({score}) {
    await this._engine.score({ gameId: this._currentGame.gameId, score })
  }

  // Test Views
  hasCurrentGame() {
    return Boolean(this._currentGame)
  }

  getCurrentState() {
    return this._currentGame.state
  }

  getCurrentGameId() {
    return this._currentGame.gameId
  }
}
