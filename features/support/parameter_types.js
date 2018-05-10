const {defineParameterType} = require('cucumber')
const Maker = require('./Maker')
const Breaker = require('./Breaker')

characters = [
  {Role: Maker, regexp: /M[a-z]+/},
  {Role: Breaker, regexp: /B[a-z]+/},
]

for (const {Role, regexp} of characters) {
  defineParameterType({
    name: Role.name,
    regexp,
    transformer(characterName) {
      return this.findOrCreateCharacter({Role, characterName})
    }
  })
}
