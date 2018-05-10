module.exports = class Engine {
  constructor({pubSub}) {
    this._pubSub = pubSub
    this._gameById = new Map()
  }

  async createGame({gameId, word}) {
    const game = {gameId, word, state: 'waiting-for-breaker-to-join', version: 1}
    this._gameById.set(gameId, game)
    await this._pubSub.publish(gameId, game.version)
  }

  async getGame({gameId}) {
    return this._gameById.get(gameId)
  }

  async joinGame({gameId}) {
    const game = this._gameById.get(gameId)
    game.state = 'waiting-for-guess'
    await this._pubSub.publish(gameId, ++game.version)
  }

  async guess({gameId, word}) {
    const game = this._gameById.get(gameId)
    game.state = 'waiting-for-score'
    await this._pubSub.publish(gameId, ++game.version)
  }

  async score({gameId, score}) {
    const game = this._gameById.get(gameId)
    game.state = 'waiting-for-guess'
    await this._pubSub.publish(gameId, ++game.version)
  }
}
