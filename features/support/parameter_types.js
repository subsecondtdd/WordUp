const {defineParameterType} = require('cucumber')
const Maker = require('./Maker')
const Breaker = require('./Breaker')

defineParameterType({
  name: 'Maker',
  regexp: /M[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateCharacter({Role: Maker, characterName})
  }
})

defineParameterType({
  name: 'Breaker',
  regexp: /B[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateCharacter({Role: Breaker, characterName})
  }
})
