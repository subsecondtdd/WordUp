const {MemoryPublisher} = require('pubsub-multi')
const {setWorldConstructor} = require('cucumber')
const Engine = require('../../lib/domain/Engine.js')

class World {
  constructor() {
    this._pubSub = new MemoryPublisher()
    this._engine = new Engine({pubSub: this._pubSub})
    this._cast = new Map()
  }

  findOrCreateCharacter({Role, characterName}) {
    if (!this._cast.has(characterName)) {
      this._cast.set(characterName, new Role({
        engine: this._engine,
        subscriber: this._pubSub.makeSubscriber()
      }))
    }
    return this._cast.get(characterName)
  }
}

setWorldConstructor(World)
