const flakes = require('simpleflakes')
const newFlake = flakes.simpleflake(Date.now(), 23, Date.UTC(2000, 0, 1))
const mongoose = require('mongoose')
const baseUri = 'mongodb://localhost/polls'

class Poll {
  /**
   * The constructor for a Poll object. Accepts a few options for managing
   * the given poll, all are optional.
   *
   * @param {string} [pollId]
   */
  constructor (pollId) {
    if (pollId !== undefined) this.pollId = pollId
    else this.pollId = newFlake
  }

  /**
   *
   * @param {Object} options
   * @param {string} options.name The given name of the poll.
   * @param {string} options.label The label/descrption to display for the poll.
   * @param {string} options.startTime When the poll should start.
   * @param {string} options.endTime When the poll should end.
   * @param {string[]} [options.values] An array of acceptable answers to the poll.
   * @param {boolean} [options.allowMultiple] Whether or not more than one answer is allowed.
   */
  createPoll (options) {
    if (options.values === undefined) options.values = '*'
    if (options.allowMultiple === undefined) options.allowMultiple = false

    return new Promise((resolve, reject) => {
      const poll = new (require('./util/models/Poll'))(options)
      poll.save(err => {
        if (err) reject(err)
        else resolve(poll)
      })

      mongoose.connect(baseUri)
    })
  }

  vote (pollId, options) {

  }
}

module.exports = Poll
