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
}
