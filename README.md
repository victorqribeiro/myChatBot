# myChatBot

A simple JavaScript chatbot using [Regular expression](https://en.wikipedia.org/wiki/Regular_expression) and [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

A live version is hosted [here](https://victorribeiro.com/myChatBot)

## Basic rules

Right now there's only a few rules written. The bot can answer "what is your name", "how old are you", "what day is today" and "what day is tomorrow". But you can, of course, increment that.

## How to write rules

I do recommend to take a look at regular expression and see how it works. But, let's pretend we are interested in knowing if the user are asking about our age (we being the chat bot). So, a questio like "How old are you?" you translate in the following regular expression:

```javascript
/.*how.*old.*you.*/
```

The bot would understand the rule as *anything* how *anything* old *anything* you *anything*.

Very simple, eh?!

So, the bot is really just a collection of rules, that are defined as objects:

```javascript
{rule: /.*how.*old.*you.*/, response: ["I don't know how old I am", "I'm pretty young, that's for sure"]}
```

As you can see, the response is an array of answers that will be choosen randomly, so the bot seems more interesting.

you can get fancy, but setting the response to the number 1 and writting a function to deal with the respose:

```javascript
{rule: /.*what.*do.*you.*think.*about(.*)/, response: 1, action: dealWithQuestion}

function dealWithQuestion(question){
  return "I don't like "+ question + " very much!";
}
```

In this case, the parentesis means that you want to capture whatever comes after *what do you think about*. So, if the question is "what do you think about coconuts?" the answer would be "I don't like coconuts very much!".
