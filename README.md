# Survaid

Survaid is a tool for managing polls/surveys with a MongoDB backend for persistence of the given
poll data.

## Sample Use

While the module isn't yet functional, a sample use case would be something like so:

```javascript
const poll = new Poll({label: "Do you like icecream", values: ["yes", "no"], allowMultiple: false});

poll.vote('yes').then(results => {
  console.log(`Yes votes = ${results.yes}`)
  console.log(`No votes = ${results.no}`)
})
```