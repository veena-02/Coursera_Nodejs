const http=require('http');
const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const dishRouter = require('./routes/dishRouter.js')
const promoRouter = require('./routes/promoRouter.js')
const leaderRouter = require('./routes/leaderRouter.js')

const hostname='localhost';
const port=3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/json');
    res.end('<html><body><h1>This is my express server up on running</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`The server is running on http://${hostname}:${port}`);
})












