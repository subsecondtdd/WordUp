const {MemoryPublisher} = require('pubsub-multi')
const {setWorldConstructor} = require('cucumber')
const Engine = require('../../lib/domain/Engine.js')
const AsyncProxy = require('./AsyncProxy')

class World {
  constructor() {
    this._pubSub = new MemoryPublisher()
    this._engine = new Engine({pubSub: this._pubSub})
    this._cast = new Map()
    this._asyncDelay = parseInt(process.env.wordup_async_character)
  }

  findOrCreateCharacter({Role, characterName}) {
    if (!this._cast.has(characterName)) {
      let role = new Role({
        engine: this._engine,
        subscriber: this._pubSub.makeSubscriber()
      })
      if(!isNaN(this._asyncDelay)) role = AsyncProxy.build(role, this._asyncDelay)
      this._cast.set(characterName, role)
    }
    return this._cast.get(characterName)
  }
}



setWorldConstructor(World)
