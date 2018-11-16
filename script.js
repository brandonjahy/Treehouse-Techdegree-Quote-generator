/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
let quotes = [
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    year: '1961'
  },
  {
    quote: 'With the new day comes new strength and new thoughts.',
    source: 'Eleanor Roosevelt',
  },
  {
    quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    source: 'Hellen Keller',
  },
  {
    quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
    source: 'Og Mandino',
  },
  {
    quote: 'It always seems impossible until it\'s done.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'Set your goals high, and don\'t stop till you get there.',
    source: 'Bo Jackson',
  },
  {
    quote: 'If you can dream it, you can do it.',
    source: 'Walt Disney',
  },
  {
    quote: 'If you want to conquer fear, don\'t sit home and think about it. Go out and get busy.',
    source: 'Dale Carnegie',
  },
]





/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.