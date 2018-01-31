# Survaid

Survaid is a tool for managing polls/surveys without any backend for persistence as of yet.

## Sample Uses

```javascript
const Poll = require('survaid')

const poll = new Poll({
  label: 'Who is the greatest gamer of all time?',
  allowMultiple: true,
  anyInput: true,
  startTime: '01/30/2018-06:00UTC',
  endTime: '01/31/2018-06:00UTC'
})

for (let x = 1; x < 3; x++) {
  for (let y = 0; y < (x * 5); y++) {
    poll.vote(`Gamer ${x === 1 ? 'A' : 'B'}`).then(status => {
      if (x === 2 && y === ((x * 5) - 1)) console.log(poll.values)
    }).catch(err => console.error(err))
  }
}
```

```javascript
const Poll = require('../Survaid')

const poll = new Poll({
  label: 'What would you like to do tomorrow?',
  startTime: '01/30/2018-08:00UTC',
  endTime: '01/31/2018-08:00UTC',
  allowMultiple: false,
  anyInput: true
})

Promise.all([
  poll.vote('Go to the beach!', 1),
  poll.vote('Go to the park!', 10),
  poll.vote('Go to the park!', 11),
  poll.vote('Go to the movies!', 100),
  poll.vote('Go to the park!', 101)
]).then(res => {
  console.log(poll.results())
}).catch(err => console.error(err))

```