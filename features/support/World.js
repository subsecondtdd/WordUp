const {setWorldConstructor} = require('cucumber')

const IDLE = 1
const WAITING_FOR_BREAKER_TO_JOIN = 2

class Maker {
  constructor() {
    this._state = IDLE
  }

  async createGame({word}) {
    this._state = WAITING_FOR_BREAKER_TO_JOIN
  }

  isWaitingForBreakerToJoin() {
    return this._state === WAITING_FOR_BREAKER_TO_JOIN
  }
}

class World {
  constructor() {
    this._cast = new Map()
  }

  findOrCreateMaker({characterName}) {
    if (!this._cast.has(characterName)) {
      this._cast.set(characterName, new Maker())
    }
    return this._cast.get(characterName)
  }
}

setWorldConstructor(World)
