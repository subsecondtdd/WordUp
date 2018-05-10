const {setWorldConstructor} = require('cucumber')

class Maker {
  async createGame({word}) {

  }

  isWaitingForBreakerToJoin() {
    return true
  }
}

class World {
  constructor() {
    this._cast = new Map()
  }
  
  findOrCreateMaker({characterName}) {
    if(!this._cast.has(characterName)) {
      this._cast.set(characterName, new Maker())
    }
    return this._cast.get(characterName)
  }
}

setWorldConstructor(World)
