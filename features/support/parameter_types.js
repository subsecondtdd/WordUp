const {defineParameterType} = require('cucumber')
const Maker = require('./Maker')
const Breaker = require('./Breaker')

defineParameterType({
  name: 'maker',
  regexp: /M[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateCharacter({Role: Maker, characterName})
  }
})

defineParameterType({
  name: 'breaker',
  regexp: /B[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateCharacter({Role: Breaker, characterName})
  }
})
