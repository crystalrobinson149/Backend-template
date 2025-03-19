import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
console.log(process.env.MONGODB_URI);

const PORT = process.env.PORT || 4000;
const app = express();

// set view engine
app.set('views', './views')
app.set('view engine', 'pug')

// middleware
app.use(express.static('./public')) //serves static files and makes them available to the templates
app.use(express.json()) //built in express middleware that parses json in req into req.body
app.use(express.urlencoded({extended: true})) //built in express middleware that will parse info from url
app.use(morgan('dev')); //logging middleware
app.use(helmet()); // security middleware that makes server more secure
app.use(cors())

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})