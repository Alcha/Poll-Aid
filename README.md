# Survaid

Survaid is a tool for managing polls/surveys without any backend for persistence as of yet.

## Sample Uses

```javascript
const Poll = require('../Survaid')

const poll = new Poll({
  label: 'Who is the greatest gamer of all time?',
  allowMultiple: true,
  anyInput: true,
  startTime: '01/30/2018-06:00',
  endTime: '01/31/2018-06:00'
})

for (let x = 1; x < 3; x++) {
  for (let y = 0; y < (x * 5); y++) {
    poll.vote(`Gamer ${x === 1 ? 'A' : 'B'}`).then(status => {
      if (x === 2 && y === ((x * 5) - 1)) console.log(poll.values)
    }).catch(err => console.error(err))
  }
}
```
