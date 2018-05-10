const {MemoryPublisher} = require('pubsub-multi')
const {setWorldConstructor} = require('cucumber')
const Maker = require('./Maker')
const Breaker = require('./Breaker')
const Engine = require('../../lib/domain/Engine.js')

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
