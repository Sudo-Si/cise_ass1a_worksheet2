const express = require("express");
const articles = require("./dummydata/articles");

const server = express();
server.set("view engine", "ejs")
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
//const articles = require("/dummydata/articles/"); //the problem is with this code <-- for some reason this did not work suspect it is the missing period

server.get('/', (req, res) => {
    res.send("Root API")
})
server.get('/test', (req, res) => {
    res.send("test is working")
})


server.get('/api/articles', (req, res) => {
        // res.send("Articles")
        res.json(articles);
    })
    //search articles by number localhost:5000/api/articles/n
server.get('/api/articles/:id', (req, res) => {
    const article = articles.find((n) => n.id === req.params.id);
    res.send(article);
    console.log(req.params);
});
server.listen(PORT, console.log(`Server is Working... and listening on PORT:${PORT}`));