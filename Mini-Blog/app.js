const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// array to store posts
let posts = [];

// home Route 
app.get('/', (req, res) => {
    res.render('home');
});

// submission Route 
app.post('/submit', (req, res) =>  {
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
    };

    posts.push(newPost);
    res.render('confirmation', { post: newPost });
});

// entries Route 
app.get('/entries', (req, res) => {
    res.render('entries', { data: posts });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
