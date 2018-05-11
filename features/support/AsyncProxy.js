/**
 * Wraps an object in a proxy
 */
module.exports = class AsyncProxy {
  static build(target, asyncDelay) {
    return new Proxy(target, new AsyncProxy(asyncDelay))
  }

  constructor(asyncDelay) {
    this._asyncDelay = asyncDelay
  }

  get(target, property) {
    const member = target[property]
    if(typeof member === 'function' && !member.name.match(/^get|has|is/)) {
      return (...args) => {
        setTimeout(() => {
          member.apply(target, args).catch(err => {
            console.error(err)
          })
        }, this._asyncDelay)
      }
    }
    return member
  }
}