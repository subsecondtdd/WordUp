module.exports = class Breaker {
  constructor({engine, subscriber}) {
    this._engine = engine
    this._subscriber = subscriber
  }

  async join({gameId}) {
    await this._subscriber.subscribe(gameId, async () => {
      this._currentGame = await this._engine.getGame({gameId})
    })
    await this._engine.joinGame({gameId})
  }

  async guess({word}) {
    const gameId = this._currentGame.gameId
    await this._engine.guess({gameId, word})
  }

  // Test Views

  getCurrentGame() {
    return this._currentGame
  }
}
