const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to ossabprojects!</h1>
    <h2>This website is under development. Stay tuned for future updates!</h2>
    <p>
        Here you can find some of my programming projects. <br>
        Some of my projects are: Blinding Guys (a game), CatLang NPM Package, And More! You will be able to find all of these projects in this website.
    </p>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    * {
    font-family: 'Odibee Sans', cursive;
    }
        body {
        background-color: #5865F2;
        text-align: center;
        }
            h1 {
                color: #fff;
                letter-spacing: 3px;
                font-size: 100px;
            }
                h2 {
                    color: #fff;
                    letter-spacing: 1px;
                    font-size: 70px;
                }
                    p {
                        color: #fff;
                        letter-spacing: 0,5px;
                        font-size: 50px;
                    }
    </style>
    `)
});

app.listen(PORT, () => {
    console.log('App Listening on port '+PORT+'!')
})