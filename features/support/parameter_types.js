const {defineParameterType} = require('cucumber')

defineParameterType({
  name: 'maker',
  regexp: /M[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateMaker({characterName})
  }
})

defineParameterType({
  name: 'breaker',
  regexp: /B[a-z]+/,
  transformer(characterName) {
    return this.findOrCreateBreaker({characterName})
  }
})
