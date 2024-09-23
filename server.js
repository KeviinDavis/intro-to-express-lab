// 1. Be Polite, Greet the User

const express = require('express');
const app = express();
const port = 3000;

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// //2. Rolling the Dice

app.get('/roll/:number',(req, res) => {
    const num = Number(req.params.number);

    if (isNaN(num)) {
        res.send('You must specify number.');
    } else {
        const randomNumber = Math.floor(Math.random() * (num + 1));
        res.send(`You rolled a ${randomNumber}`);
    }
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// 3. I Want THAT One!
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = Number(req.params.index);

    if(index < 0 || index >= collectibles.length || isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        const item = collectibles[index];
        res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});