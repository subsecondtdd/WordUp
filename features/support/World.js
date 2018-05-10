const {MemoryPublisher} = require('pubsub-multi')
const {setWorldConstructor} = require('cucumber')
const Engine = require('../../lib/domain/Engine.js')

class Maker {
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

  // Test Views

  getCurrentGame() {
    return this._currentGame
  }
}

class Breaker {
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

class World {
  constructor() {
    this._pubSub = new MemoryPublisher()
    this._engine = new Engine({pubSub: this._pubSub})
    this._cast = new Map()
  }

  findOrCreateMaker({characterName}) {
    if (!this._cast.has(characterName)) {
      this._cast.set(characterName, new Maker({
        engine: this._engine,
        subscriber: this._pubSub.makeSubscriber()
      }))
    }
    return this._cast.get(characterName)
  }

  findOrCreateBreaker({characterName}) {
    if (!this._cast.has(characterName)) {
      this._cast.set(characterName, new Breaker({
        engine: this._engine,
        subscriber: this._pubSub.makeSubscriber()
      }))
    }
    return this._cast.get(characterName)
  }
}

setWorldConstructor(World)
